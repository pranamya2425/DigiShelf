import { Button } from "@/components/ui/button"
import { mockNotes } from "@/lib/mock-data"
import { notFound } from "next/navigation"
import Link from "next/link"
import { Download, ArrowLeft } from "lucide-react"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm" // For GitHub Flavored Markdown

interface NoteViewerPageProps {
  params: {
    groupId: string
    noteId: string
  }
}

export default function NoteViewerPage({ params }: NoteViewerPageProps) {
  const { groupId, noteId } = params
  const note = mockNotes.find((n) => n.id === noteId)

  if (!note) {
    notFound()
  }

  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8">
      <header className="flex items-center gap-4 mb-8">
        <Link href={`/group/${groupId}`}>
          <Button
            variant="outline"
            size="icon"
            className="border-digi-primary text-digi-primary hover:bg-digi-primary/5 bg-transparent"
          >
            <ArrowLeft className="h-5 w-5" />
            <span className="sr-only">Back to Group</span>
          </Button>
        </Link>
        <h1 className="text-4xl font-serif text-digi-primary">{note.title}</h1>
      </header>

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div className="text-muted-foreground text-sm">
          <span className="font-medium text-digi-primary">{note.subject}</span>
          {" • "}
          Uploaded by {note.uploadedBy.name} ({note.uploadedBy.role})
          {note.isOfficial && (
            <span className="ml-2 px-2 py-1 bg-digi-primary text-digi-primary-foreground rounded-md text-xs font-semibold">
              Official
            </span>
          )}
        </div>
        <Button className="bg-digi-accent text-digi-accent-foreground hover:bg-digi-accent/90 w-full md:w-auto">
          <Download className="h-4 w-4 mr-2" /> Download
        </Button>
      </div>

      <section className="bg-white p-6 rounded-lg shadow-sm border border-digi-border min-h-[60vh]">
        {note.type === "Text" ? (
          <div className="prose max-w-none font-sans text-digi-foreground">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{note.content}</ReactMarkdown>
          </div>
        ) : (
          <div className="w-full h-[70vh] flex items-center justify-center bg-gray-100 rounded-md">
            {/* In a real application, you would use a robust PDF viewer library */}
            {/* For demonstration, we use an iframe with a placeholder PDF */}
            <iframe
              src={note.content} // This would be the actual PDF URL from your storage
              width="100%"
              height="100%"
              title={note.title}
              className="border-none"
            >
              <p className="text-muted-foreground">Your browser does not support PDFs. Please download the file.</p>
            </iframe>
          </div>
        )}
      </section>
    </div>
  )
}
