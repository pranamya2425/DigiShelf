import { Button } from "@/components/ui/button"
import { GroupCard } from "@/components/group-card"
import Link from "next/link"
import { mockGroups } from "@/lib/mock-data"

export default function DashboardPage() {
  const userGroups = mockGroups // In a real app, this would be fetched based on the logged-in user

  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8">
      <header className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
        <h1 className="text-4xl font-serif text-digi-primary">Your Groups</h1>
        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
          <Link href="/create-group" className="w-full sm:w-auto">
            <Button className="w-full bg-digi-accent text-digi-accent-foreground hover:bg-digi-accent/90">
              Create Group
            </Button>
          </Link>
          <Link href="/join-group" className="w-full sm:w-auto">
            <Button
              variant="outline"
              className="w-full border-digi-primary text-digi-primary hover:bg-digi-primary/5 bg-transparent"
            >
              Join Group via Code
            </Button>
          </Link>
        </div>
      </header>

      <section>
        {userGroups.length === 0 ? (
          <p className="text-center text-muted-foreground">
            You haven&apos;t joined any groups yet. Start by creating one or joining via a code!
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {userGroups.map((group) => (
              <GroupCard key={group.id} group={group} />
            ))}
          </div>
        )}
      </section>
    </div>
  )
}
