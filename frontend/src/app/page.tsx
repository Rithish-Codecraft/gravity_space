export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-4">Find the Right Scheme. Discover the Right Opportunity.</h1>
      <p className="text-xl text-muted-foreground text-center max-w-2xl mb-8">
        AI-powered assistance to discover relevant government schemes, check eligibility and connect with meaningful business opportunities.
      </p>
      <div className="flex gap-4">
        <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90">
          Get Started
        </button>
        <button className="px-6 py-3 border border-border text-foreground rounded-lg font-medium hover:bg-muted">
          Explore Schemes
        </button>
      </div>
    </div>
  );
}
