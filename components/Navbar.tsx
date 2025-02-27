import Image from "next/image";
import Link from "next/link";

import MobileNav from "./MobileNav";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";

const Navbar = async () => {
  const user = await currentUser();
  return (
    <nav className="flex-between fixed z-50 w-full bg-dark-1 px-6 py-4 lg:px-10">
      <Link href="/" className="flex items-center gap-1">
        <div className="relative w-[200px] h-[50px] flex items-center justify-center">
          <Image
            src="/icons/logo.svg"
            layout="intrinsic"
            width={300}
            height={60}
            objectFit="contain"
            alt="bharatbaithak logo"
            className="bg-transparent"
          />
        </div>
        {/* <p className="text-[26px] font-extrabold text-white max-sm:hidden">
          BharatBaithak
        </p> */}
      </Link>
      {/* {user && <div className="text-white">{`Welcome ${user?.firstName}`}</div>}{" "} */}
      <div className="flex-between gap-5">
        <MobileNav />
        <SignedIn>
          <UserButton />
        </SignedIn>
        <SignedOut>
          <SignInButton />
        </SignedOut>
      </div>
    </nav>
  );
};

export default Navbar;
