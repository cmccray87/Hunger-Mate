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

  if (details.email == adminUser.email && details.password == adminUser.password) {
  console.log("Logged in");
  setUser({
    name: details.name,
    email: details.email
  });
}

 else {
  console.log("Details do not match")
  }
}

const Logout = () => {
  console.log("Logout");
}

  return (
    <div>
      { (user.email !== "") ?(
      <div>
        <h2>Welcome, <span>{user.name}</span></h2>
      </div>
      ) : (
        <LoginForm Login={Login} error={error}/>
      )}
    </div>
  );
}

export default App;
