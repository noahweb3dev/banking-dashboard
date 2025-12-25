import Image from "next/image"
import VaultSVG from "@/public/vaultBank.svg"

export function Logo({ className }: { className?: string }) {
  return (
    <div className={className}>
      <Image src={VaultSVG} alt="VaultBank" width={96} height={24} />
    </div>
  )
}
