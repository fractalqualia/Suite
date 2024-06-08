import Link from "next/link";

const Sidebar = () => {
  return (
    <aside className="w-64 h-screen bg-gray-800 text-white flex flex-col">
      <div className="p-4 text-lg font-bold">My App</div>
      <nav className="flex flex-col space-y-2 p-4">
        <Link href="/" className="hover:bg-gray-700 p-2 rounded">
          Home
        </Link>
        <Link href="/page1" className="hover:bg-gray-700 p-2 rounded">
          Page 1
        </Link>
        <Link href="/page2" className="hover:bg-gray-700 p-2 rounded">
          Page 2
        </Link>
        <Link href="/page3" className="hover:bg-gray-700 p-2 rounded">
          Page 3
        </Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
