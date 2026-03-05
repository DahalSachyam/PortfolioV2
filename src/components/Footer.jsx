import { userName } from "../data";

export default function Footer() {
  return (
    <footer className="py-8 bg-gray-950 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} {userName}. Built with React &amp; Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}