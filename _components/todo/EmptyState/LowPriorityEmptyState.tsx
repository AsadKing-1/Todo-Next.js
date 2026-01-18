export function LowPriorityEmptyState() {
    return (
        <div className="relative overflow-hidden rounded-2xl border border-emerald-200/80 bg-linear-to-r from-emerald-50 via-green-50 to-lime-50 px-4 py-3 text-sm text-emerald-800 shadow-sm">
            <div className="pointer-events-none absolute -right-6 -top-6 h-16 w-16 rounded-full bg-emerald-200/40 blur-2xl" />
            <div className="flex items-center gap-3">
                <span className="material-symbols-outlined rounded-full bg-white/70 p-2 text-emerald-500 shadow-sm">
                    low_priority
                </span>
                <div className="flex flex-col">
                    <span className="text-xs font-medium uppercase tracking-wide text-emerald-500">
                        Low priority
                    </span>
                    <span className="font-medium text-emerald-800">
                        No low priority tasks yet
                    </span>
                </div>
            </div>
        </div>
    )
}
