export function Header() {
  return (
    <div className="px-8 pt-10">
      <p className="text-4xl uppercase tracking-wider font-pixelify text-rose-700">Suraj Kumar</p>

      <nav className="mt-4">
        <ul className="flex gap-10 text-orange-600 font-semibold text-sm uppercase">
          <li className="hover:text-orange-700 cursor-pointer">About</li>
          <li className="hover:text-orange-700 cursor-pointer">Blogs</li>
        </ul>
      </nav>
      <div className="border-b-4 w-full pt-4 border-red-900"></div>
    </div>
  );
}
