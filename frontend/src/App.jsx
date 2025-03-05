import { Routes, Route } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import AuthorizeUser from './components/authorize_user'
import { SignIn, SignedIn } from '@clerk/clerk-react'
import UploadPage from './pages/upload_page'
import HomePage from "./pages/home.jsx"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/upload" element={<AuthorizeUser>
          <UploadPage />
        </AuthorizeUser>} />
      </Routes>
    </>
  )
}

export default App
