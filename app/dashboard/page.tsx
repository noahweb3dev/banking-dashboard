import { AccountCards } from "@/components/dashboard/account-cards"
import { QuickStats } from "@/components/dashboard/quick-stats"

export default function DashboardPage() {
    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-2xl font-bold">Dashboard</h1>
                <p className="text-muted-foreground">
                    Overview of your financial activity
                </p>
            </div>

            <AccountCards />
            <QuickStats />
        </div>
    )
}
