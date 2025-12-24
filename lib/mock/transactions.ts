import { Transaction } from "@/types/transaction"

export const transactions: Transaction[] = [
    {
        id: "txn_1",
        date: "2025-09-01",
        description: "Salary Deposit",
        amount: 5200,
        type: "deposit",
        accountId: "acc_checking",
    },
    {
        id: "txn_2",
        date: "2025-09-03",
        description: "Rent Payment",
        amount: -1800,
        type: "withdrawal",
        accountId: "acc_checking",
    },
    {
        id: "txn_3",
        date: "2025-09-05",
        description: "Transfer to Savings",
        amount: -1000,
        type: "transfer",
        accountId: "acc_checking",
    },
]
