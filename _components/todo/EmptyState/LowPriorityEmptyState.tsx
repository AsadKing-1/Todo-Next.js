export function LowPriorityEmptyState() {
    return (
        <div className="flex items-center gap-3 rounded-xl border border-green-100 bg-green-50 px-4 py-3 text-sm text-green-700">
            <span className="material-symbols-outlined text-green-500">
                low_priority
            </span>
            <span>No low priority tasks yet</span>
        </div>

    )
}