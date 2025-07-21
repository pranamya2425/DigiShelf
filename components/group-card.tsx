import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import type { Group } from "@/lib/mock-data"

interface GroupCardProps {
  group: Group
}

export function GroupCard({ group }: GroupCardProps) {
  return (
    <Card className="flex flex-col justify-between">
      <CardHeader>
        <CardTitle className="font-serif text-xl">{group.name}</CardTitle>
        <CardDescription>{group.semesterBranch}</CardDescription>
      </CardHeader>
      <CardContent>
        <Link href={`/group/${group.id}`} className="w-full">
          <Button className="w-full bg-digi-primary text-digi-primary-foreground hover:bg-digi-primary/90">
            Enter Group
          </Button>
        </Link>
      </CardContent>
    </Card>
  )
}
