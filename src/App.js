
import './App.css';

function App() {
  return (
    <div className="App">
   <div className='logo-box'>
    <img src='./twitter.png' alt='logo' className='logo' />
    <h2>Sign to twitter</h2>
    <button >
    <img src='./google.png' alt='logo' />
    Sign in with Google
    </button>
    <button >
    <img src='./Apple-Logo.png' alt='logo' />
    Sign in with Google
    </button>

    <hr></hr>
    <span>Or</span>
    <form>
      <input type='text' placeholder='Phone email or username'/>
      <button>Next</button>

    </form>
    <button>Forget Password</button>
    <p>Don't Have an Account ?<a>Sign Up</a></p>


   </div>
    </div>
  );
}

export default App;
