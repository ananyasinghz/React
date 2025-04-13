import React, { useState, useReducer, useRef, useEffect, Component, createContext, useContext } from 'react';
import PropTypes from 'prop-types';
import './styles.css'; // For external button

// Q1 – Joke App Components
const Header = ({ title }) => <h1>{title}</h1>;

const jokes = [
  "Why don't programmers like nature? It has too many bugs.",
  "How many programmers does it take to change a light bulb? None – It's a hardware problem.",
];

const Content = () => {
  const [joke, setJoke] = useState('');
  return (
    <div>
      <button onClick={() => setJoke(jokes[Math.floor(Math.random() * jokes.length)])}>
        Show Joke
      </button>
      <p>{joke}</p>
    </div>
  );
};

const Footer = () => <footer>© 2025 Joke Inc.</footer>;

// Q2 – Styled Buttons
const StyledButtonInline = () => (
  <button style={{ backgroundColor: 'blue', padding: '10px', fontSize: '16px', color: 'white' }}>
    Inline Styled Button
  </button>
);

const StyledButtonInternal = () => (
  <div>
    <style>
      {`
        .internal-btn {
          background-color: green;
          color: white;
          padding: 10px;
          font-size: 16px;
        }
      `}
    </style>
    <button className="internal-btn">Internal CSS Button</button>
  </div>
);

const StyledButtonExternal = () => <button className="external-btn">External CSS Button</button>;

// Q5 – Lifecycle Component
class LifecycleDemo extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    console.log('Constructor');
  }

  componentDidMount() {
    console.log('Component Mounted');
  }

  componentDidUpdate() {
    console.log('Component Updated');
  }

  componentWillUnmount() {
    console.log('Component Will Unmount');
  }

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Update
        </button>
      </div>
    );
  }
}

// Q6 & Q7 – Parent & Child with PropTypes
const Child = ({ message }) => <p>{message}</p>;
Child.propTypes = {
  message: PropTypes.string.isRequired,
};

const Parent = () => <Child message="Hello from Parent!" />;

// Q8 – Counter: useState & useReducer
const CounterUseState = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </>
  );
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'inc': return state + 1;
    case 'dec': return state - 1;
    default: return state;
  }
};

const CounterUseReducer = () => {
  const [count, dispatch] = useReducer(reducer, 0);
  return (
    <>
      <p>Count: {count}</p>
      <button onClick={() => dispatch({ type: 'inc' })}>Increase</button>
      <button onClick={() => dispatch({ type: 'dec' })}>Decrease</button>
    </>
  );
};

// Q9 – API Fetch Joke
const JokeFetcher = () => {
  const [joke, setJoke] = useState('');

  const fetchJoke = async () => {
    const res = await fetch('https://official-joke-api.appspot.com/jokes/random');
    const data = await res.json();
    setJoke(`${data.setup} ${data.punchline}`);
  };

  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <>
      <p>{joke}</p>
      <button onClick={fetchJoke}>Get New Joke</button>
    </>
  );
};

// Q10 – Focus with useRef
const FocusForm = () => {
  const inputRef = useRef();
  return (
    <>
      <input ref={inputRef} type="text" placeholder="Type something..." />
      <button onClick={() => inputRef.current.focus()}>Focus</button>
    </>
  );
};

// Q11 – Context API Theme
const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme: () => setTheme(t => t === 'light' ? 'dark' : 'light') }}>
      {children}
    </ThemeContext.Provider>
  );
};

const ThemedComponent = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <>
      <p>Current theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </>
  );
};

// Q12 – Form with useState and useRef
const FormUseState = () => {
  const [form, setForm] = useState({ name: '', email: '' });

  const handleSubmit = e => {
    e.preventDefault();
    alert(`Submitted: ${form.name}, ${form.email}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="Name" />
      <input type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="Email" />
      <button type="submit">Submit</button>
      <p>Name: {form.name}</p>
      <p>Email: {form.email}</p>
    </form>
  );
};

const FormUseRef = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const [submitted, setSubmitted] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(`Submitted: ${nameRef.current.value}, ${emailRef.current.value}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input ref={nameRef} type="text" placeholder="Name" />
      <input ref={emailRef} type="email" placeholder="Email" />
      <button type="submit">Submit</button>
      <p>{submitted}</p>
    </form>
  );
};

// Final Render
const Question3 = () => (
  <div style={{ padding: '20px' }}>
    <Header title="Welcome to the Joke App" />
    <Content />
    <StyledButtonInline />
    <StyledButtonInternal />
    <StyledButtonExternal />
    <LifecycleDemo />
    <Parent />
    <CounterUseState />
    <CounterUseReducer />
    <JokeFetcher />
    <FocusForm />
    <ThemeProvider>
      <ThemedComponent />
    </ThemeProvider>
    <FormUseState />
    <FormUseRef />
    <Footer />
  </div>
);

export default Question3;
