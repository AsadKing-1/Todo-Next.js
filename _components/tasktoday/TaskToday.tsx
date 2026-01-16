interface TaskTodayProps {
    progress: number,
    completed: number,
    total: number
}

export function TaskToday({ progress, completed, total }: TaskTodayProps) {
    return (
        <div className="bg-white rounded-md p-4 mt-5 flex justify-between items-center transition-all duration-300 hover:scale-[1.01] hover:shadow-md active:translate-y-2 shadow-sm">
            <div className="w-full">
                <div className="flex justify-between items-center-safe">
                    <div>
                        <h1 className="text-primary font-bold font-display text-[14px]">Almost There!</h1>
                        <p className="text-[#617589] text-[14px] font-display">{completed} of {total} tasks completed</p>
                    </div>
                    <div className="px-3 py-1">
                        <span className="material-symbols-outlined text-primary text-xl">insights</span>
                    </div>
                </div>
                <div
                    className="w-full h-2.5 bg-gray-200 rounded-full mt-1 overflow-hidden"
                    style={{ ["--progress" as any]: `${progress}%` }}
                >
                    <div className="h-full bg-primary transition-all duration-300 w-(--progress)" />
                </div>
            </div>
        </div>
    )
}