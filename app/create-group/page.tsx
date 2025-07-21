"use client"

import * as React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { useRouter } from "next/navigation"
import { generateRandomCode } from "@/lib/utils" // Assuming utils.ts has this
import Link from "next/link"

export default function CreateGroupPage() {
  const [groupName, setGroupName] = React.useState("")
  const [semesterBranch, setSemesterBranch] = React.useState("")
  const [description, setDescription] = React.useState("")
  const [inviteCode, setInviteCode] = React.useState("")
  const router = useRouter()

  const handleCreateGroup = (e: React.FormEvent) => {
    e.preventDefault()
    const newInviteCode = generateRandomCode(8) // Generate an 8-character code
    setInviteCode(newInviteCode)

    console.log("Creating Group:", {
      groupName,
      semesterBranch,
      description,
      inviteCode: newInviteCode,
    })

    // In a real app, you'd send this to your backend
    // On success, redirect to the group dashboard or show success message
    // router.push(`/group/${newGroupId}`);
  }

  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8 flex justify-center">
      <Card className="w-full max-w-2xl">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-serif">Create New Group</CardTitle>
          <CardDescription>Set up your academic note-sharing space.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleCreateGroup} className="grid gap-6">
            <div className="grid gap-2">
              <Label htmlFor="group-name">Group Name</Label>
              <Input
                id="group-name"
                placeholder="e.g., CS 101 - Introduction to Computer Science"
                required
                value={groupName}
                onChange={(e) => setGroupName(e.target.value)}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="semester-branch">Semester / Branch</Label>
              <Input
                id="semester-branch"
                placeholder="e.g., Fall 2024 / Computer Science"
                required
                value={semesterBranch}
                onChange={(e) => setSemesterBranch(e.target.value)}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="description">Description (Optional)</Label>
              <Textarea
                id="description"
                placeholder="A brief description of the group's purpose or content."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-digi-primary text-digi-primary-foreground hover:bg-digi-primary/90"
            >
              Create Group
            </Button>
          </form>

          {inviteCode && (
            <div className="mt-8 p-4 border border-dashed border-digi-border rounded-md bg-digi-background/50 text-center">
              <h3 className="text-lg font-semibold mb-2">Group Created!</h3>
              <p className="text-muted-foreground mb-4">Share this invite code with your students/faculty:</p>
              <div className="relative flex items-center justify-center">
                <Input
                  type="text"
                  readOnly
                  value={inviteCode}
                  className="w-full max-w-xs text-center font-mono text-lg bg-digi-background border-digi-primary"
                />
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => navigator.clipboard.writeText(inviteCode)}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-digi-primary hover:bg-digi-primary/10"
                  aria-label="Copy invite code"
                >
                  Copy
                </Button>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                You can now go to your{" "}
                <Link href="/dashboard" className="text-digi-primary hover:underline">
                  dashboard
                </Link>{" "}
                or directly enter the group.
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
