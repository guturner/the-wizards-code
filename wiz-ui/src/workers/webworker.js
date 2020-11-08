/**
 * Hack to get Web Workers to work in React:
 * https://medium.com/prolanceer/optimizing-react-app-performance-using-web-workers-79266afd4a7
 */
export default class WebWorker {
    
    constructor(worker) {
        const code = worker.toString(); // The literal text from the .worker.js file.
        const blob = new Blob(['(' + code + ')()']); // Call the function defined in the .worker.js file, for example: ( () => { return 1; } )() 

        return new Worker(URL.createObjectURL(blob)); // Instead of the Web Worker pointing to a file, it points to a blob in memory.
    }
}