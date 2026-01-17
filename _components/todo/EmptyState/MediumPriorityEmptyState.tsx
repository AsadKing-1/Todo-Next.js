export function MediumPriorityEmptyState() {
    return (
        <div className="flex items-center gap-3 rounded-xl border border-orange-100 bg-orange-50 px-4 py-3 text-sm text-orange-700">
            <span className="material-symbols-outlined text-orange-500">
                drag_handle
            </span>
            <span>No medium priority tasks</span>
        </div>
    )
}