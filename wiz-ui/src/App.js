import './App.css';
import WebWorker from './workers/webworker';
import worker from './workers/sample.worker';

function App() {

  const sampleWorker = new WebWorker(worker);

  const runCode = () => {
    const envelope = { 'from' : 'Guy', 'message': 'Hello world!' };
    sampleWorker.postMessage(envelope);

    sampleWorker.onmessage = (e) => {
      console.log(e.data);
    };
  };

  return (
    <div>
      <form> 
        <textarea id="code" cols="40" rows="5">print "the Wizard's Code is coming..."</textarea><br /> 
        <button type="button" onClick={runCode}>Run</button> 
      </form> 
      <pre id="output"></pre>
    </div>
  );
}

export default App;
