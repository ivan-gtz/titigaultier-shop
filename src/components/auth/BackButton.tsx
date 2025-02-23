"use client";

import Link from "next/link";
import { Button } from "../ui/ui-shadcn/button";

interface Props {
    href:  string;
    label: string;
}
export const BackButton = ({ href, label }: Props) => {
    return (
        <Button
            variant="link"
            className="font-normal w-full"
            size="sm"
            asChild
        >
            <Link href={ href }>
                { label }
            </Link>
        </Button>
    )
}