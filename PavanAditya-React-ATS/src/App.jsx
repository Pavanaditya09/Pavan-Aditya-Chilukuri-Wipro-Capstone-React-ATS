import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useNavigate, // Import useNavigate instead of useHistory
} from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Login from "./components/Login/Login";
import UserProfile from "./components/UserProfile/UserProfile";
import SignUp from "./components/SignUp/SignUp";
import { UserProvider, UserContext } from "./context/UserContext";

const App = () => {
  return (
    <UserProvider>
      <Router>
        <div>
          <Nav />
          <Routes>
            <Route path="/" exact element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/profiles" element={<UserProfile />} />
          </Routes>
        </div>
      </Router>
    </UserProvider>
  );
};

const Nav = () => {
  const { user, logout } = useContext(UserContext);
  const navigate = useNavigate(); // Use useNavigate hook

  const handleLogout = () => {
    logout();
    navigate("/login"); // Replace history.push with navigate
  };

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Dashboard</Link>
        </li>
        {user ? (
          <>
            <li>
              <Link to="/profiles">Profiles</Link>
            </li>
            <li>
              <button onClick={handleLogout}>Logout</button>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default App;
