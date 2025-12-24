"use client"

import { signOut, useSession } from "next-auth/react"
import { MobileNav } from "./mobile-nav"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ThemeToggle } from "./theme-toggle"

export function TopBar() {
    const { data: session } = useSession()

    const handleLogout = () => {
        signOut({ callbackUrl: "/login" })
    }

    const initials = session?.user?.name?.split(" ").map(n => n[0]).join("") || "U"

    return (
        <header className="flex h-16 items-center justify-between border-b px-4">
            <div className="flex items-center gap-2">
                <MobileNav />
                <ThemeToggle />
            </div>

            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Avatar className="cursor-pointer">
                        <AvatarFallback>{initials}</AvatarFallback>
                    </Avatar>
                </DropdownMenuTrigger>

                <DropdownMenuContent align="end">
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                    <DropdownMenuItem onClick={handleLogout}>Logout</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </header>
    )
}
