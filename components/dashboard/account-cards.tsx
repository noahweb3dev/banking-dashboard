"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { useBank } from "@/components/providers/bank-provider"
import { formatCurrency } from "@/lib/format"
import { Wallet, PiggyBank } from "lucide-react"

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
                            <div key={account.id} className="min-w-[85%] snap-center">
                                <Card
                                    className={cn(
                                        "overflow-hidden rounded-2xl text-white",
                                        isPrimary ? "shadow-2xl" : "shadow-lg",
                                    )}
                                    style={{
                                        background: account.type === "savings"
                                            ? "linear-gradient(90deg,#14532d,#166534)"
                                            : "linear-gradient(90deg,#16a34a,#22c55e)"
                                    }}
                                >
                                    <CardHeader>
                                        <div className="flex items-start justify-between gap-4">
                                            <div className="space-y-1">
                                                <p className="text-xs opacity-90">{account.name}</p>
                                                <p className="text-[10px] uppercase opacity-80 tracking-wider">{account.type} account</p>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                {account.type === "savings" ? (
                                                    <PiggyBank className="h-6 w-6 opacity-95" />
                                                ) : (
                                                    <Wallet className="h-6 w-6 opacity-95" />
                                                )}
                                            </div>
                                        </div>
                                    </CardHeader>

                                    <CardContent>
                                        <div className="flex items-end justify-between">
                                            <div>
                                                <div className="text-3xl font-extrabold leading-none">
                                                    {formatCurrency(account.balance)}
                                                </div>
                                                <p className="text-xs opacity-90">Available balance</p>
                                            </div>
                                            <div className="text-right text-sm opacity-80">
                                                <div>Acct •••• {account.id.slice(-4)}</div>
                                                <div className="mt-2 text-[12px]">{account.currency}</div>
                                            </div>
                                        </div>
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
                            className={cn("rounded-2xl overflow-hidden text-white", isPrimary ? "shadow-2xl" : "shadow-lg")}
                            style={{
                                background: account.type === "savings"
                                    ? "linear-gradient(90deg,#14532d,#166534)"
                                    : "linear-gradient(90deg,#16a34a,#22c55e)"
                            }}
                        >
                            <CardHeader>
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-sm opacity-90">{account.name}</p>
                                        <p className="text-xs uppercase opacity-80 tracking-wider">{account.type} account</p>
                                    </div>
                                    <div>
                                        {account.type === "savings" ? (
                                            <PiggyBank className="h-6 w-6 opacity-95" />
                                        ) : (
                                            <Wallet className="h-6 w-6 opacity-95" />
                                        )}
                                    </div>
                                </div>
                            </CardHeader>

                            <CardContent>
                                <div className="flex items-center justify-between">
                                    <div>
                                        <div className="text-3xl font-extrabold leading-none">
                                            {formatCurrency(account.balance)}
                                        </div>
                                        <p className="text-sm opacity-90">Available balance</p>
                                    </div>
                                    <div className="text-right text-sm opacity-80">
                                        <div>Acct •••• {account.id.slice(-4)}</div>
                                        <div className="mt-2 text-[12px]">{account.currency}</div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    )
                })}
            </div>
        </>
    )
}
