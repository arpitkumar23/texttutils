import './App.css';
import About from './component/About';
import Navbar from './component/Navbar';
import Textform from './component/Textform';
import Alert from './component/Alert';
import React,{useState} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode,setMode]=useState('dark');
  const[alert,setAlert]=useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500);
  }
 

  const toggleMode =()=>{
    if ( mode ==='light') {
      setMode('dark');
      document.body.style.backgroundColor ='#4357ab';
      showAlert("Dark mode has been enabled","success")
      document.title = 'texxtutills - Dark Mode';

      //set interval ka use title to change karne ke liye kiya jata hai har ek second me
      
   // setInterval(() => {
      //  document.title = 'texxtutills is amazing  Mode';
        
   //  },  2000);
    //setInterval(() => {
  //    document.title = 'install textulles  now';
       
   //  },  1500);
      
    }
    else{
      setMode('light');
      document.body.style.backgroundColor ='white';
      showAlert("Dark mode has been enabled","success")
      document.title = 'texxtutills - light Mode';
    }
  }
  return (
    <> 
    <Router> 
     
     <Navbar title="texxtutils" mode={mode}  toggleMode={toggleMode}/>
     <Alert alert="this is alert"/>
     <div className="container my-8">
     <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Textform showAlert={showAlert} heading="Enter the text analyzer below" mode={mode} />} />
        </Routes>
      </div>
    </Router> 
    </>
    );
}

export default App;




 








