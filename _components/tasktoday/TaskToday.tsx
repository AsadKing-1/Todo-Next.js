interface TaskTodayProps {
    progress: number,
    completed: number,
    total: number
}

export function TaskToday({ progress, completed, total }: TaskTodayProps) {
    return (
        <div className="group relative mt-5 overflow-hidden rounded-xl border border-primary/10 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(100%_60%_at_100%_0%,rgba(59,130,246,0.08),transparent_60%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="relative flex w-full items-start justify-between gap-4">
                <div className="w-full">
                    <div className="flex items-start justify-between">
                        <div>
                            <p className="text-xs font-semibold uppercase tracking-wide text-primary/70">Today</p>
                            <h1 className="mt-1 text-[15px] font-bold text-primary">Almost There!</h1>
                            <p className="mt-1 text-[13px] text-[#617589]">{completed} of {total} tasks completed</p>
                        </div>
                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary">
                            <span className="material-symbols-outlined text-[20px]">insights</span>
                        </div>
                    </div>
                    <div className="mt-1">
                        <div className="flex items-center justify-between text-[12px] text-[#617589]">
                            <span>Progress</span>
                            <span className="font-semibold text-primary">{progress}%</span>
                        </div>
                        <div
                            className="mt-2 h-2.5 w-full overflow-hidden rounded-full bg-gray-100"
                            style={{ ["--progress" as any]: `${progress}%` }}
                        >
                            <div className="h-full w-(--progress) rounded-full bg-linear-to-r from-primary/70 via-primary to-primary/90 transition-all duration-500" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
