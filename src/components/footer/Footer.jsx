import Insta from "@/icons/insta.svg";
import Goodreads from "@/icons/goodreads.svg";
import Github from "@/icons/github.svg";

export default function Footer() {
  return (
  <footer className="bg-white shadow mt-4 dark:bg-gray-800">
    <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <ul className="flex flex-wrap items-center md:mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0 justify-center ml-auto mr-auto">
        <li className="w-8 h-8 mr-4 md:my-2">
          <a href="#" className="hover:underline me-4 md:me-6" aria-label="link to Instagram account"><Insta /></a>
        </li>
        <li className="w-8 h-8 mr-4 md:my-2">
          <a href="#" className="hover:underline me-4 md:me-6" aria-label="link to Github account"><Github /></a>
        </li>
        <li className="w-8 h-8 md:my-2">
          <a href="#" className="hover:underline me-4 md:me-6" aria-label="link to Goodreads account"><Goodreads /></a>
        </li>
      </ul>
    </div>
  </footer>
  );
}