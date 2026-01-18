export function MediumPriorityEmptyState() {
    return (
        <div className="relative overflow-hidden rounded-2xl border border-orange-200/80 bg-linear-to-r from-orange-50 via-amber-50 to-yellow-50 px-4 py-3 text-sm text-orange-800 shadow-sm">
            <div className="pointer-events-none absolute -right-6 -top-6 h-16 w-16 rounded-full bg-orange-200/40 blur-2xl" />
            <div className="flex items-center gap-3">
                <span className="material-symbols-outlined rounded-full bg-white/70 p-2 text-orange-500 shadow-sm">
                    drag_handle
                </span>
                <div className="flex flex-col">
                    <span className="text-xs font-medium uppercase tracking-wide text-orange-500">
                        Medium priority
                    </span>
                    <span className="font-medium text-orange-800">
                        No medium priority tasks
                    </span>
                </div>
            </div>
        </div>
    )
}
