// import logo from './logo.svg';
import './App.css';
import Navbar from'./components/Navbar';
// import About from './components/About';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React,{useState} from 'react';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";



function App() {
  const [Mode, setMode] = useState('light') //Whether Dark mode is enable
  const [navMode, setnavMode] = useState('dark')
  const [alert, setAlert] = useState(null)

  const showAlert=(message,type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
        setAlert(null)
      }, 2500);
  }

  const toggleMode=()=>{
    if(Mode === 'light')
    {
      setMode('dark');
      setnavMode('light');
      document.body.style.backgroundColor = '#082350';
      document.body.style.color = 'white';
      showAlert('Dark Mode Enabled.','success');
    }
    else
    {
      setMode('light');
      setnavMode('dark');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert('Light Mode Enabled.','success');
    }
  }

  return (
    <div>
        {/* <Router> */}
        {/* <Navbar /> */}
        
        <Navbar title="TextUtils" aboutText="About" serviceText="Services" Mode={Mode} toggleMode={toggleMode} navmode={navMode}/>
        <Alert alert={alert}/>

         {/* <div className="container my-3">
          <TextForm heading="Enter paragraph to analyse below" Mode={Mode} showAlert={showAlert}/>
           <About/>
         </div>  */}

            {/* <Switch>
              <Route exact path="/about">
                <About />
              </Route>
              <Route exact path="/"> */}
                  <div className="container my-3">
                  <TextForm heading="Enter paragraph to analyse below" Mode={Mode} showAlert={showAlert}/>
                  {/* <About/> */}
                </div>
              {/* </Route>
            </Switch>
        </Router> */}
    </div>
  );
}

export default App;
