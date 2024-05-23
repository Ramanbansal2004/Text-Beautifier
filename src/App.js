
import './App.css';
import Navbar from './components/Navbar';
import TextCon from './components/TextCon';
import React, {useState} from 'react';
import Alert from './components/Alert.js';
function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert =(message, type)=> {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1300);
  }
  const toggleMode = ()=> {
    if(mode ==='light')
    {
      setMode('dark');
      document.body.style.backgroundColor = '#0c2854';
      showAlert("Dark Mode Enabled", "Success");
    }
    else
    {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode Enabled", "Success");
    }
  }
  return (
    <>
     <Navbar title="Text" mode={mode} toggleMode= {toggleMode}/>
     <Alert alert={alert}/>
     <div className="container my 3">
      <TextCon heading="Enter text to analyze" mode={mode} showAlert={showAlert}/>
     </div>
    </>
  );
}

export default App;
