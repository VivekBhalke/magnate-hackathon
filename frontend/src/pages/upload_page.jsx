import { SignOutButton, useUser } from "@clerk/clerk-react"
const UploadPage = () => {
    const { user } = useUser()
    console.log(user)
    return (
    <div>
      This is the upload page
      <SignOutButton/>
    </div>
  )
}

export default UploadPage
