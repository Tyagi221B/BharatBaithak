import { SignUp } from "@clerk/nextjs"

const SignUpPage = () => {
  return (
    <div className="flex sm:h-screen w-full items-center justify-center">
      <SignUp />
    </div>
  )
}

export default SignUpPage