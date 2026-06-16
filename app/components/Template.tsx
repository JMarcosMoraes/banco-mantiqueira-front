"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import logo from "../assets/Logo_marca_02.png";

type Props = { children?: React.ReactNode };

export default function Template({ children }: Props) {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col">
      <header className="fixed top-0 left-0 right-0 z-30 flex items-center justify-center px-4 py-3 bg-transparent backdrop-blur-md">
        <div className="flex items-center justify-between w-full max-w-5xl">
          <div className="w-12" />
          <Image src={logo} alt="Banco Mantiqueira" width={72} height={72} />
          <button
            onClick={() => router.push("/profile")}
            aria-label="Perfil do usuário"
            className="h-12 w-12 rounded-full overflow-hidden border border-white/30 shadow-sm bg-slate-100"
          >
            <span className="flex h-full w-full items-center justify-center text-sm font-semibold text-slate-700">
              U
            </span>
          </button>
        </div>
      </header>

      <main className="flex-1 pt-28 pb-20">{children}</main>

      <footer className="fixed bottom-0 left-0 right-0 bg-white border-t shadow px-4 py-3 flex justify-center gap-6 items-center z-20">
        <button
          onClick={() => router.push("/dashboard")}
          aria-label="Home"
          className="p-2 rounded-md hover:bg-gray-100"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1h-5v-6H9v6H4a1 1 0 01-1-1V9.5z" />
          </svg>
        </button>

        <button
          onClick={() => router.push("/history")}
          aria-label="Historico"
          className="p-2 rounded-md hover:bg-gray-100"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </button>

        <button
          onClick={() => router.push("/profile")}
          aria-label="Perfil"
          className="p-2 rounded-md hover:bg-gray-100"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A9 9 0 1118.88 6.196 9 9 0 015.12 17.804zM15 11a3 3 0 10-6 0 3 3 0 006 0z" />
          </svg>
        </button>
      </footer>
    </div>
  );
}
