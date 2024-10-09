"use client"
import React, { useState } from 'react'
import HeadingGrade from './HeadingGrade'

import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { cn } from "@/lib/utils";


function Contact() {

    const [message, setMessage] = useState('');

    const handleEmail = () => {
        const email = 'shashwatsrivastavait30@gmail.com';
        const subject = 'Contact Shashwat';
        const body = encodeURIComponent(message);
        window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    };


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Form submitted");
    };

    return (
        <>
            <section id="contact">
                <HeadingGrade headingTxt="Contact Me" />

                <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-black">
                    <p className="text-sm max-w-sm mt-2 text-neutral-300">
                        Feel free to reach out! Whether you have a project, a question, or just want to connect, I&apos;m happy to hear from you.
                        Simply drop a message below, and I&apos;ll get back to you as soon as possible.
                    </p>


                    <form className="my-8" onSubmit={handleSubmit}>
                        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
                            <LabelInputContainer>
                                <Label htmlFor="fullname">Full name</Label>
                                <Input id="fullname" placeholder="Shashwat Srivastava" type="text" />
                            </LabelInputContainer>
                        </div>
                        <LabelInputContainer className="mb-4">
                            <Label htmlFor="email">Email Address</Label>
                            <Input id="email" placeholder="projectmayhem@fc.com" type="email" />
                        </LabelInputContainer>
                        <LabelInputContainer className="mb-4">
                            <Label htmlFor="msg">Your Message</Label>
                            <Input id="msg" type="text" className='h-24' value={message} onChange={(e) => setMessage(e.target.value)} />
                        </LabelInputContainer>

                        <button
                            className="bg-gradient-to-br relative group/btn from-zinc-900 to-zinc-900  block bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                            type="submit" onClick={handleEmail}
                        >
                            Contact &rarr;
                            <BottomGradient />
                        </button>

                        <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent my-8 h-[1px] w-full" />

                    </form>
                </div>
            </section>

        </>
    )
}

const BottomGradient = () => {
    return (
        <>
            <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
            <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
        </>
    );
};

const LabelInputContainer = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <div className={cn("flex flex-col space-y-2 w-full", className)}>
            {children}
        </div>
    );
};

export default Contact
