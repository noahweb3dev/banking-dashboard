import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { accounts } from "@/lib/mock/accounts"
import { formatCurrency } from "@/lib/format"

export function AccountsTable() {
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Account</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead className="text-right">Balance</TableHead>
                    <TableHead>Status</TableHead>
                </TableRow>
            </TableHeader>

            <TableBody>
                {accounts.map((account) => (
                    <TableRow key={account.id}>
                        <TableCell className="font-medium">
                            {account.name}
                        </TableCell>

                        <TableCell className="capitalize">
                            {account.type}
                        </TableCell>

                        <TableCell className="text-right">
                            {formatCurrency(account.balance)}
                        </TableCell>

                        <TableCell>
                            <Badge variant="secondary">Active</Badge>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}
