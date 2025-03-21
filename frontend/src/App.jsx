import { Routes, Route } from 'react-router-dom'
import AuthorizeUser from './components/authorize_user'
import { SignIn} from '@clerk/clerk-react'
import HomePage from "./pages/home.jsx"
import Dashboard from './pages/dashboard.jsx'

function App() {
  return (
    <div className='w-full flex justify-center h-full'>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sign-in" element={<SignIn />} />

        <Route 
          path="/dashboard/*"
          element={
            <AuthorizeUser>
              <Dashboard className="w-full"/>
            </AuthorizeUser>} 
        />
      </Routes>
    </div>
  )
}

export default App
