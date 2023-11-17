"use client"

import * as React from "react"
import Link from "next/link"
import Container from "@/components/layout/container"
import Hero from "@/components/Hero"
import Projects from "@/components/Projects";

import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import MainNav from "@/components/layout/main-nav"

export default function Home() {
  return (
          <Container>
            <Hero/>
            <Projects/>
          </Container>
  )
}
