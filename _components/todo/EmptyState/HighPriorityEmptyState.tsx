export function HighPriorityEmptyState() {
    return (
        <div className="relative overflow-hidden rounded-2xl border border-red-200/80 bg-linear-to-r from-red-50 via-rose-50 to-orange-50 px-4 py-3 text-sm text-red-800 shadow-sm">
            <div className="pointer-events-none absolute -right-6 -top-6 h-16 w-16 rounded-full bg-red-200/40 blur-2xl" />
            <div className="flex items-center gap-3">
                <span className="material-symbols-outlined rounded-full bg-white/70 p-2 text-red-500 shadow-sm">
                    priority_high
                </span>
                <div className="flex flex-col">
                    <span className="text-xs font-medium uppercase tracking-wide text-red-500">
                        High priority
                    </span>
                    <span className="font-medium text-red-800">
                        No high priority tasks for today
                    </span>
                </div>
            </div>
        </div>
    )
}

