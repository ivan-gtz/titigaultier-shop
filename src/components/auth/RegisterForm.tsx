'use client';

import { useState, useTransition } from "react";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/ui-shadcn/form";
import { CardWrapper } from "./CardWrapper";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Input } from "../ui/ui-shadcn/input";
import { Button } from "../ui/ui-shadcn/button";
import { FormError } from "./FormError";
import { RegisterSchema } from "@/schemas";
import { register } from "@/actions/auth/register";
import { login } from "@/actions/auth/login";

export const RegisterForm = () => {
    const [error, setError] = useState<string | undefined>("");
    const [isPending, startTransition] = useTransition();
    const form = useForm<z.infer<typeof RegisterSchema>>({
        resolver: zodResolver(RegisterSchema),
        defaultValues: {
            email: "",
            password: "",
            name:""
        }
    });
    const onSubmit = async( values: z.infer<typeof RegisterSchema> ) => {
        setError("");
        startTransition(() => {
            register(values)
                .then((data) => {
                    setError(data?.error);
                });
        });
        await login( values );
        window.location.replace('/');
    }
    return (
        <CardWrapper
            headerLabel="Crea una cuenta"
            backButtonLabel="¿Ya tienes una cuenta?"
            backButtonHref="/auth/login"
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
                            name="name"
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>Nombre</FormLabel>
                                    <FormControl>
                                        <Input 
                                            { ...field }
                                            disabled={ isPending }
                                            placeholder="John Doe"
                                            type="name"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={ form.control }
                            name="email"
                            render={({ field }) => (
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
                                </FormItem>
                            )}
                        />
                    </div>
                    <FormError message={ error }/>
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