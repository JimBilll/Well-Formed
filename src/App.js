import logo from './logo.svg';
import './App.css';
import Form from 'form-generator/form';
import TextField from "form-generator/field_types/textField.js";

function App() {
  var fields = [new TextField("Username", false),
              new TextField("Password", false)]
  var loginForm = new Form(fields);

  var loginString = loginForm.generateForm();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <td dangerouslySetInnerHTML={{__html: loginString}} />
      </header>
    </div>
  );
}

export default App;
