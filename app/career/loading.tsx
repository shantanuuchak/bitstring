export default function CareerLoading() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header skeleton */}
      <div className="h-16 bg-background border-b border-border animate-pulse" />

      <main className="flex-1">
        {/* Page hero skeleton */}
        <div className="h-40 bg-secondary animate-pulse" />

        {/* Filters skeleton */}
        <section className="py-8 bg-background border-b border-border">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="h-10 bg-secondary rounded animate-pulse" />
              ))}
            </div>
          </div>
        </section>

        {/* Job cards skeleton */}
        <section className="py-12 lg:py-16 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="bg-background rounded-lg p-6 h-48 animate-pulse" />
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer skeleton */}
      <div className="h-32 bg-background border-t border-border animate-pulse" />
    </div>
  )
}
