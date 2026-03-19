"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navbarRef = useRef(null);
  const hamburgerRef = useRef(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (navbarRef.current) {
        navbarRef.current.style.top = window.scrollY > 60 ? "6px" : "16px";
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setMobileOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setMobileOpen(false);
  };

  // Helper function to build correct section links depending on current route
  const getSectionHref = (hash) => pathname === "/" ? hash : `/${hash}`;

  return (
    <header id="navbar" ref={navbarRef}>
      <nav className="nav-inner">
        <Link href="/" className="nav-logo">Syam</Link>
        <ul className="nav-links">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/learn">Learn</Link></li>
          <li><Link href={getSectionHref("#journey")}>Journey</Link></li>
          <li><Link href={getSectionHref("#mission")}>Mission</Link></li>
          <li><Link href={getSectionHref("#gallery")}>Gallery</Link></li>
          <li><Link href={getSectionHref("#news")}>News</Link></li>
        </ul>
        <Link href="/fund" className="btn-fund nav-cta">Fuel my dream</Link>
        <button
          className="hamburger"
          id="hamburger"
          aria-label="Toggle menu"
          onClick={toggleMenu}
          ref={hamburgerRef}
        >
          <span style={mobileOpen ? { transform: "rotate(45deg) translate(5px, 5px)" } : {}}></span>
          <span style={mobileOpen ? { opacity: 0 } : {}}></span>
          <span style={mobileOpen ? { transform: "rotate(-45deg) translate(5px, -5px)" } : {}}></span>
        </button>
      </nav>
      <div className={`nav-mobile${mobileOpen ? " open" : ""}`} id="navMobile">
        <ul>
          <li><Link href="/" onClick={closeMenu}>Home</Link></li>
          <li><Link href="/about" onClick={closeMenu}>About</Link></li>
          <li><Link href="/learn" onClick={closeMenu}>Learn</Link></li>
          <li><Link href={getSectionHref("#journey")} onClick={closeMenu}>Journey</Link></li>
          <li><Link href={getSectionHref("#mission")} onClick={closeMenu}>Mission</Link></li>
          <li><Link href={getSectionHref("#gallery")} onClick={closeMenu}>Gallery</Link></li>
          <li><Link href={getSectionHref("#news")} onClick={closeMenu}>News</Link></li>
          <li><Link href="/fund" className="btn-fund" onClick={closeMenu}>Fuel my dream</Link></li>
        </ul>
      </div>
    </header>
  );
}
