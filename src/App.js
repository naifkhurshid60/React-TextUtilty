//import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
//import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

// import {
//   BrowserRouter,
//   Routes,
//   Route,
//   //Link,
//   //Outlet
// } from "react-router-dom";





function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000)

  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode is enable", "success")
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode is enable", "success")

    }

  }
  return (
    <>



      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <TextForm showAlert={showAlert} heading="Enter somthing to analize" mode={mode} />
      </div>


      {/* <BrowserRouter>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />



        <div className="container my-3">
          <Routes>


            <Route exact path="/about" element={<About />} />
            <Route exact path="/" element={<TextForm />} />

          </Routes>
        </div>
      </BrowserRouter> */}




      {/* <About /> */}




    </>


  );
}

export default App;
// to start the app type npm start or npm run star