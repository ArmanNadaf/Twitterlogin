import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="logo-box">
        <img src="./twitter.png" alt="logo" className="logo" />
        <h2>Sign in to Twitter</h2>
        <button>
          <img src="./google.png" alt="Google logo" />
          Sign in with Google
        </button>
        <button>
          <img src="./Apple-Logo.png" alt="Apple logo" />
          Sign in with Apple
        </button>
        <hr />
        <span>Or</span>
        <form>
          <input type="text" placeholder="Phone, email, or username" />
          <button>Next</button>
        </form>
        <button>Forgot Password</button>
        <p>
          Don't Have an Account? <a href="/signup">Sign Up</a>
        </p>
      </div>
    </div>
  );
}

export default App;
