import { formatDay } from "@/_lib/formatDate"

export function TodayDate() {
    const dateToday = formatDay();
    return (
        <div>
            <h1 className="text-[25px] font-bold">Today</h1>
            <p className="text-[#617589]">{dateToday}</p>
        </div>
    )
}