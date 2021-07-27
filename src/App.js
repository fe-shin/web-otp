import { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import useWebOTP from './useWebOTP';

function App() {

  const OTPValue = useWebOTP();

  useEffect(() => {
    console.log(`OTPValue`, OTPValue);
    OTPValue && OTPValue.then((otp) => {
      console.log(`otp`, otp);
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
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
