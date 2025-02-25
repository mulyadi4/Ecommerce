import './App.css'
import Home from './Page/Home'
import Header from "./components/Header"
import { BrowserRouter,Routes,Route } from "react-router-dom"
function App() {
  return (
    <>
      <BrowserRouter>
      <Header />
      <Home />
      </BrowserRouter>
    </>
  )
}

export default App
