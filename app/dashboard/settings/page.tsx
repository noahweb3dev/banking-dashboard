"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { useBank } from "@/components/providers/bank-provider"

export default function SettingsPage() {
    const { state } = useBank()
    const user = state.user

    return (
        <Card className="max-w-md">
            <CardHeader>Profile</CardHeader>
            <CardContent className="space-y-2">
                <div>
                    <p className="text-sm text-muted-foreground">Name</p>
                    <p className="font-medium">{user.name}</p>
                </div>

                <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-medium">{user.email}</p>
                </div>
            </CardContent>
        </Card>
    )
}
