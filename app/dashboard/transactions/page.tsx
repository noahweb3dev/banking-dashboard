import { TransactionsTable } from "@/components/transactions/transactions-table"

export default function TransactionsPage() {
    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-2xl font-bold">Transactions</h1>
                <p className="text-muted-foreground">
                    Search and filter your transaction history
                </p>
            </div>

            <TransactionsTable />
        </div>
    )
}
