import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Home from "./pages/home/Home"
import Login from "./pages/login/Login"
import Signup from "./pages/signup/Signup"
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./context/AuthContext"

function App() {
  const { authUser } = useAuthContext();
  return (
    <>
      <div className="p-5 h-screen flex justify-center items-center">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={authUser ? <Home /> : <Navigate to="/login" />} />
            <Route path="/login" element={authUser ? <Navigate to="/" /> : <Login />} />
            <Route path="/signup" element={authUser ? <Navigate to="/" /> : <Signup />} />
          </Routes>
        </BrowserRouter>
        <Toaster />
      </div >
    </>
  )
}

export default App
