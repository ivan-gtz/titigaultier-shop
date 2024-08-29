"use client";
import { useForm } from "react-hook-form";
import { CardWrapper } from "./CardWrapper";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/ui-shadcn/form";
import * as z from 'zod';
import { NewPasswordSchema } from "@/schemas";
import { Input } from "../ui/ui-shadcn/input";
import { Button } from "../ui/ui-shadcn/button";
import { FormError } from "./FormError";
import { FormSuccess } from "./FormSuccess";
import { useState, useTransition } from "react";
import { useSearchParams } from "next/navigation";
import { newPassword } from "@/actions/auth/new-password";

export const NewPasswordForm = () => {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [ isPending, startTransition ] = useTransition();
  const form = useForm<z.infer<typeof NewPasswordSchema>>({
    resolver: zodResolver(NewPasswordSchema),
    defaultValues: {
      password: "",
    }
  });


  const onSubmit = ( values: z.infer<typeof NewPasswordSchema>) => {
    setError("");
    setSuccess("");
    startTransition(() => {
      newPassword(values, token)
        .then((data) => {
          setError(data?.error);
          setSuccess(data?.success);
        });
    });
  }

  return (
    <CardWrapper
      headerLabel="Establece una nueva contraseña"
      backButtonLabel="Volver al inicio de sesión"
      backButtonHref="/auth/login"
    >
      <Form { ...form }>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-6"
        >
          <div className="space-y-4">
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
                      placeholder="******"
                      type="password"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormError message={ error }/>
          <FormSuccess message={ success }/>
          <Button 
            disabled={isPending}
            type="submit"
            className="w-full"
          >
            Restablecer contraseña
          </Button>
        </form>
      </Form>
    </CardWrapper>
  )
}