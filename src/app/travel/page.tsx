import { Plane } from "lucide-react";

export default function TravelPage() {
    return (
        <div className="container py-10">
            <div className="flex items-center gap-4 mb-8">
                <Plane className="h-10 w-10 text-primary" />
                <h1 className="text-4xl font-bold">Tours & Travels</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Placeholder for Travel Packages */}
                <div className="border rounded-lg p-4 h-64 flex items-center justify-center bg-muted/20">
                    <p className="text-muted-foreground">Travel Packages Coming Soon</p>
                </div>
                <div className="border rounded-lg p-4 h-64 flex items-center justify-center bg-muted/20">
                    <p className="text-muted-foreground">Travel Packages Coming Soon</p>
                </div>
            </div>
        </div>
    );
}
