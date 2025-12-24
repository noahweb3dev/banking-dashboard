import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { accounts } from "@/lib/mock/accounts"

export function AccountCards() {
    return (
        <div className="grid gap-4 md:grid-cols-2">
            {accounts.map((account) => (
                <Card key={account.id}>
                    <CardHeader>
                        <CardTitle className="text-sm text-muted-foreground">
                            {account.name}
                        </CardTitle>
                    </CardHeader>

                    <CardContent>
                        <div className="text-2xl font-bold">
                            ${account.balance.toLocaleString()}
                        </div>
                        <p className="text-xs text-muted-foreground capitalize">
                            {account.type} account
                        </p>
                    </CardContent>
                </Card>
            ))}
        </div>
    )
}
