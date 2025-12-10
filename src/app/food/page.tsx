import { Utensils } from "lucide-react";

export default function FoodPage() {
    return (
        <div className="container py-10">
            <div className="flex items-center gap-4 mb-8">
                <Utensils className="h-10 w-10 text-primary" />
                <h1 className="text-4xl font-bold">Food Delivery</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Placeholder for Restaurant List */}
                <div className="border rounded-lg p-4 h-48 flex items-center justify-center bg-muted/20">
                    <p className="text-muted-foreground">Restaurant Listing Coming Soon</p>
                </div>
                <div className="border rounded-lg p-4 h-48 flex items-center justify-center bg-muted/20">
                    <p className="text-muted-foreground">Restaurant Listing Coming Soon</p>
                </div>
                <div className="border rounded-lg p-4 h-48 flex items-center justify-center bg-muted/20">
                    <p className="text-muted-foreground">Restaurant Listing Coming Soon</p>
                </div>
            </div>
        </div>
    );
}
