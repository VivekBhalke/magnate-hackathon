import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useUser } from "@clerk/clerk-react"
import { Navigate } from "react-router-dom"

const HomePage = () => {
  const { isSignedIn, isLoaded } = useUser();
  const navigate=useNavigate()
  if (!isLoaded) {
    return;
  }
  if (!isSignedIn) {
    navigate("/sign-in")
  }else{
    navigate("/dashboard")
  }
  return (
    <div>
      Loading...
    </div>
  )
}

export default HomePage
