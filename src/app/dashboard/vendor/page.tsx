export default function VendorDashboard() {
    return (
        <div className="container py-10">
            <h1 className="text-3xl font-bold mb-6">Vendor Dashboard</h1>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <div className="rounded-xl border bg-card text-card-foreground shadow-sm p-6">
                    <div className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <h3 className="tracking-tight text-sm font-medium">Total Sales</h3>
                    </div>
                    <div className="text-2xl font-bold">$12,345</div>
                    <p className="text-xs text-muted-foreground">+15% from last month</p>
                </div>
                <div className="rounded-xl border bg-card text-card-foreground shadow-sm p-6">
                    <div className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <h3 className="tracking-tight text-sm font-medium">Active Products</h3>
                    </div>
                    <div className="text-2xl font-bold">45</div>
                </div>
            </div>
        </div>
    );
}
