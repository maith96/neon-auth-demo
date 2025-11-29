"use client";

import { useStackApp } from "@stackframe/stack";

export default function SignInPage() {
    const app = useStackApp();

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-50">
            <div className="w-full max-w-md space-y-8 rounded-lg bg-white p-6 shadow-md">
                <div className="text-center">
                    <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900">
                        Sign in to your account
                    </h2>
                </div>
                <div className="mt-8 space-y-6">
                    <button
                        onClick={async () => {
                            await app.signInWithOAuth("google");
                        }}
                        className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                        Sign in with Google
                    </button>
                </div>
            </div>
        </div>
    );
}
