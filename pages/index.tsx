import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-10">
      <header className="mb-8">
        <h1 className="text-3xl font-extrabold">Latest Karthiswarn Blog</h1>

      </header>

      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <article className="flex flex-col border rounded-lg p-5 hover:shadow-md transition-shadow min-h-[500px]">

          {/* Date + Like row */}
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-500">August 18th, 2025</p>
            <div className="flex items-center gap-2">
              <button className="flex h-7 w-7 items-center justify-center rounded-full border border-white bg-black text-white hover:bg-white hover:text-black transition-colors">
                ♥
              </button>
              <span className="text-sm font-medium text-gray-700">12</span>
            </div>
          </div>

          {/* Title + content */}
          <h2 className="text-xl font-semibold mt-2">Next.js 15.5</h2>
          <p className="mt-3 text-gray-700 text-sm leading-relaxed">
            Next.js 15.5 includes Turbopack builds in beta, stable Node.js
            middleware, TypeScript improvements, next lint deprecation, and
            deprecation warnings for Next.js 16.
          </p>

          {/* Button at bottom */}
          <button className="mt-auto flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 text-sm font-medium text-gray-100 transition-colors duration-200 hover:bg-gray-300 hover:text-black cursor-pointer">
            Read More
          </button>
        </article>


        {/* Post 2 */}
        <article className="flex flex-col border rounded-lg p-5 hover:shadow-md transition-shadow min-h-[500px]">

          {/* Date + Like row */}
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-500">August 18th, 2025</p>
            <div className="flex items-center gap-2">
              <button className="flex h-7 w-7 items-center justify-center rounded-full border border-white bg-black text-white hover:bg-white hover:text-black transition-colors">
                ♥
              </button>
              <span className="text-sm font-medium text-gray-700">12</span>
            </div>
          </div>

          {/* Title + content */}
          <h2 className="text-xl font-semibold mt-2">Next.js 15.5</h2>
          <p className="mt-3 text-gray-700 text-sm leading-relaxed">
            Next.js 15.5 includes Turbopack builds in beta, stable Node.js
            middleware, TypeScript improvements, next lint deprecation, and
            deprecation warnings for Next.js 16.
          </p>

          {/* Button at bottom */}
          <button className="mt-auto flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 text-sm font-medium text-gray-100 transition-colors duration-200 hover:bg-gray-300 hover:text-black cursor-pointer">
            Read More
          </button>
        </article>


        {/* Post 3 */}
       <article className="flex flex-col border rounded-lg p-5 hover:shadow-md transition-shadow min-h-[500px]">

          {/* Date + Like row */}
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-500">August 18th, 2025</p>
            <div className="flex items-center gap-2">
              <button className="flex h-7 w-7 items-center justify-center rounded-full border border-white bg-black text-white hover:bg-white hover:text-black transition-colors">
                ♥
              </button>
              <span className="text-sm font-medium text-gray-700">12</span>
            </div>
          </div>

          {/* Title + content */}
          <h2 className="text-xl font-semibold mt-2">Next.js 15.5</h2>
          <p className="mt-3 text-gray-700 text-sm leading-relaxed">
            Next.js 15.5 includes Turbopack builds in beta, stable Node.js
            middleware, TypeScript improvements, next lint deprecation, and
            deprecation warnings for Next.js 16.
          </p>

          {/* Button at bottom */}
          <button className="mt-auto flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 text-sm font-medium text-gray-100 transition-colors duration-200 hover:bg-gray-300 hover:text-black cursor-pointer">
            Read More
          </button>
        </article>


        {/* Post 4 */}
         <article className="flex flex-col border rounded-lg p-5 hover:shadow-md transition-shadow min-h-[500px]">

          {/* Date + Like row */}
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-500">August 18th, 2025</p>
            <div className="flex items-center gap-2">
              <button className="flex h-7 w-7 items-center justify-center rounded-full border border-white bg-black text-white hover:bg-white hover:text-black transition-colors">
                ♥
              </button>
              <span className="text-sm font-medium text-gray-700">12</span>
            </div>
          </div>

          {/* Title + content */}
          <h2 className="text-xl font-semibold mt-2">Next.js 15.5</h2>
          <p className="mt-3 text-gray-700 text-sm leading-relaxed">
            Next.js 15.5 includes Turbopack builds in beta, stable Node.js
            middleware, TypeScript improvements, next lint deprecation, and
            deprecation warnings for Next.js 16.
          </p>

          {/* Button at bottom */}
          <button className="mt-auto flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 text-sm font-medium text-gray-100 transition-colors duration-200 hover:bg-gray-300 hover:text-black cursor-pointer">
            Read More
          </button>
        </article>

      </section>
    </main>
  );
}
