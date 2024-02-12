"use client";

import { useForm } from "react-hook-form";
import {
  DialogHeader,
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
  DialogFooter,
} from "../ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";

const FormSchema = z.object({
  serverName: z
    .string()
    .min(5, "Server name should be atleast 5 characters long."),
});
type TFormSchema = z.infer<typeof FormSchema>;

export default function InitialModal() {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  const form = useForm<TFormSchema>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      serverName: "",
    },
  });
  const onSubmit = async (data: TFormSchema) => {
    await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("resolved");
      }, 3000);
    });
    console.log(data);
  };
  if (!isMounted) return null;
  return (
    <Dialog open>
      <DialogTrigger>Open</DialogTrigger>
      <DialogContent className="p-0">
        <DialogHeader className="pt-8 px-6">
          <DialogTitle className="text-center font-bold text-2xl">
            Customize your server
          </DialogTitle>
          <DialogDescription className="text-center text-zinc-500">
            Give your server a personality with a name and an image.You can
            always change it later.
          </DialogDescription>
        </DialogHeader>
        <p className="text-center">TODO: Image upload</p>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="serverName"
              render={({ field }) => {
                return (
                  <FormItem className="py-8 px-6">
                    <FormLabel className="text-xs font-bold uppercase text-zinc-500 dark:text-white">
                      Server name
                    </FormLabel>
                    <FormControl>
                      <Input
                        disabled={form.formState.isSubmitting}
                        placeholder="Enter server name"
                        {...field}
                        className=" focus-visible:ring-0 bg-zinc-300/50 border-0 focus-visible:ring-offset-0 dark:bg-secondary dark:placeholder:text-white/70"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />
            <DialogFooter className="px-6 py-4 bg-gray-100 dark:bg-inherit">
              <Button
                disabled={form.formState.isSubmitting}
                variant={"primary"}
              >
                Create
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
