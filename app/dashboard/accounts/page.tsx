import { AccountsTable } from "@/components/accounts/accounts-table"

export default function AccountsPage() {
    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-2xl font-bold">Accounts</h1>
                <p className="text-muted-foreground">
                    View and manage your bank accounts
                </p>
            </div>

            <AccountsTable />
        </div>
    )
}
