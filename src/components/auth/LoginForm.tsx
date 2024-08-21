'use client';

import { useState, useTransition } from "react";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/ui-shadcn/form";
import { CardWrapper } from "./CardWrapper";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Input } from "../ui/ui-shadcn/input";
import { Button } from "../ui/ui-shadcn/button";
import Link from "next/link";
import { FormError } from "./FormError";
import { useSearchParams } from "next/navigation";
import { LoginSchema } from "@/schemas";
import { login } from "@/actions/auth/login2";

export const LoginForm = () => {

    const searchParams = useSearchParams();
    const urlError = searchParams.get("error") === "OAuthAccountNotLinked"
        ? "Email already in use with different provider!"
        :"";

    const [error, setError] = useState<string | undefined>("");
    const [isPending, startTransition] = useTransition();
    const form = useForm<z.infer<typeof LoginSchema>>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email: "",
            password: ""
        }
    });
    const onSubmit = ( values: z.infer<typeof LoginSchema>) => {
        setError("");
        startTransition(() => {
            login(values)
                .then((data) => {
                    setError(data?.error);
                });
        });
    }
    return (
        <CardWrapper
            headerLabel="¡Bienvenido de nuevo!"
            backButtonLabel="¿Aún no tienes cuenta?"
            backButtonHref="/auth/register"
            showSocial
        >
            <Form { ...form }>
                <form
                    onSubmit={ form.handleSubmit(onSubmit) }
                    className="space-y-6"
                >
                    <div className="space-y-4">
                        <FormField
                            control={ form.control }
                            name="email"
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input 
                                            { ...field }
                                            disabled={ isPending }
                                            placeholder="ejemplo@google.com"
                                            type="email"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={ form.control }
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Contraseña</FormLabel>
                                    <FormControl>
                                        <Input 
                                            { ...field }
                                            disabled={ isPending }
                                            placeholder="********"
                                            type="password"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                    <Button
                                        size="sm"
                                        variant="link"
                                        asChild
                                        className="px-0 font-normal"
                                    >
                                        <Link href="/">
                                            ¿Olvidaste tu contraseña?
                                        </Link>
                                    </Button>
                                </FormItem>
                            )}
                        />
                    </div>
                    <FormError message={ error || urlError }/>
                    <Button
                        disabled={ isPending }
                        type="submit"
                        className="w-full"
                    >
                        Ingresar
                    </Button>
                </form>
            </Form>
        </CardWrapper>
    )
}