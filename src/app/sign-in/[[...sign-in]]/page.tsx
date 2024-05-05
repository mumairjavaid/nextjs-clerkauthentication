import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return( 
    <div className="flex-col gap-4 flex justify-center items-center h-screen">
        <h1 className="text-2xl font-bold">Welcome to SignIn Page</h1>
        <SignIn path="/sign-in" />
    </div>
  )
}