import logo from './logo.svg';
import { useState } from 'react'
import './App.css';
import LoginForm from './components/LoginForm';

function App() {
  const adminUser = {
    email: "apples@orange.com",
    password:"forgot"
  }

const [user, setUser] = useState({name:"",email:""});
const [error, setError] = useState("");

const Login = details => {
  console.log(details);
}

const Logout = () => {
  console.log("Logout");
}

  return (
    <div>
      { (user.email != "") ?(
      <div>
        <h2>Welcome, <span>{user.name}</span></h2>
      </div>
      ) : (
        <LoginForm/>
      )}
    </div>
  );
}

export default App;
