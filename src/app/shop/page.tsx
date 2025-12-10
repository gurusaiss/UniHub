import { ShoppingBag } from "lucide-react";

export default function ShopPage() {
    return (
        <div className="container py-10">
            <div className="flex items-center gap-4 mb-8">
                <ShoppingBag className="h-10 w-10 text-primary" />
                <h1 className="text-4xl font-bold">E-Commerce</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {/* Placeholder for Product List */}
                <div className="border rounded-lg p-4 h-64 flex items-center justify-center bg-muted/20">
                    <p className="text-muted-foreground">Product Catalog Coming Soon</p>
                </div>
                <div className="border rounded-lg p-4 h-64 flex items-center justify-center bg-muted/20">
                    <p className="text-muted-foreground">Product Catalog Coming Soon</p>
                </div>
                <div className="border rounded-lg p-4 h-64 flex items-center justify-center bg-muted/20">
                    <p className="text-muted-foreground">Product Catalog Coming Soon</p>
                </div>
                <div className="border rounded-lg p-4 h-64 flex items-center justify-center bg-muted/20">
                    <p className="text-muted-foreground">Product Catalog Coming Soon</p>
                </div>
            </div>
        </div>
    );
}
