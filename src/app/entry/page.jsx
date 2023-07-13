'use client'
import React from "react";
import { useAuthContext } from "../context/authcontext";
import { useRouter } from "next/navigation";
function Page() {
    const { user } = useAuthContext()
    const router = useRouter()


    React.useEffect(() => {
        if (user == null) router.push("/")
    }, [router, user])

    return (
<div className="min-h-screen bg-white"><h1>sbhjgjbh</h1></div>


    );
}

export default Page;