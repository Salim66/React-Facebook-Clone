import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Components/Auth/Login/Login";
import Home from "./Components/Pages/Home/Home";
import Profile from "./Components/Pages/Profile/Profile";




function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login></Login>} />
          <Route path="/home" element={<Home></Home>} />
          <Route path="/home/:userId" element={<Profile></Profile>} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
