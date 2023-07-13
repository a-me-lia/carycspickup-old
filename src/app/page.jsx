

'use client'
import React from "react";
import signIn from "./firebase/auth/signin";
import { useRouter } from 'next/navigation'
import Link from "next/link";
import { signInWithRedirect } from "firebase/auth";
import Image from "next/image";

function Page() {
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const router = useRouter()

    function goToSignUp(){
        router.replace('./signup')
    }

    const handleForm = async (event) => {
        event.preventDefault()

        const { result, error } = await signIn(email, password);

        if (error) {
            return console.log(error)
        }

        // else successful
        console.log(result)
        return router.push("/entry")
    }
    return (
    <div className="min-h-screen max-h-screen bg-white">
        <div className="flex flex-col items-center z-50">
            <div className="relative h-20 w-48 mt-20">            <Image src="/css.png" alt='Cary Chinese School' fill className="object-cover"></Image></div>
            <h1 className="text-amber-600 font-bold text-md">Summer Pickup</h1>
            {/*<h1 className="text-amber-600 font-bold text-3xl mt-4">Sign in to enter name</h1>*/}
            <p className="text-red-700 text-[16px] mt-10">* Not CCS Official Account *</p>
            <form onSubmit={handleForm} className="flex flex-col items-start justify-start space-y-4 mt-4">
                <label htmlFor="email">

                    <input className='border-2 py-1 px-2 min-w-[256px]'onChange={(e) => setEmail(e.target.value)} required type="email" name="email" id="email" placeholder="example@mail.com" />
                </label>
                <label htmlFor="password">

                    <input className='border-2 py-1 px-2 min-w-[256px]'onChange={(e) => setPassword(e.target.value)} required type="password" name="password" id="password" placeholder="password" />
                </label>
            <button type="submit"><div className=" border-2 text-white font-bold text-lg border-amber-200 px-2 py-1.5 w-[256px] rounded-lg bg-amber-400">Sign in</div></button>
<div  className='w-48'></div>

            </form>


            <button  className="w-[256px] mt-[-10px] text-right text-[14px]" onClick={goToSignUp}><p>First Time? Create an Account!</p></button>

        </div>





    </div>);
}

export default Page;