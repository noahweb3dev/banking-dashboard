"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { useBank } from "@/components/providers/bank-provider"
import { formatCurrency } from "@/lib/format"

export function DashboardStats() {
    const { state } = useBank()

    const income = state.transactions
        .filter((t) => t.amount > 0)
        .reduce((sum, t) => sum + t.amount, 0)

    const expense = state.transactions
        .filter((t) => t.amount < 0)
        .reduce((sum, t) => sum + Math.abs(t.amount), 0)

    return (
        <div className="grid gap-4 md:grid-cols-3">
            <Card>
                <CardHeader>Total Balance</CardHeader>
                <CardContent>
                    {formatCurrency(
                        state.accounts.reduce((s, a) => s + a.balance, 0)
                    )}
                </CardContent>
            </Card>

            <Card>
                <CardHeader>Total Income</CardHeader>
                <CardContent>
                    {formatCurrency(income)}
                </CardContent>
            </Card>

            <Card>
                <CardHeader>Total Expenses</CardHeader>
                <CardContent>
                    {formatCurrency(expense)}
                </CardContent>
            </Card>
        </div>
    )
}
