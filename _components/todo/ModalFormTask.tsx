"use client"

import { ReactNode } from "react"

interface ModalProps {
    isOpen: boolean
    onClose: (val: boolean) => void
    children: ReactNode
}

export function Modal({ isOpen, onClose, children }: ModalProps) {
    if (!isOpen) return null

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
            onClick={() => onClose(false)}
        >
            <div
                className=" p-6 min-w-[90vw] sm:min-w-130"
                onClick={(e) => e.stopPropagation()}
            >
                {children}
            </div>
        </div>
    )
}
