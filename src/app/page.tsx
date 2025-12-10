import Link from "next/link";
import { ShoppingBag, Utensils, Plane, Home as HomeIcon } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)]">
      <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
        <div className="container mx-auto flex max-w-[64rem] flex-col items-center gap-4 text-center">
          <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
            One Platform. <br /> Infinite Possibilities.
          </h1>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            Experience the future of convenience. Shop, Eat, Travel, and Find your Dream Home all in one unified ecosystem.
          </p>
          <div className="space-x-4">
            <Link href="/auth/signup" className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-11 px-8">
              Get Started
            </Link>
            <Link href="/about" className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-11 px-8">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      <section className="container space-y-6 bg-slate-50 py-8 dark:bg-transparent md:py-12 lg:py-24">
        <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-4">
          <Link href="/shop" className="relative overflow-hidden rounded-lg border bg-background p-2 text-left transition-all hover:-translate-y-1 hover:shadow-lg">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <ShoppingBag className="h-12 w-12 text-primary" />
              <div className="space-y-2">
                <h3 className="font-bold">E-Commerce</h3>
                <p className="text-sm text-muted-foreground">Shop millions of products.</p>
              </div>
            </div>
          </Link>
          <Link href="/food" className="relative overflow-hidden rounded-lg border bg-background p-2 text-left transition-all hover:-translate-y-1 hover:shadow-lg">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <Utensils className="h-12 w-12 text-primary" />
              <div className="space-y-2">
                <h3 className="font-bold">Food Delivery</h3>
                <p className="text-sm text-muted-foreground">Order from top restaurants.</p>
              </div>
            </div>
          </Link>
          <Link href="/travel" className="relative overflow-hidden rounded-lg border bg-background p-2 text-left transition-all hover:-translate-y-1 hover:shadow-lg">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <Plane className="h-12 w-12 text-primary" />
              <div className="space-y-2">
                <h3 className="font-bold">Tours & Travels</h3>
                <p className="text-sm text-muted-foreground">Book your next adventure.</p>
              </div>
            </div>
          </Link>
          <Link href="/real-estate" className="relative overflow-hidden rounded-lg border bg-background p-2 text-left transition-all hover:-translate-y-1 hover:shadow-lg">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <HomeIcon className="h-12 w-12 text-primary" />
              <div className="space-y-2">
                <h3 className="font-bold">Real Estate</h3>
                <p className="text-sm text-muted-foreground">Find your perfect home.</p>
              </div>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}
