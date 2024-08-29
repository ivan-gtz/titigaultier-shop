"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/ui-shadcn/form";
import * as z from 'zod';
import { ResetSchema } from "@/schemas";
import { Input } from "../ui/ui-shadcn/input";
import { Button } from "../ui/ui-shadcn/button";
import { FormError } from "./FormError";
import { FormSuccess } from "./FormSuccess";
import { reset } from "@/actions/auth/reset";
import { useState, useTransition } from "react";
import { CardWrapper } from "./CardWrapper";

export const ResetForm = () => {

  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [ isPending, startTransition ] = useTransition();
  const form = useForm<z.infer<typeof ResetSchema>>({
    resolver: zodResolver(ResetSchema),
    defaultValues: {
      email: "",
    }
  });


  const onSubmit = ( values: z.infer<typeof ResetSchema> ) => {
    setError("");
    setSuccess("");

    startTransition(() => {
      reset(values)
        .then((data) => {
          setError(data?.error);
          setSuccess(data?.success);
        });
    });
  }

  return (
    <CardWrapper
      headerLabel="¿Olvidaste tu contraseña?"
      backButtonLabel="Volver al inicio de sesión"
      backButtonHref="/auth/login"
    >
      <Form { ...form }>
        <form
          onSubmit={ form.handleSubmit(onSubmit) }
          className="space-y-6"
        >
          <div className="space-y-4">
            <FormField
              control={form.control}
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
          </div>
          <FormError message={ error }/>
          <FormSuccess message={ success }/>
          <Button 
            disabled={ isPending }
            type="submit"
            className="w-full"
          >
            Enviar email para restablecer
          </Button>
        </form>
      </Form>
    </CardWrapper>
  )
}