import Link from "next/link";
import { ShoppingCart, User, Search, Menu } from "lucide-react";

export default function Navbar() {
    return (
        <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center justify-between">
                <div className="mr-4 hidden md:flex">
                    <Link href="/" className="mr-6 flex items-center space-x-2">
                        <span className="hidden font-bold sm:inline-block">
                            UniHub
                        </span>
                    </Link>
                    <nav className="flex items-center space-x-6 text-sm font-medium">
                        <Link href="/shop" className="transition-colors hover:text-foreground/80 text-foreground/60">Shop</Link>
                        <Link href="/food" className="transition-colors hover:text-foreground/80 text-foreground/60">Food</Link>
                        <Link href="/travel" className="transition-colors hover:text-foreground/80 text-foreground/60">Travel</Link>
                        <Link href="/real-estate" className="transition-colors hover:text-foreground/80 text-foreground/60">Real Estate</Link>
                    </nav>
                </div>
                <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
                    <div className="w-full flex-1 md:w-auto md:flex-none">
                        <div className="relative">
                            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                            <input
                                suppressHydrationWarning
                                placeholder="Search anything..."
                                className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 pl-8 md:w-[300px] lg:w-[300px]"
                            />
                        </div>
                    </div>
                    <nav className="flex items-center space-x-2">
                        <button suppressHydrationWarning className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 w-9">
                            <ShoppingCart className="h-4 w-4" />
                            <span className="sr-only">Cart</span>
                        </button>
                        <Link href="/auth/login" className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 w-9">
                            <User className="h-4 w-4" />
                            <span className="sr-only">Account</span>
                        </Link>
                    </nav>
                </div>
            </div>
        </nav>
    );
}
