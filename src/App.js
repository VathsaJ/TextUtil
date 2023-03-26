import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import TextArea from './Components/TextArea';
import Alert from './Components/Alert';
import About from './Components/About';





function App() {
  const [mode, setMode] = useState('light')
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#121212'
      showAlert("Dark mode activated")
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode activated")
    }
  }

  const [alert, setAlert] = useState(null);

  function showAlert(msg) {
    setAlert(msg)
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }


  return (
    <>
      <Navbar title="TextUtils" about="About" toggle={toggleMode} mode={mode} />
      <Alert msg={alert}></Alert>
      <div className="container my-3 ">
        <TextArea head="Enter text here" mode={mode} alert={showAlert} />

      </div>

    </>
  );

}

export default App;
