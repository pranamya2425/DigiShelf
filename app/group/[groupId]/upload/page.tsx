"use client"

import * as React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { useRouter } from "next/navigation"
import { mockNotes } from "@/lib/mock-data" // Assuming mockNotes for subject suggestions

interface UploadNotesPageProps {
  params: {
    groupId: string
  }
}

export default function UploadNotesPage({ params }: UploadNotesPageProps) {
  const { groupId } = params
  const router = useRouter()

  const [title, setTitle] = React.useState("")
  const [subject, setSubject] = React.useState("")
  const [description, setDescription] = React.useState("")
  const [noteType, setNoteType] = React.useState<"PDF" | "Text">("Text")
  const [file, setFile] = React.useState<File | null>(null)
  const [textContent, setTextContent] = React.useState("")
  const [isOfficial, setIsOfficial] = React.useState(false)

  // Mock user role (replace with actual user context)
  const currentUserRole: "Student" | "Faculty" = "Faculty" // Change to "Student" to test student view

  const availableSubjects = Array.from(new Set(mockNotes.map((note) => note.subject)))

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Uploading Note:", {
      groupId,
      title,
      subject,
      description,
      noteType,
      file: file?.name,
      textContent,
      isOfficial: currentUserRole === "Faculty" ? isOfficial : false,
    })

    // In a real app, you'd upload the file/text content to storage
    // and save note metadata to your backend.
    // On success, redirect to the group dashboard.
    router.push(`/group/${groupId}`)
  }

  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8 flex justify-center">
      <Card className="w-full max-w-3xl">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-serif">Upload New Note</CardTitle>
          <CardDescription>Share study materials with your group.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="grid gap-6">
            <div className="grid gap-2">
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                placeholder="e.g., Lecture 5: Data Structures"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="subject">Subject</Label>
              <Select value={subject} onValueChange={setSubject}>
                <SelectTrigger id="subject">
                  <SelectValue placeholder="Select or type a subject" />
                </SelectTrigger>
                <SelectContent>
                  {availableSubjects.map((sub) => (
                    <SelectItem key={sub} value={sub}>
                      {sub}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Input
                id="new-subject"
                placeholder="Or type a new subject (e.g., Quantum Physics)"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="mt-2"
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="description">Description (Optional)</Label>
              <Textarea
                id="description"
                placeholder="A brief summary or additional context for the note."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="note-type">Note Type</Label>
              <Select value={noteType} onValueChange={(value: "PDF" | "Text") => setNoteType(value)}>
                <SelectTrigger id="note-type">
                  <SelectValue placeholder="Select note type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Text">Text Note (Markdown)</SelectItem>
                  <SelectItem value="PDF">PDF Document</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {noteType === "PDF" ? (
              <div className="grid gap-2">
                <Label htmlFor="pdf-upload">Upload PDF</Label>
                <Input
                  id="pdf-upload"
                  type="file"
                  accept=".pdf"
                  required
                  onChange={(e) => setFile(e.target.files ? e.target.files[0] : null)}
                />
              </div>
            ) : (
              <div className="grid gap-2">
                <Label htmlFor="text-content">Text Content (Markdown)</Label>
                <Textarea
                  id="text-content"
                  placeholder="Write your notes here using Markdown..."
                  rows={10}
                  required
                  value={textContent}
                  onChange={(e) => setTextContent(e.target.value)}
                />
              </div>
            )}

            {currentUserRole === "Faculty" && (
              <div className="flex items-center space-x-2">
                <Checkbox id="official" checked={isOfficial} onCheckedChange={(checked) => setIsOfficial(!!checked)} />
                <Label
                  htmlFor="official"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Mark as Official (Faculty only)
                </Label>
              </div>
            )}

            <Button
              type="submit"
              className="w-full bg-digi-primary text-digi-primary-foreground hover:bg-digi-primary/90"
            >
              Upload Note
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
