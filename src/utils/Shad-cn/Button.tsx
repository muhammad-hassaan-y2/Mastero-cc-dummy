import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react"
import { Loader2 } from "lucide-react"
import Link from "next/link"

export function ButtonDemo() {
  return (
  <div>
  <Button>Button</Button>
  <Button variant="secondary">Secondary</Button>
  <Button variant="destructive">Destructive</Button>
  <Button variant="outline">Outline</Button>
  <Button variant="ghost">Ghost</Button>
  <Button variant="link">Link</Button>
  <Button>
      <Mail className="mr-2 h-4 w-4" /> Login with Email
    </Button>
    <Button disabled>
      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
      Please wait
    </Button>

    <Button asChild>
      <Link href="/login">Login</Link>
    </Button>
  </div>)
}