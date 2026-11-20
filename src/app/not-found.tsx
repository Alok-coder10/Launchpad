
import Link from "next/link";
import { ArrowLeft, SearchX } from "lucide-react";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-6">
      <div className="max-w-md text-center">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-100">
          <SearchX className="h-8 w-8 text-indigo-600" />
        </div>

        <p className="text-sm font-semibold text-indigo-600">
          ERROR 404
        </p>

        <h1 className="mt-3 text-3xl font-bold text-slate-900">
          Page not found
        </h1>

        <p className="mt-3 text-slate-500">
        Sorry, the page you&apos;re looking for doesn&apos;t exist or may have been moved.
        </p>

        <Link
          href="/dashboard"
          className="mt-8 inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-indigo-700"
        >
          <ArrowLeft size={16} />
          Back to dashboard
        </Link>
      </div>
    </main>
  );
}
