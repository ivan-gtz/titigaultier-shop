import { auth } from "@/auth";
import { Card, Divider, Title } from "@/components";
import { redirect } from "next/navigation";

export default async function ProfilePage() {

    const session = await auth();

    if ( !session?.user ) {
        redirect('/');
    }

    return (
        <div className="px-2 sm:px-10">
            <Card className="mt-5">
                <h1 className="text-tremor-title font-bold text-tremor-content-strong dark:text-dark-tremor-content-strong">
                    Perfil
                </h1>
                <Divider />
                
                <h4 className="font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
                    inició sesión como:
                </h4>
                <p className="mt-1 text-tremor-default text-tremor-content dark:text-dark-tremor-content">
                    { session.user.email }
                </p>
            </Card>
        </div>
    );
}