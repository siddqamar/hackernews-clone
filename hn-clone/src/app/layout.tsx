import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Hacker News Clone",
  description: "A clone of Hacker News built with Next.js and Sanity",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen">
        <div className="hn-container min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow p-2">
            {children}
          </main>
          <footer className="border-t-2 border-hn-orange mt-4 p-4 text-center text-[8pt]">
            <div className="flex justify-center gap-2 mb-2">
              <span className="text-hn-grey">Guidelines</span>
              <span>|</span>
              <span className="text-hn-grey">FAQ</span>
              <span>|</span>
              <span className="text-hn-grey">Lists</span>
              <span>|</span>
              <span className="text-hn-grey">API</span>
              <span>|</span>
              <span className="text-hn-grey">Security</span>
              <span>|</span>
              <span className="text-hn-grey">Legal</span>
              <span>|</span>
              <span className="text-hn-grey">Apply to YC</span>
              <span>|</span>
              <span className="text-hn-grey">Contact</span>
            </div>
            <div className="mt-4">
              <form className="flex justify-center items-center gap-2">
                <label className="text-hn-grey">Search:</label>
                <input type="text" className="border border-hn-grey px-1 py-0.5" />
              </form>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}