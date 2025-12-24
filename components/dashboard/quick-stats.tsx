import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { transactions } from "@/lib/mock/transactions"

export function QuickStats() {
    const income = transactions
        .filter((t) => t.amount > 0)
        .reduce((sum, t) => sum + t.amount, 0)

    const expenses = transactions
        .filter((t) => t.amount < 0)
        .reduce((sum, t) => sum + t.amount, 0)

    return (
        <div className="grid gap-4 md:grid-cols-3">
            <Card>
                <CardHeader>
                    <CardTitle className="text-sm">Total Income</CardTitle>
                </CardHeader>
                <CardContent className="text-xl font-bold text-green-600">
                    ${income.toLocaleString()}
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle className="text-sm">Total Expenses</CardTitle>
                </CardHeader>
                <CardContent className="text-xl font-bold text-red-600">
                    ${Math.abs(expenses).toLocaleString()}
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle className="text-sm">Transactions</CardTitle>
                </CardHeader>
                <CardContent className="text-xl font-bold">
                    {transactions.length}
                </CardContent>
            </Card>
        </div>
    )
}
