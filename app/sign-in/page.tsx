"use client";

import { useStackApp } from "@stackframe/stack";

export default function SignInPage() {
    const app = useStackApp();

    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 font-sans">
            <div className="w-full max-w-md space-y-8 rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm transition-shadow hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900/50">
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                        Sign in to <span className="text-emerald-500">Neon Auth</span>
                    </h2>
                    <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                        Welcome back! Please sign in to continue.
                    </p>
                </div>
                <div className="mt-8 space-y-6">
                    <button
                        onClick={async () => {
                            await app.signInWithOAuth("google");
                        }}
                        className="flex w-full justify-center rounded-full bg-emerald-600 px-8 py-3 text-lg font-semibold text-white transition-colors hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 dark:focus:ring-offset-zinc-950"
                    >
                        Sign in with Google
                    </button>
                </div>
            </div>
        </div>
    );
}
