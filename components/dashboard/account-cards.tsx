"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { useBank } from "@/components/providers/bank-provider"

export function AccountCards() {
    const { state } = useBank()
    const accounts = state.accounts

    return (
        <>
            {/* Mobile — Swipeable */}
            <div className="md:hidden">
                <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory">
                    {accounts.map((account, index) => {
                        const isPrimary = index === 0

                        return (
                            <div
                                key={account.id}
                                className="min-w-[85%] snap-center"
                            >
                                <Card
                                    className={cn(
                                        "transition-all",
                                        isPrimary && "border-primary shadow-lg"
                                    )}
                                >
                                    <CardHeader>
                                        <p className="text-sm text-muted-foreground">
                                            {account.name}
                                        </p>
                                    </CardHeader>

                                    <CardContent>
                                        <div className="text-3xl font-bold">
                                            ${account.balance.toLocaleString()}
                                        </div>
                                        <p className="text-sm capitalize text-muted-foreground">
                                            {account.type} account
                                        </p>
                                    </CardContent>
                                </Card>
                            </div>
                        )
                    })}
                </div>
            </div>

            {/* Desktop — Grid */}
            <div className="hidden md:grid md:grid-cols-2 md:gap-4">
                {accounts.map((account, index) => {
                    const isPrimary = index === 0

                    return (
                        <Card
                            key={account.id}
                            className={cn(
                                isPrimary && "border-primary shadow-md"
                            )}
                        >
                            <CardHeader>
                                <p className="text-sm text-muted-foreground">
                                    {account.name}
                                </p>
                            </CardHeader>

                            <CardContent>
                                <div className="text-2xl font-bold">
                                    ${account.balance.toLocaleString()}
                                </div>
                                <p className="text-sm capitalize text-muted-foreground">
                                    {account.type} account
                                </p>
                            </CardContent>
                        </Card>
                    )
                })}
            </div>
        </>
    )
}
