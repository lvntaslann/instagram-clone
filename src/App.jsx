import { BrowserRouter as Router } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'

function App() {
  return (
    <>
      <Router>
        <div className='w-full min-h-screen bg-black'>
        <Home/>
        </div>
      </Router>
    </>
  )
}


export default App
