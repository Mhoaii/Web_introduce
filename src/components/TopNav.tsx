import Link from "next/link";

const NavLink = ({ href, label }: { href: string; label: string }) => (
  <Link
    href={href}
    className="rounded-xl px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 hover:text-slate-900"
  >
    {label}
  </Link>
);

export default function TopNav() {
  return (
    <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/80 backdrop-blur">
      <div className="container-page flex items-center justify-between py-3">
        <Link href="/" className="flex items-center gap-2">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-slate-900 text-white">
            TD
          </span>
          <span className="font-semibold">(Trễ Deadline)^-1</span>
        </Link>

        <nav className="flex items-center gap-1">
          <NavLink href="/" label="Giới thiệu" />
          <NavLink href="/members" label="Thành viên" />
          <NavLink href="/games" label="Game của nhóm" />
        </nav>
      </div>
    </header>
  );
}
