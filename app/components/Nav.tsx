"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Nav.module.css";

const items = [
  { href: "/#work", label: "Work", match: "/work" },
  { href: "/about", label: "About", match: "/about" },
  { href: "/blog", label: "Writing", match: "/blog" },
  { href: "/#contact", label: "Contact", match: "__contact" },
];

export default function Nav() {
  const pathname = usePathname();
  // On home the hero introduces him by name two lines below — showing the
  // wordmark there is duplication. Everywhere else it is the only
  // identification on the page, and the only route home.
  const isHome = pathname === "/";

  return (
    <nav className={styles.bar}>
      <div className={`container ${styles.inner}`}>
        {isHome ? (
          <span className={styles.spacer} aria-hidden="true" />
        ) : (
          <Link href="/" className={styles.mark}>
            Bhagwandas Yadav
          </Link>
        )}
        {items.map((it) => {
          const active =
            it.match !== "__contact" &&
            (pathname === it.match || pathname.startsWith(it.match + "/"));
          return (
            <Link
              key={it.label}
              href={it.href}
              className={`${styles.link} ${active ? styles.active : ""}`}
              aria-current={active ? "page" : undefined}
            >
              {it.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
