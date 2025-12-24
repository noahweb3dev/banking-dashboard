"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { useBank } from "@/components/providers/bank-provider"

export default function AccountsPage() {
    const { state } = useBank()

    return (
        <div className="space-y-4">
            {state.accounts.map((account) => (
                <Card key={account.id}>
                    <CardHeader className="text-sm text-muted-foreground">
                        {account.name}
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
            ))}
        </div>
    )
}
