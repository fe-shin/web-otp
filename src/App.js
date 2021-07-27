import { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import useWebOTP from './useWebOTP';

function App() {

  const [foo, setFoo] = useState()
  const { abortController, OTPValue } = useWebOTP();

  useEffect(() => {
    OTPValue.then((otp) => {
      console.log(`otp`, otp);
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
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {foo}
        </a>
      </header>
    </div>
  );
}

export default App;
