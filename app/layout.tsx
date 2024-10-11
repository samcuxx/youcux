import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import ThemeToggle from "./components/ThemeToggle";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "YouTube Title & Description Extractor",
  description: "Extract information from YouTube videos easily",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ThemeProvider attribute="class">
        <body
          className={`${inter.className} bg-white dark:bg-gray-900 text-gray-900 dark:text-white`}
        >
          <header className="p-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold">
              YouTube Title & Description Extractor
            </h1>
            <ThemeToggle />
          </header>
          {children}
          <Toaster />
        </body>
      </ThemeProvider>
    </html>
  );
}
