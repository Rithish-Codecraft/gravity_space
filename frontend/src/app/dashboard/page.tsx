import Link from "next/link";
import { CheckCircle2, TrendingUp, Users, FileText } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="container mx-auto p-6 max-w-6xl">
      <div className="mb-8 flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold mb-2">Good morning, Arun!</h1>
          <p className="text-muted-foreground">Here are your personalized opportunities for today.</p>
        </div>
        <Link href="/schemes" className="px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90">
          Find Schemes
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="border border-border p-4 rounded-xl bg-background shadow-sm">
          <div className="text-muted-foreground text-sm font-medium mb-1 flex items-center gap-2">
            <FileText className="h-4 w-4" /> Eligible Schemes
          </div>
          <div className="text-2xl font-bold">3</div>
        </div>
        <div className="border border-border p-4 rounded-xl bg-background shadow-sm">
          <div className="text-muted-foreground text-sm font-medium mb-1 flex items-center gap-2">
            <TrendingUp className="h-4 w-4" /> Opportunities
          </div>
          <div className="text-2xl font-bold">12</div>
        </div>
        <div className="border border-border p-4 rounded-xl bg-background shadow-sm">
          <div className="text-muted-foreground text-sm font-medium mb-1 flex items-center gap-2">
            <Users className="h-4 w-4" /> Network Connections
          </div>
          <div className="text-2xl font-bold">5</div>
        </div>
        <div className="border border-border p-4 rounded-xl bg-background shadow-sm">
          <div className="text-muted-foreground text-sm font-medium mb-1 flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4" /> Profile Completeness
          </div>
          <div className="text-2xl font-bold">85%</div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <section>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">AI Recommended Schemes</h2>
            <Link href="/match" className="text-sm text-primary hover:underline font-medium">View all &rarr;</Link>
          </div>
          <div className="space-y-4">
            <div className="border border-border p-5 rounded-xl bg-background shadow-sm flex flex-col gap-3">
              <div className="flex justify-between items-start">
                <div>
                  <div className="text-xs font-medium text-primary mb-1 bg-muted inline-block px-2 py-0.5 rounded">94% Match</div>
                  <h3 className="font-semibold text-lg">PMEGP Subsidy</h3>
                </div>
                <div className="text-sm text-green-600 font-medium bg-green-50 px-2 py-1 rounded-md border border-green-100 flex items-center gap-1">
                  <CheckCircle2 className="h-3 w-3" /> Eligible
                </div>
              </div>
              <p className="text-sm text-muted-foreground">Financial assistance for setting up micro-enterprises in manufacturing sector.</p>
              <div className="text-sm bg-muted p-2 rounded-md">
                <span className="font-medium">Why matched:</span> You are starting a manufacturing business requiring financial support.
              </div>
            </div>
            
            <div className="border border-border p-5 rounded-xl bg-background shadow-sm flex flex-col gap-3">
              <div className="flex justify-between items-start">
                <div>
                  <div className="text-xs font-medium text-primary mb-1 bg-muted inline-block px-2 py-0.5 rounded">88% Match</div>
                  <h3 className="font-semibold text-lg">MUDRA Loan</h3>
                </div>
                <div className="text-sm text-amber-600 font-medium bg-amber-50 px-2 py-1 rounded-md border border-amber-100">
                  Possibly Eligible
                </div>
              </div>
              <p className="text-sm text-muted-foreground">Up to 10 lakh loan for non-corporate, non-farm small enterprises.</p>
            </div>
          </div>
        </section>

        <section>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Business Opportunities</h2>
            <Link href="/opportunities" className="text-sm text-primary hover:underline font-medium">Explore network &rarr;</Link>
          </div>
          <div className="space-y-4">
             <div className="border border-border p-5 rounded-xl bg-background shadow-sm">
              <div className="flex justify-between items-start mb-2">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center font-bold text-xs text-primary">SV</div>
                  <h3 className="font-semibold">Sri Venkateshwara Timbers</h3>
                </div>
                <span className="text-xs text-muted-foreground">2 hours ago</span>
              </div>
              <p className="text-sm mb-3">"We are a wholesale supplier of premium teak wood in Tamil Nadu looking for manufacturing partners."</p>
              <button className="text-sm font-medium text-primary hover:underline">Connect</button>
            </div>
            
            <div className="border border-border p-5 rounded-xl bg-background shadow-sm">
              <div className="flex justify-between items-start mb-2">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center font-bold text-xs text-primary">EF</div>
                  <h3 className="font-semibold">EcoFurniture Co.</h3>
                </div>
                <span className="text-xs text-muted-foreground">1 day ago</span>
              </div>
              <p className="text-sm mb-3">"Looking for B2B contract manufacturers for small wooden chairs. Volume: 500 units/month."</p>
              <button className="text-sm font-medium text-primary hover:underline">Message</button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
