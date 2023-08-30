"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"


export function InputDemo() {
   
    return (
  <div>
  <Input type="email" placeholder="Email" />
  
  <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="picture">Picture</Label>
      <Input id="picture" type="file" />
    </div>

    <div className="flex w-full max-w-sm items-center space-x-2">
      <Input type="email" placeholder="Email" />
      <Button type="submit">Subscribe</Button>
    </div>

  </div>
  )
}