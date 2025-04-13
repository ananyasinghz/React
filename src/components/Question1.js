// App.js - All Exercises Combined for Question 1 (Ananya Singh - 23BCE1380)
import React, { useState } from 'react';

// Exercise 1.1 - React.createElement
function HelloElement() {
  return React.createElement('h1', null, 'Hello, React!');
}

// Exercise 1.2 - JSX
function HelloJSX() {
  return <h1>Hello, React!</h1>;
}

// Exercise 1.3 - JSX with variable
function HelloWithVar() {
  const message = "Hello, React!";
  return <h1>{message}</h1>;
}

// Exercise 2: Fruit List
function FruitList() {
  const fruits = ['Apple', 'Banana', 'Orange'];
  return (
    <div>
      <h2>Fruits:</h2>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
}

// Exercise 3: Styled Message
function StyledMessage() {
  return (
    <p style={{ 
      color: 'red', 
      fontSize: '20px',
      padding: '10px',
      border: '1px solid black'
    }}>
      This is a styled message
    </p>
  );
}

// Exercise 4: Sum of Squares (with user input)
function SumOfSquares() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);

  return (
    <div>
      <h2>Sum of Squares</h2>
      <input 
        type="number" 
        placeholder="Enter a" 
        onChange={(e) => setA(Number(e.target.value))} 
      />
      <input 
        type="number" 
        placeholder="Enter b" 
        onChange={(e) => setB(Number(e.target.value))} 
      />
      <p>Result: {a ** 2 + b ** 2}</p>
    </div>
  );
}

// Exercise 5: Conditional Greeting
function Greeting() {
  const [isMorning, setIsMorning] = useState(true);

  return (
    <div>
      <h3>{isMorning ? 'Good Morning' : 'Good Evening'}</h3>
      <button onClick={() => setIsMorning(!isMorning)}>
        Toggle Time
      </button>
    </div>
  );
}

// Exercise 6: Current Day
function CurrentDay() {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  return <p>Today is: {days[new Date().getDay()]}</p>;
}

// Exercise 7: Prime Checker
function PrimeChecker() {
  const [number, setNumber] = useState(0);

  const isPrime = num => {
    if(num <= 1) return false;
    for(let i = 2; i <= Math.sqrt(num); i++) {
      if(num % i === 0) return false;
    }
    return true;
  };

  return (
    <div>
      <h2>Prime Checker</h2>
      <input 
        type="number" 
        placeholder="Enter a number" 
        onChange={(e) => setNumber(Number(e.target.value))} 
      />
      <p>{number} is {isPrime(number) ? '' : 'not '}prime</p>
    </div>
  );
}

// Exercise 8: Temperature Converter
class TemperatureConverter extends React.Component {
  state = { celsius: '', fahrenheit: '' };

  handleCelsiusChange = (e) => {
    const celsius = e.target.value;
    this.setState({
      celsius,
      fahrenheit: celsius ? (celsius * 9/5 + 32).toFixed(2) : ''
    });
  };

  handleFahrenheitChange = (e) => {
    const fahrenheit = e.target.value;
    this.setState({
      fahrenheit,
      celsius: fahrenheit ? ((fahrenheit - 32) * 5/9).toFixed(2) : ''
    });
  };

  render() {
    return (
      <div>
        <h2>Temperature Converter</h2>
        <input
          type="number"
          value={this.state.celsius}
          onChange={this.handleCelsiusChange}
          placeholder="Celsius"
        />
        <input
          type="number"
          value={this.state.fahrenheit}
          onChange={this.handleFahrenheitChange}
          placeholder="Fahrenheit"
        />
      </div>
    );
  }
}

// Exercise 9: String Reverser
function StringReverser() {
  const [str, setStr] = useState('');

  const reversed = str.split('').reverse().join('');
  const isPalindrome = str === reversed;

  return (
    <div>
      <h2>String Reverser</h2>
      <input 
        type="text" 
        placeholder="Enter a string" 
        onChange={(e) => setStr(e.target.value)} 
      />
      <p>Original: {str}</p>
      <p>Reversed: {reversed}</p>
      <p>Palindrome: {isPalindrome ? 'Yes' : 'No'}</p>
    </div>
  );
}

// Exercise 10: Random Number Generator
function RandomNumberGenerator() {
  const [number, setNumber] = useState(null);
  return (
    <div>
      <h2>Random Number</h2>
      <button onClick={() => setNumber(Math.floor(Math.random() * 100) + 1)}>
        Generate
      </button>
      {number && <p>Result: {number}</p>}
    </div>
  );
}

// Exercise 11: Leap Year Checker
function LeapYearChecker() {
  const [year, setYear] = useState(2024);
  const isLeap = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;

  return (
    <div>
      <h2>Leap Year Check</h2>
      <input 
        type="number" 
        value={year} 
        onChange={(e) => setYear(Number(e.target.value))} 
      />
      <p>{year} is {isLeap ? '' : 'not '}a leap year</p>
    </div>
  );
}

// Exercise 12: User Greeting
class UserGreeting extends React.Component {
  state = { firstName: '', lastName: '' };

  handleFirstNameChange = (e) => {
    this.setState({ firstName: e.target.value });
  };

  handleLastNameChange = (e) => {
    this.setState({ lastName: e.target.value });
  };

  render() {
    return (
      <div>
        <h2>User Greeting</h2>
        <input
          type="text"
          placeholder="First Name"
          onChange={this.handleFirstNameChange}
        />
        <input
          type="text"
          placeholder="Last Name"
          onChange={this.handleLastNameChange}
        />
        <h3>Hello, {this.state.firstName} {this.state.lastName}!</h3>
      </div>
    );
  }
}

// Main App
function App() {
  return (
    <div className="App">
      <h1>React Exercises</h1>
      <HelloElement />
      <HelloJSX />
      <HelloWithVar />
      <FruitList />
      <StyledMessage />
      <SumOfSquares />
      <Greeting />
      <CurrentDay />
      <PrimeChecker />
      <TemperatureConverter />
      <StringReverser />
      <RandomNumberGenerator />
      <LeapYearChecker />
      <UserGreeting />
    </div>
  );
}

export default App;
