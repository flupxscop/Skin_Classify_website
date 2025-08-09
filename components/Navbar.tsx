// "use client";
// import Link from "next/link";
// import { usePathname } from "next/navigation";

// export default function Navbar() {
//   const pathname = usePathname();
//   return (
//     <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-8 py-4 bg-white ">
//       <div className="flex items-center ">
//         <img src="/image/Logo.png" alt="SkinClassify Logo" className="h-15 w-auto" />
//         <span className="font-bold text-sky-700 text-2xl flex gap-2 items-center">
//           SkinClassify
//         </span>
//       </div>
//       <div className="flex items-center gap-6 text-sky-600 text-xl font-bold">
//         <Link
//           href="/"
//           className={pathname === "/" ? "text-sky-700 font-bold text-xl" : "hover:text-sky-700"}
//         >
//         <span className="text-xl">Home</span>
//         </Link>
//         <Link
//           href="/classify"
//           className={pathname.startsWith("/classify") ? "text-sky-700 font-bold text-xl" : "hover:text-sky-700"}
//         >
//        Classify
//         </Link>
        
//       </div>
//     </nav>
//   );
// }
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // ปิดเมนูอัตโนมัติเมื่อเปลี่ยนหน้า / กด ESC
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const isActive = (href: string) =>
    pathname === href || (href !== "/" && pathname.startsWith(href));

  const linkBase =
    "block rounded px-3 py-2 text-base md:text-[1.05rem] font-semibold transition hover:text-sky-700";

  return (
    <nav className="fixed inset-x-0 top-0 z-50 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 shadow-sm">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 md:px-6">
        {/* Logo + Brand */}
        <Link href="/" className="flex items-center gap-2">
          <img
            src="/image/Logo.png"
            alt="SkinClassify Logo"
            className="h-7 w-auto"  // เดิม h-15 -> ใช้ h-7 (Tailwind มี)
          />
          <span className="font-extrabold text-sky-700 text-xl">SkinClassify</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-2 md:flex">
          <Link
            href="/"
            className={`${linkBase} ${isActive("/") ? "text-sky-700" : "text-sky-600"}`}
          >
            Home
          </Link>
          <Link
            href="/classify"
            className={`${linkBase} ${isActive("/classify") ? "text-sky-700" : "text-sky-600"}`}
          >
            Classify
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-sky-500"
        >
          {open ? (
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height] duration-300 ${
          open ? "max-h-40" : "max-h-0"
        }`}
      >
        <div className="mx-auto max-w-6xl px-4 pb-3">
          <Link
            href="/"
            className={`${linkBase} ${isActive("/") ? "text-sky-700" : "text-sky-600"}`}
            onClick={() => setOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/classify"
            className={`${linkBase} ${isActive("/classify") ? "text-sky-700" : "text-sky-600"}`}
            onClick={() => setOpen(false)}
          >
            Classify
          </Link>
        </div>
      </div>
    </nav>
  );
}
