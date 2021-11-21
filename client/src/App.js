import logo from './logo.svg';
import { useState } from 'react'
import './App.css';
import LoginForm from './components/LoginForm';
import sandwich from './images/sandwich.jpg';
import gatorade from './images/gatorade.jpg';

function App() {
  const adminUser = {
    email: "olugbengaojo97@gmail.com",
    password:"forgot"
  }

const [user, setUser] = useState({name:"",email:""});
const [error, setError] = useState("");

const Login = details => {
  console.log(details);

  if (details.email == adminUser.email && details.password == adminUser.password) {
  console.log("Logged in");
  setUser({
    name: details.name,
    email: details.email
  });
}

 else {
  console.log("Details do not match");
  setError("Details do not match");
  }
}

const Logout = () => {
  setUser({ name:"",email:""});
}

  return (
    <div>
      { (user.email !== "") ?(
      <div>
        <header>Hunger Mates</header>
        <h2>Welcome, <span>{user.name}</span></h2>
        <button>
          <img src={sandwich} alt="Breakfast Sandwich" height="100px" width="100px" />
          <img src={gatorade} alt="Drink" height="100px" width="100px" />
        </button>

        <div className="form-group">
            <label htmlFor="name">Address:</label>
            <input></input>
        </div>

        <button onClick={Logout}>Logout</button>
      </div>
      ) : (
        <LoginForm Login={Login} error={error}/>
      )}
    </div>
  );
}

export default App;