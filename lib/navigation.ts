import {
    LayoutDashboard,
    Wallet,
    ArrowLeftRight,
    FileText,
    Settings,
} from "lucide-react"

export const navigation = [
    {
        name: "Dashboard",
        href: "/dashboard",
        icon: LayoutDashboard,
    },
    {
        name: "Accounts",
        href: "/dashboard/accounts",
        icon: Wallet,
    },
    {
        name: "Transactions",
        href: "/dashboard/transactions",
        icon: FileText,
    },
    {
        name: "Transfer",
        href: "/dashboard/transfer",
        icon: ArrowLeftRight,
    },
    {
        name: "Settings",
        href: "/dashboard/settings",
        icon: Settings,
    },
]
