import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function AuthLayout({ children }: {
    children: React.ReactNode;
}) {

    const session = await auth();
    if ( session ) {
        redirect('/')
    }


    return (


        <main className="h-screen flex items-center justify-center 
                        bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800">
                { children }
        </main>
    );
}