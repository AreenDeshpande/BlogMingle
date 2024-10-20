import { Link } from 'react-router-dom';
import { Navbar } from 'flowbite-react';
import { TextInput, Button } from 'flowbite-react';
import { AiOutlineSearch } from 'react-icons/ai';

export default function Header() {
  return (
    <Navbar className="border-b-2">
      <Link
        to="/"
        className="self-center whitespace-nowrap font-semibold dark:text-white"
      >
        <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
          Blog
        </span>
        Mingle
      </Link>
      <form>
        <TextInput
          type="text"
          placeholder="search..."
          rightIcon={AiOutlineSearch}
          className="hidden lg:inline"
        />
      </form>
      <Button className="w-12 h-10" color="gray">
        {/* Add any button content or icon here */}
      </Button>
    </Navbar>
  );
}
