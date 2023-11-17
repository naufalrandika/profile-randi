"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Container } from "postcss";
import { Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

const Hero = () => {
    const { theme, setTheme } = useTheme();
    const sendEmail = () => {
        const emailAddress = "email@example.com"; // Replace with your email address
        const subject = "Regarding Job Opportunity"; // Replace with your subject
        const body = "Hello,\n\nI am contacting you regarding a job opportunity..."; // Replace with your email body
        
        const mailtoLink = `mailto:naufalrandika44@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        
        window.location.href = mailtoLink;
      };
    return (
        <section className="lg:py-16">
            <div className="grid grid-cols-1 sm:grid-cols-12">
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
                >
                    <h1 className="mb-4 text-3xl sm:text-6xl lg:text-6xl lg:leading-normal font-extrabold">
                        <span className="bg-clip-text bg-gradient-to-r from-primary-200 to-secondary-300">
                            Hello, I&apos;m{" "}
                        </span>
                        <br></br>
                        <TypeAnimation
                            sequence={[
                                "Randi",
                                1000,
                                "Software Engineer",
                                1000,
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                        />
                    </h1>
                    <blockquote className="text-base sm:text-lg mb-6 lg:text-xl italic">
                        My nickname is Randi. Informatics student at Diponegoro University. Inquisitive, energetic computer science specialist skilled in leadership, whit a desire to continue learning in math, logic, and coding. Seeking to leverage solid skills in collaboration, communication, and development as a programmer.
                    </blockquote>
                    <div>
                        <Button onClick={sendEmail}>
                            <Mail className="mr-2 h-4 w-4" /> Hire Me
                        </Button>
                        <Button
                            variant="ghost"
                            className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500"
                        >
                            <span className="block rounded-full px-5 py-2">
                                Download CV
                            </span>
                        </Button>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="col-span-4 place-self-center mt-4 lg:mt-0"
                >
                    <Avatar className="rounded-full w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
                        <AvatarImage
                            src="/images/02.png"
                            alt="hero image"
                            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                            width={300}
                            height={300}
                        />
                    </Avatar>
                </motion.div>
            </div>
        </section >
    );
};

export default Hero;