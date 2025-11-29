'use client'
import { useUser } from "@stackframe/stack";
import Link from "next/link";

export default function Home() {
  const user = useUser();
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 font-sans">
      <main className="flex w-full max-w-5xl flex-col items-center justify-center gap-12 px-4 py-24 text-center md:px-8">
        <div className="space-y-4">
          <h1 className="text-5xl font-extrabold tracking-tight sm:text-7xl">
            Neon Auth <span className="text-emerald-500">Demo</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-zinc-600 dark:text-zinc-400 sm:text-xl">
            A simple, secure, and modern authentication demonstration using Neon and Stack Auth.
            Ready to handle your users with ease.
          </p>
        </div>

        {user ?
          <div className="flex gap-4">
            <div className="text-xl border border-emerald-500 p-2 rounded">Logged in as {user.displayName}</div>
            <Link href="/handler/sign-out" className="rounded-full bg-emerald-600 px-8 py-3 text-lg font-semibold text-white transition-colors hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 dark:focus:ring-offset-zinc-950">Logout</Link>
          </div>
          :
          <div className="flex flex-col items-center gap-4 sm:flex-row">
            <Link
              href="/handler/signup"
              className="rounded-full bg-emerald-600 px-8 py-3 text-lg font-semibold text-white transition-colors hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 dark:focus:ring-offset-zinc-950"
            >
              Get Started
            </Link>
            <Link
              href="/handler/sign-in"
              className="rounded-full border border-zinc-200 bg-white px-8 py-3 text-lg font-semibold text-zinc-900 transition-colors hover:bg-zinc-50 hover:text-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:ring-offset-2 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:bg-zinc-800 dark:focus:ring-offset-zinc-950"
            >
              Sign In
            </Link>
          </div>
        }

        <div className="mt-16 grid w-full max-w-4xl grid-cols-1 gap-8 sm:grid-cols-3">
          <FeatureCard
            title="Secure by Default"
            description="Built with industry-standard security practices to keep your data safe."
          />
          <FeatureCard
            title="Lightning Fast"
            description="Optimized for performance, ensuring a snappy experience for your users."
          />
          <FeatureCard
            title="Developer Friendly"
            description="Easy to integrate and customize, so you can focus on building your app."
          />
        </div>
      </main>

      <footer className="absolute bottom-4 text-sm text-zinc-500 dark:text-zinc-500">
        © {new Date().getFullYear()} Neon Auth Demo. All rights reserved.
      </footer>
    </div>
  );
}

function FeatureCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900/50">
      <h3 className="mb-2 text-xl font-bold text-zinc-900 dark:text-zinc-100">{title}</h3>
      <p className="text-zinc-600 dark:text-zinc-400">{description}</p>
    </div>
  );
}
