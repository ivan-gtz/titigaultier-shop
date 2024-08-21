import { parFont, titleFont, modalFont } from "@/config/fonts";
import { cn } from "@/lib/utils";


interface Props {
    label: string;
}

export const Header = ({ label }: Props) => {
    return (
        <div className="w-full flex flex-col gap-4 items-center justify-center">
            <h1 className={ cn(
                "text-3xl font-semibold",
                titleFont.className
            )}> 
                🔐 Iniciar sesión
            </h1>
            <p className={`text-muted-foreground text-sm`}>
                { label }
            </p>
        </div>
    )
}