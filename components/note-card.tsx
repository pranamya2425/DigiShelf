import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { FileText, File, Download } from 'lucide-react'
import type { Note } from "@/lib/mock-data"

interface NoteCardProps {
  note: Note
  groupId: string
}

export function NoteCard({ note, groupId }: NoteCardProps) {
  const isPDF = note.type === "PDF"
  const icon = isPDF ? (
    <File className="h-5 w-5 text-digi-primary" />
  ) : (
    <FileText className="h-5 w-5 text-digi-primary" />
  )

  return (
    <Card className="flex flex-col justify-between">
      <CardHeader className="pb-2">
        <div className="flex items-center gap-2 mb-1">
          {icon}
          <CardTitle className="font-serif text-lg line-clamp-1">{note.title}</CardTitle>
        </div>
        <CardDescription className="text-sm">
          <span className="font-medium text-digi-primary">{note.subject}</span>
          {" • "}
          Uploaded by {note.uploadedBy.name} ({note.uploadedBy.role})
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="flex items-center gap-2 mb-4">
          <Badge variant="secondary" className="bg-digi-accent/20 text-digi-accent-foreground">
            {note.type}
          </Badge>
          {note.isOfficial && <Badge className="bg-digi-primary text-digi-primary-foreground">Official</Badge>}
        </div>
        <div className="flex gap-2">
          <Link href={`/group/${groupId}/note/${note.id}`} className="flex-1">
            <Button
              variant="outline"
              className="w-full border-digi-primary text-digi-primary hover:bg-digi-primary/5 bg-transparent"
            >
              View
            </Button>
          </Link>
          <Button
            variant="outline"
            className="w-full border-digi-primary text-digi-primary hover:bg-digi-primary/5 bg-transparent"
          >
            <Download className="h-4 w-4 mr-2" /> Download
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
