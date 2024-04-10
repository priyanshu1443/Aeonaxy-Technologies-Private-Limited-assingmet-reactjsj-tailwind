import Signupform from "./components/Signupform"
import { Route, Routes } from 'react-router-dom'
import Userdetails from "./components/Userdetails"


function App() {
  return (
    <>
      <Routes>
        <Route exect path="/" element={<Signupform />} />
        <Route exect path="/User-Details" element={<Userdetails />} />
      </Routes>
    </>
  )
}

export default App
