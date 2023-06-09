import Topbar from "./components/topbar/TopBar";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context";
function App() {
  const { user } = useContext(Context);
  return (
    <BrowserRouter>
     <Topbar />
      <Routes>
        <Route exact path="/" element={<Home />}>
          
        </Route>
        <Route path="/posts" element={<Home />}>
          
        </Route>
        <Route path="/register" element={ user ? <Home/> : <Register />}>
         
        </Route>
        <Route path="/login" element={user ? <Home /> : <Login />}></Route>
        <Route path="/post/:postid" element={  <Single />}>
        
        </Route>
        <Route path="/write" element={user ? <Write /> : <Register />}></Route>
        <Route path="/settings" element={user ? <Settings /> : <Register />}>
          
        </Route>
      </Routes>
    
    </BrowserRouter>
  );
}

export default App;

// import Home from "./pages/home/Home";
// import TopBar from "./components/topbar/TopBar.jsx";
// import Single from "./pages/single/Single";
// import Write from "./pages/write/Write";
// import Settings from "./pages/settings/Settings";
// import Login from "./pages/login/Login";
// import Register from "./pages/register/Register";
// import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
// import { useContext } from "react";
// import { Context } from "./context/Context";

// function App() {
//   const { user } = useContext(Context);
//   return (
//     <Router>
//       <TopBar />
//       <Routes>
//         <Route exact path="/">
//           <Home />
//         </Route>
//         <Route path="/register">{user ? <Home /> : <Register />}</Route>
//         <Route path="/login">{user ? <Home /> : <Login />}</Route>
//         <Route path="/write">{user ? <Write /> : <Register />}</Route>
//         <Route path="/settings">{user ? <Settings /> : <Register />}</Route>
//         <Route path="/post/:postId">
//           <Single />
//         </Route>
//       </Routes>
//     </Router>
//   );
// }

// export default App;