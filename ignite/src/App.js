import logo from './logo.svg';
import Register from './pages/Register.jsx';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import Single from './pages/Single.jsx';
import Write from './pages/Write.jsx';
import './style/App.css';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

const router = createBrowserRouter([
  {
  path: "/",
  element: <Home/>
  },
  {
  path: "/register",
  element: <Register/>
  },
  {
  path: "/login",
  element: <Login/>
  },
  {
  path: "/single",
  element: <Single/>
  },
  {
  path: "/write",
  element: <Write/>
  },
])

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
