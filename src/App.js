import './App.css';
import CreateForm from './create_form/CreateForm';
import Result from './create_form/Result';

function App() {
  return (
    <div className="App">
      <div className="App-nav">
        <div className="App-logo" style={{ userSelect: "none" }}>
          <h1>Well Formed</h1>
          <p>ACCESSIBLE WEBFORMS AT YOUR FINGERTIPS</p>
        </div>
        <a href="https://jmcl.xyz" className='creatorLink' target="none">
          <div className="App-creator">
            <p>Created by James McLean</p>
            <img src="other_assets/fritz.jpg" alt="James McLean Website"></img>
          </div>
        </a>
      </div>
      <header className="App-header">
        <CreateForm />
      </header>
      <Result />
      <footer className="App-footer">
        <p>© James McLean 2024</p>
        <p>All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
