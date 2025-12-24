"use client"

import { useBank } from "@/components/providers/bank-provider"
import { formatCurrency } from "@/lib/format"
import { Card, CardContent } from "@/components/ui/card"

export default function TransactionsPage() {
    const { state } = useBank()

    if (state.transactions.length === 0) {
        return (
            <p className="text-muted-foreground">
                No transactions yet.
            </p>
        )
    }

    return (
        <div className="space-y-3">
            {state.transactions.map((txn) => (
                <Card key={txn.id}>
                    <CardContent className="flex justify-between py-4">
                        <div>
                            <p className="font-medium">{txn.description}</p>
                            <p className="text-sm text-muted-foreground">
                                {txn.date.slice(0, 10)}
                            </p>
                        </div>

                        <div
                            className={
                                txn.amount < 0
                                    ? "text-red-600"
                                    : "text-green-600"
                            }
                        >
                            {formatCurrency(txn.amount)}
                        </div>
                    </CardContent>
                </Card>
            ))}
        </div>
    )
}
