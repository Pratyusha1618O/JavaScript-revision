// Promisification


function promisify(fn){
    return function(...args){
        return new Promise((resolve, reject) => {
            fn(...args, (error, result) => {
                if(error) 
                    return reject(error);
                return resolve(result)

            })
        })
    }
}


// without promise
function loadScript(src, callback){
    const script = document.createElement('script')

    script.src = src;
    script.onload = () => callback(null, script) // callback 1st parameter: error, 2nd param: result
    script.onerror = () => callback(new Error("Error loading"))

    document.head.appendChild(script);
};

const loadScriptNew = promisify(loadScript)
// loadScriptNew('test.js')
//     .then(() => console.log('done'))
//     .catch((err) => console.log("Erroe handled"))

(async() => {
    try{
        const result = await loadScriptNew('test.js')
        console.log("done")
    }
    catch(error){
        console.log(error)
    }
    
})();

// loadScript('test.js', (err, script) => {
//     if (err){
//         console.log(err)
//     }else{
//         console.log("script loaded")
//     }
// });

