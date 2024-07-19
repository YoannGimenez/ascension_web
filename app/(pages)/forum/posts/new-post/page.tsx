"use client"

import React, {useEffect, useState} from "react";
import Tiptap from "@/components/Forms/Tiptap";
import {useForm} from "react-hook-form";
import {Form} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import {PostSchema, zPostSchema} from "@/zod-schemas/post-schema";
import {FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/Aceternity/Input";
import BottomGradient from "@/components/Aceternity/BottomGradient";
import LabelInputContainer from "@/components/Aceternity/LabelInputContainer";
import { Button } from "@/components/ui/button";
import {useRouter, useSearchParams} from "next/navigation";
import {Label} from "@/components/Aceternity/Label";
import {useAuth} from "@/hooks/useAuth";



const NewPost = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<String>("");
    const router = useRouter()
    const searchParams = useSearchParams()
    const editMode = searchParams.get("id")
    const { isAuthenticated, loading: authLoading, getUserId, getJWTToken } = useAuth();
    const userId = getUserId();

    useEffect(() => {
        if (!authLoading && !isAuthenticated) {
            router.push('/');
        }
    }, [authLoading, isAuthenticated, router]);

    const form = useForm<zPostSchema>({
        resolver: zodResolver(PostSchema),
        defaultValues: {
            title: "",
            content: "",
        },
        mode: "onChange",
    })

    async function onSubmit(values: zPostSchema) {
        const postBody = {
            title : values.title,
            content : values.content,
            userId : userId,
            type : 'POST_USER'
        };
        console.log(postBody)
        try {
            const response = await fetch('http://localhost:4000/api/posts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${getJWTToken()}`
                },
                body: JSON.stringify(postBody),
            });

            const data = await response.json();

            if (!response.ok) {
                setError(data.error);
            }

            if (response.status === 201){
            }
        } catch (err) {
            setError("Error");
        } finally {
            setLoading(false);
        }
    }

    if (authLoading) {
        return <div className={"wrap pt-6"}>Loading...</div>;
    }

    return(
        <div className={"wrap pt-6"}>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <FormField
                        control={form.control}
                        name="title"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Add a title to your post</FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    {/*<LabelInputContainer className="mb-4">*/}
                    {/*    <Label htmlFor="title">Name of your post</Label>*/}
                    {/*    <Input id="title" name="title" type="text" />*/}
                    {/*</LabelInputContainer>*/}
                    {/*<LabelInputContainer className="mb-4">*/}
                    {/*    <Label htmlFor="title">Name of your post</Label>*/}
                    {/*    <Input id="title" name="title" type="text" />*/}
                    {/*</LabelInputContainer>*/}
                    <FormField
                        control={form.control}
                        name="content"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Write your post</FormLabel>
                                <FormControl>
                                    <Tiptap val={field.value} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <button
                        className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                        type="submit"
                    >
                        {loading ? 'Loading...' : 'Submit →'}
                        <BottomGradient />
                    </button>
                </form>
            </Form>
        </div>

    )
}

export default NewPost;
