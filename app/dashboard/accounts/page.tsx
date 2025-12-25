"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { useBank } from "@/components/providers/bank-provider"
import { formatCurrency } from "@/lib/format"
import { Wallet, PiggyBank } from "lucide-react"

export default function AccountsPage() {
    const { state } = useBank()

    return (
        <div className="space-y-4">
            {state.accounts.map((account) => (
                <Card
                    key={account.id}
                    className="rounded-2xl overflow-hidden text-white shadow-lg"
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
            ))}
        </div>
    )
}
