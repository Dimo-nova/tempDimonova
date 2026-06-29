"use client";
import { usePathname, Link } from "@/lib/routing";
import { s } from "@/lib/style";

export default function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  const pathname = usePathname();
  const active = href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(href + "/");
  return (
    <Link href={href} style={s(`color:${active ? "#1F1814" : "#8A7E70"};transition:color .15s`)}>
      {children}
    </Link>
  );
}
