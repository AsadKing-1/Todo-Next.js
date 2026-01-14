import { ReactNode } from "react";

export default function TodoLayout({ children }: { children: ReactNode }) {
    return (
        <main className="p-5">
            {children}
        </main>
    )
}