import { Card, CardContent, CardFooter, CardHeader } from "../ui/ui-shadcn/card"
import { BackButton } from "./BackButton";
import { Header } from "./Header"
import { Social } from "./Social";

interface Props {
    children: React.ReactNode;
    headerLabel: string;
    backButtonLabel: string;
    backButtonHref: string;
    showSocial?: boolean
}

export const CardWrapper = ({ children, headerLabel, backButtonHref, backButtonLabel, showSocial }: Props) => {
    return (
        <Card>
            <CardHeader className="w-[400px]">
                <Header label={headerLabel}/>
            </CardHeader>
            <CardContent>
                {children}
            </CardContent>
            {
                showSocial && (
                    <CardFooter>
                        <Social />
                    </CardFooter>
                )
            }
            <CardFooter>
                <BackButton 
                    href={ backButtonHref } 
                    label={ backButtonLabel } 
                />
            </CardFooter>
        </Card>
    )
}