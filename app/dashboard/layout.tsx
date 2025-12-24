import { Sidebar } from "@/components/layout/sidebar"
import { TopBar } from "@/components/layout/topbar"
import { MobileBottomNav } from "@/components/layout/mobile-bottom-nav"
import { BankProvider } from "@/components/providers/bank-provider"

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <BankProvider>
            <div className="flex min-h-screen">
                <Sidebar />

                <div className="flex flex-1 flex-col">
                    <TopBar />
                    <main className="flex-1 p-6 pb-24 md:pb-6">
                        {children}
                    </main>
                    <MobileBottomNav />
                </div>
            </div>
        </BankProvider>
    )
}
