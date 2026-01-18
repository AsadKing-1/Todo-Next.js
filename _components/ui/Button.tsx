export function AddTaskButton({ openModal }: { openModal: (val: boolean) => void }) {
    return (
        <button
            onClick={() => openModal(true)}
            className="fixed bottom-6 right-6 z-1 bg-primary text-white w-12 h-12 flex items-center justify-center rounded-full shadow-lg active:scale-95 transition"
            type="button">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
            >
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
        </button>
    )
}
