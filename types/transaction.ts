export type TransactionType = "deposit" | "withdrawal" | "transfer"

export interface Transaction {
    id: string
    date: string
    description: string
    amount: number
    type: TransactionType
    accountId: string
}
