import Image from "next/image";
import Link from "next/link";
import logo from "../images/logo.svg"; // Adjust the path as necessary
import ThemeToggle from "./ThemeToggle"; // Import the ThemeToggle component

export default function Navbar() {
  return (
    <nav className="bg-background ">
      <div className="max-w-4xl mx-auto flex justify-between items-center p-4">
        <Link href="/" className="flex items-center">
          <Image src={logo} alt="YouCux Logo" width={40} height={40} />
          <span className="ml-2 text-2xl font-bold text-textPrimary">
            <span className="text-gradient from-accent1 to-accent2">
              YouCux
            </span>
          </span>
        </Link>
        <div className="flex items-center space-x-4">
          {/* <Link href="/" className="text-textPrimary hover:text-accent2">
            Home
          </Link>
          <Link href="/faq" className="text-textPrimary hover:text-accent2">
            FAQ
          </Link>
          <Link href="/about" className="text-textPrimary hover:text-accent2">
            About
          </Link> */}
          <ThemeToggle /> {/* Add the ThemeToggle button here */}
        </div>
      </div>
    </nav>
  );
}
