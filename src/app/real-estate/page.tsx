import { Home } from "lucide-react";

export default function RealEstatePage() {
    return (
        <div className="container py-10">
            <div className="flex items-center gap-4 mb-8">
                <Home className="h-10 w-10 text-primary" />
                <h1 className="text-4xl font-bold">Real Estate</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Placeholder for Properties */}
                <div className="border rounded-lg p-4 h-80 flex items-center justify-center bg-muted/20">
                    <p className="text-muted-foreground">Property Listings Coming Soon</p>
                </div>
                <div className="border rounded-lg p-4 h-80 flex items-center justify-center bg-muted/20">
                    <p className="text-muted-foreground">Property Listings Coming Soon</p>
                </div>
                <div className="border rounded-lg p-4 h-80 flex items-center justify-center bg-muted/20">
                    <p className="text-muted-foreground">Property Listings Coming Soon</p>
                </div>
            </div>
        </div>
    );
}
