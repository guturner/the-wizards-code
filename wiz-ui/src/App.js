import './App.css';

function App() {

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

function runCode() {
  // TODO: Coming Soon!
}

export default App;
