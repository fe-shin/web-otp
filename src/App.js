import { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import useWebOTP from './useWebOTP';

function App() {

  const { OTPValue } = useWebOTP();

  useEffect(() => {
    OTPValue.then((otp) => {
      console.log(`otp`, otp);
      document.querySelector("#id").value = otp.code;
      setFoo(otp.code);
    }).catch(() => {
      
    });
  }, [OTPValue]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
          <input id="#id" autocomplete="one-time-code" type="text" inputmode="numeric" />
      </header>
    </div>
  );
}

export default App;
