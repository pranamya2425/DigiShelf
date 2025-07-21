"use client"

import { Button } from "@/components/ui/button"
import { NoteCard } from "@/components/note-card"
import Link from "next/link"
import { mockGroups, mockNotes } from "@/lib/mock-data"
import { notFound } from "next/navigation"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ChevronDown } from "lucide-react"
import * as React from "react"

interface GroupDashboardPageProps {
  params: {
    groupId: string
  }
}

export default function GroupDashboardPage({ params }: GroupDashboardPageProps) {
  const { groupId } = params
  const group = mockGroups.find((g) => g.id === groupId)

  if (!group) {
    notFound()
  }

  const groupNotes = mockNotes.filter(
    (note) =>
      // In a real app, notes would be filtered by groupId from backend
      // For mock, let's just show all notes for any group for now
      // Or, we could add a groupId to mockNotes
      true,
  )

  const subjects = Array.from(new Set(groupNotes.map((note) => note.subject)))
  const [selectedSubject, setSelectedSubject] = React.useState<string | "All">("All")

  const filteredNotes =
    selectedSubject === "All" ? groupNotes : groupNotes.filter((note) => note.subject === selectedSubject)

  // Group notes by subject for folder-like layout
  const notesBySubject: { [key: string]: typeof filteredNotes } = {}
  filteredNotes.forEach((note) => {
    if (!notesBySubject[note.subject]) {
      notesBySubject[note.subject] = []
    }
    notesBySubject[note.subject].push(note)
  })

  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8">
      <header className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
        <h1 className="text-4xl font-serif text-digi-primary">{group.name}</h1>
        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="w-full sm:w-auto border-digi-primary text-digi-primary hover:bg-digi-primary/5 bg-transparent"
              >
                Subject: {selectedSubject} <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setSelectedSubject("All")}>All Subjects</DropdownMenuItem>
              {subjects.map((subject) => (
                <DropdownMenuItem key={subject} onClick={() => setSelectedSubject(subject)}>
                  {subject}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          <Link href={`/group/${groupId}/upload`} className="w-full sm:w-auto">
            <Button className="w-full bg-digi-accent text-digi-accent-foreground hover:bg-digi-accent/90">
              Upload Note
            </Button>
          </Link>
        </div>
      </header>

      <section>
        {Object.keys(notesBySubject).length === 0 ? (
          <p className="text-center text-muted-foreground">No notes found for this subject. Be the first to upload!</p>
        ) : (
          <div className="grid gap-8">
            {Object.entries(notesBySubject).map(([subject, notes]) => (
              <div key={subject}>
                <h2 className="text-2xl font-serif text-digi-primary mb-4 border-b pb-2">{subject}</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {notes.map((note) => (
                    <NoteCard key={note.id} note={note} groupId={groupId} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  )
}
