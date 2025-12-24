"use client"

import { useState } from "react"
import { user, updateUser } from "@/lib/mock/user"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export function SettingsForm() {
    const [name, setName] = useState(user.name)
    const [email, setEmail] = useState(user.email)
    const [saved, setSaved] = useState(false)

    function handleSave() {
        updateUser({ name, email })
        setSaved(true)

        setTimeout(() => setSaved(false), 3000)
    }

    return (
        <Card className="max-w-xl">
            <CardHeader>
                <CardTitle>Profile Settings</CardTitle>
            </CardHeader>

            <CardContent className="space-y-4">
                {saved && (
                    <Alert>
                        <AlertTitle>Saved</AlertTitle>
                        <AlertDescription>
                            Your profile has been updated.
                        </AlertDescription>
                    </Alert>
                )}

                <div className="space-y-2">
                    <label className="text-sm font-medium">Name</label>
                    <Input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium">Email</label>
                    <Input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <Button onClick={handleSave}>
                    Save Changes
                </Button>
            </CardContent>
        </Card>
    )
}
