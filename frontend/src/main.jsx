import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ClerkProvider } from '@clerk/clerk-react'
import { BrowserRouter } from 'react-router-dom'
import { dark } from '@clerk/themes'
import { UserDataProvider } from './context/userContext.jsx'


const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error('Add your Clerk Publishable Key to the .env file')
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ClerkProvider
      appearance={{
        baseTheme: dark
      }}
      publishableKey={PUBLISHABLE_KEY}
      afterSignOutUrl="/">
      <BrowserRouter>
        <UserDataProvider>
          <App />
        </UserDataProvider>
      </BrowserRouter>
    </ClerkProvider>
  </React.StrictMode>,
)

