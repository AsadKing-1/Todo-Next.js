export function HighPriorityEmptyState() {
    return (
        <div className="flex items-center gap-3 rounded-xl border border-red-100 bg-red-50 px-4 py-3 text-sm text-red-700">
            <span className="material-symbols-outlined text-red-500">
                priority_high
            </span>
            <span>No high priority tasks for today</span>
        </div>
    )
}