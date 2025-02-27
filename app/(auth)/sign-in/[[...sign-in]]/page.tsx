import { SignIn } from '@clerk/nextjs'

const SignedInPage = () => {
  return (
    <div className='flex sm:h-screen w-full items-center justify-center py-24 '>
      <SignIn/>
    </div>
  )
}

export default SignedInPage