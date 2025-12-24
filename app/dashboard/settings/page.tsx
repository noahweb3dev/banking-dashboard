import { SettingsForm } from "@/components/settings/settings-form"

export default function SettingsPage() {
    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-2xl font-bold">Settings</h1>
                <p className="text-muted-foreground">
                    Manage your profile and preferences
                </p>
            </div>

            <SettingsForm />
        </div>
    )
}
