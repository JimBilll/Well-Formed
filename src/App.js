import './App.css';
import CreateForm from './create_form/CreateForm';

function App() {
  return (
    <div className="App">
      <div className="App-nav">
        <h1>Good Form</h1>
        <p>ACCESSIBLE WEBFORMS AT YOUR FINGERTIPS</p>
      </div>
      <header className="App-header">
        <CreateForm />
      </header>
    </div>
  );
}

export default App;
