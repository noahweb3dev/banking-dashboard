import { Transaction } from "@/types/transaction"

export function filterTransactions(
    transactions: Transaction[],
    search: string,
    type: string,
    accountId: string
) {
    return transactions.filter((txn) => {
        const matchesSearch =
            txn.description.toLowerCase().includes(search.toLowerCase())

        const matchesType =
            type === "all" || txn.type === type

        const matchesAccount =
            accountId === "all" || txn.accountId === accountId

        return matchesSearch && matchesType && matchesAccount
    })
}
