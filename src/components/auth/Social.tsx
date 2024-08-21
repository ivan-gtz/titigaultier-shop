'use client';

import { signIn } from "next-auth/react";
import { Button } from "../ui/ui-shadcn/button";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

export const Social = () => {

    const onClick = (provider: "google" | "facebook") => {
        signIn(provider, {
            // callbackUrl: DEFAULT_LOGIN_REDIRECT,
        })
    }

    return (
        <div className="flex items-center w-full gap-x-2">
            <Button
                size="lg"
                className="w-full"
                variant="outline"
                onClick={() => onClick("google")}
            >
                <FcGoogle className="h-6 w-6"/>
            </Button>
            <Button
                size="lg"
                className="w-full"
                variant="outline"
                onClick={() => onClick("facebook")}
            >
                <FaFacebook className="h-6 w-6" color="#1877F2"/>
            </Button>
        </div>
    )
}