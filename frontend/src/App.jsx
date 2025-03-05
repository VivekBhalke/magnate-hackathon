import { Routes, Route } from 'react-router-dom'
import AuthorizeUser from './components/authorize_user'
import { SignIn, SignedIn } from '@clerk/clerk-react'
import HomePage from "./pages/home.jsx"
import Dashboard from './pages/dashboard.jsx'

function App() {
  return (
    <div className=''>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route 
          path="/dashboard"
          element={
            <AuthorizeUser>
              <Dashboard />
            </AuthorizeUser>} 
        />
      </Routes>
    </div>
  )
}

export default App
