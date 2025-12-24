"use client"

import { useState } from "react"
import { accounts } from "@/lib/mock/accounts"
import { transfers } from "@/lib/mock/transfers"
import { formatCurrency } from "@/lib/format"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export function TransferForm() {
    const [fromAccount, setFromAccount] = useState("")
    const [toAccount, setToAccount] = useState("")
    const [amount, setAmount] = useState("")
    const [error, setError] = useState("")
    const [success, setSuccess] = useState(false)

    function handleSubmit() {
        setError("")
        setSuccess(false)

        const amt = Number(amount)
        const from = accounts.find((a) => a.id === fromAccount)
        const to = accounts.find((a) => a.id === toAccount)

        if (!from || !to) {
            setError("Please select both accounts.")
            return
        }

        if (from.id === to.id) {
            setError("Cannot transfer to the same account.")
            return
        }

        if (amt <= 0) {
            setError("Transfer amount must be greater than zero.")
            return
        }

        if (from.balance < amt) {
            setError(
                `Insufficient funds. Available: ${formatCurrency(from.balance)}`
            )
            return
        }

        transfers.push({
            id: `tr_${Date.now()}`,
            fromAccountId: from.id,
            toAccountId: to.id,
            amount: amt,
            date: new Date().toISOString(),
        })

        setAmount("")
        setFromAccount("")
        setToAccount("")
        setSuccess(true)
    }

    return (
        <div className="max-w-lg space-y-6">
            {error && (
                <Alert variant="destructive">
                    <AlertTitle>Error</AlertTitle>
                    <AlertDescription>{error}</AlertDescription>
                </Alert>
            )}

            {success && (
                <Alert>
                    <AlertTitle>Transfer Successful</AlertTitle>
                    <AlertDescription>
                        Your transfer has been completed.
                    </AlertDescription>
                </Alert>
            )}

            <div className="space-y-4">
                <Select value={fromAccount} onValueChange={setFromAccount}>
                    <SelectTrigger>
                        <SelectValue placeholder="From Account" />
                    </SelectTrigger>
                    <SelectContent>
                        {accounts.map((account) => (
                            <SelectItem key={account.id} value={account.id}>
                                {account.name} — {formatCurrency(account.balance)}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>

                <Select value={toAccount} onValueChange={setToAccount}>
                    <SelectTrigger>
                        <SelectValue placeholder="To Account" />
                    </SelectTrigger>
                    <SelectContent>
                        {accounts.map((account) => (
                            <SelectItem key={account.id} value={account.id}>
                                {account.name}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>

                <Input
                    type="number"
                    placeholder="Amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                />

                <Button onClick={handleSubmit} className="w-full">
                    Transfer Money
                </Button>
            </div>
        </div>
    )
}
