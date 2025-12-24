import { TransferForm } from "@/components/transfer/transfer-form"

export default function TransferPage() {
    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-2xl font-bold">Transfer Money</h1>
                <p className="text-muted-foreground">
                    Move funds between your accounts
                </p>
            </div>

            <TransferForm />
        </div>
    )
}
