import { BankAccount } from "@/types/account"
import { Transaction } from "@/types/transaction"
import { User } from "@/types/user"

export interface BankState {
    user: User
    accounts: BankAccount[]
    transactions: Transaction[]
}

const STORAGE_KEY = "bank_state"

const initialState: BankState = {
    user: {
        id: "user_1",
        name: "Jamie",
        email: "jamieleecurtis997@gmail.com",
    },
    accounts: [
        {
            id: "acc_checking",
            name: "Checking Account",
            type: "checking",
            balance: 573_222,
            currency: "USD",
        },
        {
            id: "acc_savings",
            name: "Savings Account",
            type: "savings",
            balance: 822_500,
            currency: "USD",
        },
    ],
    transactions: [],
}

export function loadBankState(): BankState {
    if (typeof window === "undefined") return initialState

    const stored = localStorage.getItem(STORAGE_KEY)
    return stored ? JSON.parse(stored) : initialState
}

export function saveBankState(state: BankState) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
}
