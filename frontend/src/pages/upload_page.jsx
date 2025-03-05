import { SignOutButton, useUser,useAuth } from "@clerk/clerk-react"
import { useState } from "react"
import axios from "axios"
const UploadPage = () => {
    const { user } = useUser()
    console.log(user)

    const { getToken } = useAuth();
    const [data, setData] = useState("");
  
    const fetchProtectedData = async () => {
      const token = await getToken();
      console.log(token)
      const response = await axios.post("http://localhost:3000/api/upload/protected", {
        headers: { Authorization: `Bearer ${token}` },
      });
  
      // setData(result.message);
      console.log(response.data)
    };
    return (
    <div>
      <h1>Dashboard (Protected)</h1>
      <button onClick={fetchProtectedData}>Get Protected Data</button>
      <p>{data}</p>
      This is the upload page
      <SignOutButton/>
    </div>
  )
}

export default UploadPage
