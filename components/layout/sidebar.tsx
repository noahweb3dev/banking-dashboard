"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { navigation } from "@/lib/navigation"

export function Sidebar() {
    const pathname = usePathname()

    return (
        <aside className="hidden md:flex w-64 flex-col border-r bg-background">
            <div className="p-6 text-xl font-bold">
                MyBank
            </div>

            <nav className="flex-1 space-y-1 px-4">
                {navigation.map((item) => {
                    const active = pathname === item.href
                    const Icon = item.icon

                    return (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={cn(
                                "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                                active
                                    ? "bg-muted text-primary"
                                    : "text-muted-foreground hover:bg-muted"
                            )}
                        >
                            <Icon className="h-4 w-4" />
                            {item.name}
                        </Link>
                    )
                })}
            </nav>
        </aside>
    )
}
