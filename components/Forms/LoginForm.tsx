"use client";
import React, {useContext, useState} from "react";
import { cn } from "@/utils/cn";
import {Label} from "@/components/Aceternity/Label";
import {Input} from "@/components/Aceternity/Input";
import Image from "next/image";
import { useAuth } from '@/hooks/useAuth';
import BottomGradient from "@/components/Aceternity/BottomGradient";
import LabelInputContainer from "@/components/Aceternity/LabelInputContainer";


export function LoginForm() {

    const [error, setError] = useState<String>("");
    const [loading, setLoading] = useState<boolean>(false);
    const { login } = useAuth();


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        const formData = new FormData(e.currentTarget);
        const loginData = {
            username : formData.get('username'),
            password : formData.get('password'),
        }

        try {
            const response = await fetch('http://localhost:4000/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(loginData),
            });

            const data = await response.json();

            if (!response.ok) {
                setError(data.error);
            }

            if (response.status === 201){
                console.log(data)
                console.log(data.token)
                login(data.token);
                window.location.href = "/"
            }
        } catch (err) {
            setError("Error");
        } finally {
            setLoading(false);
        }
    };


    return (
        <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black mt-[5vh] mb-[5vh]">
            <div className={"flex justify-center items-center flex-col"}>
                <Image src={"ascension_logo.svg"} alt={"Logo Ascension"} width={100} height={100}/>
                <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200 mb-4 text-center">
                    Back in the Ascension !
                </h2>
            </div>

            {/*<p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">*/}
            {/*    Login to aceternity if you can because we don&apos;t have a login flow*/}
            {/*    yet*/}
            {/*</p>*/}

            <form className="my-8" onSubmit={handleSubmit}>
                {/*<div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
                    <LabelInputContainer>
                        <Label htmlFor="firstname">First name</Label>
                        <Input id="firstname" placeholder="Tyler" type="text" />
                    </LabelInputContainer>
                    <LabelInputContainer>
                        <Label htmlFor="lastname">Last name</Label>
                        <Input id="lastname" placeholder="Durden" type="text" />
                    </LabelInputContainer>
                </div>*/}
                <LabelInputContainer className="mb-4">
                    <Label htmlFor="username">Username</Label>
                    <Input id="username" name="username" type="text" />
                </LabelInputContainer>
                <LabelInputContainer className="mb-4">
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" name="password" type="password" />
                </LabelInputContainer>

                <button
                    className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                    type="submit"
                >
                    {loading ? 'Loading...' : 'Login →'}
                    <BottomGradient />
                </button>
                {error && <p className="text-red-500 mt-4">{error}</p>}

            {/*    <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />*/}

            {/*    <div className="flex flex-col space-y-4">*/}
            {/*        <button*/}
            {/*            className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"*/}
            {/*            type="submit"*/}
            {/*        >*/}
            {/*            <IconBrandGithub className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />*/}
            {/*            <span className="text-neutral-700 dark:text-neutral-300 text-sm">*/}
            {/*  GitHub*/}
            {/*</span>*/}
            {/*            <BottomGradient />*/}
            {/*        </button>*/}
            {/*        <button*/}
            {/*            className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"*/}
            {/*            type="submit"*/}
            {/*        >*/}
            {/*            <IconBrandGoogle className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />*/}
            {/*            <span className="text-neutral-700 dark:text-neutral-300 text-sm">*/}
            {/*  Google*/}
            {/*</span>*/}
            {/*            <BottomGradient />*/}
            {/*        </button>*/}
            {/*        <button*/}
            {/*            className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"*/}
            {/*            type="submit"*/}
            {/*        >*/}
            {/*            <IconBrandOnlyfans className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />*/}
            {/*            <span className="text-neutral-700 dark:text-neutral-300 text-sm">*/}
            {/*  OnlyFans*/}
            {/*</span>*/}
            {/*            <BottomGradient />*/}
            {/*        </button>*/}
            {/*    </div>*/}
            </form>
        </div>
    );
}
