import React from "react";
import Image from "next/image";
import Link from "next/link";
import { DateTime } from "luxon";
import { useRouter } from "next/router";

function Header() {
  const router = useRouter();

  return (
    <nav className="flex items-center px-8 py-4 shadow-md justify-between h-[100px] bg-[#fff]">
      <Link href="/">
        <Image
          src="/qatar.svg"
          alt="logo"
          layout="fixed"
          width={75}
          height={80}
        />
      </Link>
      <div className="flex items-center gap-4">
        <Link href="/news" passHref legacyBehavior>
          <a
            className={`text-[#56042C] text-2xl font-bold hover:border-b-2 hover: border-b-[#56042C] ${
              router.pathname == "/news" ? "active" : ""
            }`}
          >
            News
          </a>
        </Link>
        <Link href="/standings" passHref legacyBehavior>
          <a
            className={`text-[#56042C] text-2xl font-bold hover:border-b-2 hover: border-b-[#56042C] ${
              router.pathname == "/standings" ? "active" : ""
            }`}
          >
            Standings
          </a>
        </Link>
      </div>
      <p className="text-lg text-[#56042C] sm:block hidden">
        <span>&copy; {DateTime.now().year}</span>
      </p>
    </nav>
  );
}

export default Header;
