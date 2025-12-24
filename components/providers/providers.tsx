"use client"

import { SessionProvider } from "next-auth/react"
import { BankProvider } from "@/components/providers/bank-provider"
import { Toaster } from "@/components/ui/toaster"

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <BankProvider>
        {children}
        <Toaster />
      </BankProvider>
    </SessionProvider>
  )
}