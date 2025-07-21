"use client"

import * as React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useRouter } from "next/navigation"
import { type UserRole, mockGroups } from "@/lib/mock-data"

export default function JoinGroupPage() {
  const [inviteCode, setInviteCode] = React.useState("")
  const [role, setRole] = React.useState<UserRole>("Student")
  const [error, setError] = React.useState<string | null>(null)
  const router = useRouter()

  const handleJoinGroup = (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)

    // Simulate joining logic
    const foundGroup = mockGroups.find((group) => group.inviteCode === inviteCode)

    if (foundGroup) {
      console.log("Joining Group:", { inviteCode, role, groupId: foundGroup.id })
      // In a real app, you'd send this to your backend to add the user to the group
      router.push(`/group/${foundGroup.id}`)
    } else {
      setError("Invalid invite code. Please check and try again.")
    }
  }

  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8 flex justify-center">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-serif">Join a Group</CardTitle>
          <CardDescription>Enter the invite code to join an existing group.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleJoinGroup} className="grid gap-6">
            <div className="grid gap-2">
              <Label htmlFor="invite-code">Invite Code</Label>
              <Input
                id="invite-code"
                placeholder="e.g., CS101ABC"
                required
                value={inviteCode}
                onChange={(e) => setInviteCode(e.target.value.toUpperCase())}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="role">Your Role in this Group</Label>
              <Select value={role} onValueChange={(value: UserRole) => setRole(value)}>
                <SelectTrigger id="role">
                  <SelectValue placeholder="Select your role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Student">Student</SelectItem>
                  <SelectItem value="Faculty">Faculty</SelectItem>
                </SelectContent>
              </Select>
            </div>
            {error && <p className="text-destructive text-sm text-center">{error}</p>}
            <Button
              type="submit"
              className="w-full bg-digi-primary text-digi-primary-foreground hover:bg-digi-primary/90"
            >
              Join Group
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
