import './App.css';
import CreateForm from './create_form/CreateForm';
import Result from './create_form/Result';

function App() {
  return (
    <div className="App">
      <div className="App-nav" style={{ userSelect: "none" }}>
        <h1>Good Form</h1>
        <p>ACCESSIBLE WEBFORMS AT YOUR FINGERTIPS</p>
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
