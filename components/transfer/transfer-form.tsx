"use client"

import { useState } from "react"
import { useBank } from "@/components/providers/bank-provider"
import { formatCurrency } from "@/lib/format"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
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
import { Separator } from "@/components/ui/separator"
import { ArrowRight } from "lucide-react"
import { toast } from "@/lib/use-toast"

type Step = 1 | 2 | 3 | 4

export function TransferForm() {
    const { state, transfer } = useBank()
    const accounts = state.accounts

    const [step, setStep] = useState<Step>(1)
    const [fromId, setFromId] = useState("")
    const [toId, setToId] = useState("")
    const [amount, setAmount] = useState("")

    const from = accounts.find((a) => a.id === fromId)
    const to = accounts.find((a) => a.id === toId)
    const amt = Number(amount)

    function next() {
        setStep((s) => (s + 1) as Step)
    }

    function back() {
        setStep((s) => (s - 1) as Step)
    }

    function validateStep1() {
        if (!from || !to) {
            toast({
                title: "Validation Error",
                description: "Please select both accounts.",
                variant: "destructive",
            })
            return false
        }
        if (from.id === to.id) {
            toast({
                title: "Validation Error",
                description: "Accounts must be different.",
                variant: "destructive",
            })
            return false
        }
        return true
    }

    function validateStep2() {
        if (!amt || amt <= 0) {
            toast({
                title: "Validation Error",
                description: "Enter a valid amount.",
                variant: "destructive",
            })
            return false
        }
        if (!from || from.balance < amt) {
            toast({
                title: "Validation Error",
                description: "Insufficient funds.",
                variant: "destructive",
            })
            return false
        }
        return true
    }

    function submit() {
        transfer(fromId, toId, amt)
        next()
    }

    return (
        <Card className="max-w-lg mx-auto">
            <CardHeader className="text-sm text-muted-foreground">
                Step {step} of 4
            </CardHeader>

            <CardContent className="space-y-6">
                {/* STEP 1 — SELECT ACCOUNTS */}
                {step === 1 && (
                    <>
                        <Select value={fromId} onValueChange={setFromId}>
                            <SelectTrigger>
                                <SelectValue placeholder="From account" />
                            </SelectTrigger>
                            <SelectContent>
                                {accounts.map((a) => (
                                    <SelectItem key={a.id} value={a.id}>
                                        {a.name} — {formatCurrency(a.balance)}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>

                        <Select value={toId} onValueChange={setToId}>
                            <SelectTrigger>
                                <SelectValue placeholder="To account" />
                            </SelectTrigger>
                            <SelectContent>
                                {accounts.map((a) => (
                                    <SelectItem key={a.id} value={a.id}>
                                        {a.name}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>

                        <Button
                            className="w-full"
                            onClick={() => validateStep1() && next()}
                        >
                            Continue
                        </Button>
                    </>
                )}

                {/* STEP 2 — ENTER AMOUNT */}
                {step === 2 && (
                    <>
                        <Input
                            type="number"
                            placeholder="Amount"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                        />

                        <div className="flex gap-2">
                            <Button variant="ghost" onClick={back}>
                                Back
                            </Button>
                            <Button
                                className="flex-1"
                                onClick={() => validateStep2() && next()}
                            >
                                Continue
                            </Button>
                        </div>
                    </>
                )}

                {/* STEP 3 — CONFIRM */}
                {step === 3 && from && to && (
                    <>
                        <div className="space-y-4 text-sm">
                            <div className="flex items-center justify-between">
                                <span>{from.name}</span>
                                <ArrowRight className="h-4 w-4 text-muted-foreground" />
                                <span>{to.name}</span>
                            </div>

                            <Separator />

                            <div className="text-center text-2xl font-bold">
                                {formatCurrency(amt)}
                            </div>
                        </div>

                        <div className="flex gap-2">
                            <Button variant="ghost" onClick={back}>
                                Back
                            </Button>
                            <Button className="flex-1" onClick={submit}>
                                Confirm Transfer
                            </Button>
                        </div>
                    </>
                )}

                {/* STEP 4 — SUCCESS */}
                {step === 4 && (
                    <div className="text-center">
                        <h3 className="text-lg font-semibold text-green-600">Transfer Complete</h3>
                        <p className="text-sm text-muted-foreground">
                            Your transfer was successful and balances have been updated.
                        </p>
                    </div>
                )}
            </CardContent>
        </Card>
    )
}
