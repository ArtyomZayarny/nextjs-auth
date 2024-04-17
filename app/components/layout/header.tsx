import React from "react";
import NavLink from "../ui/NavLink";
import SignInButton from "../ui/SignInButton";
//import ThemeButton from '../ui/ThemeButton'

function Header() {
  return (
    <header className=" p-4">
      <nav className="container flex items-center justify-between">
        <ul className="flex gap-3">
          <li>
            <NavLink href="/">Home</NavLink>
          </li>
          <li>
            <NavLink href="/about">About</NavLink>
          </li>
          <li>
            <NavLink href="/posts">Blog</NavLink>
          </li>
          <li>
            <NavLink href="/guestbook">Guestbook</NavLink>
          </li>
        </ul>
        <div className="flexitems-center gap-4">
          {/* <ThemeButton /> */}
          <SignInButton />
        </div>
      </nav>
    </header>
  );
}

export default Header;
