import React from "react";
import Link from "next/link";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import Image from "next/image";
import { Button } from "./ui/button";
import { ArrowLeft, CarFront, Heart, Layout } from "lucide-react";

const Header = async ({ isAdminPage = false }) => {
  const isAdmin = true;
  return (
    <header className="fixed top=0 w-full bg-white/80 backdrop-blur-md z-50 border-b ">
      <nav className="mx-auto px-4 py-4 flex items-center justify-between">
        <Link href={isAdminPage ? "/admin" : "/"} className="flex">
          <Image
            src={
              "data:image/png;base64,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"
            }
            alt="Car logo"
            width={400}
            height={80}
            className="h-15 w-auto object-contain"
          />
          {isAdminPage && (
            <span className="text-xs font-extralight">admin</span>
          )}
        </Link>

        <div>
          {isAdminPage ? (
            <Link href="/saved-cars">
              <Button>
                <ArrowLeft size={18} />
                <span className="hidden md:inline">Back to App</span>
              </Button>
            </Link>
          ) : (
            <SignedIn>
              <Link href="/saved-cars">
                <Button>
                  <CarFront size={18}></CarFront>
                  <span className="hidden md:inline">Saved Cars</span>
                </Button>
              </Link>
              {!isAdmin ? (
                <Link href="/reservations">
                  <Button variant="outline">
                    <Heart size={18} />
                    <span className="hidden md:inline">My Reservations</span>
                  </Button>
                </Link>
              ) : (
                <Link href="/admin">
                  <Button variant="outline">
                    <Layout size={18} />
                    <span className="hidden md:inline">Admin portal</span>
                  </Button>
                </Link>
              )}
            </SignedIn>
          )}


          <SignedOut>
            <SignInButton forceRedirectUrl="/">
              <Button variant="outline">Login</Button>
            </SignInButton>
          </SignedOut>

          <SignedIn>
            <UserButton
            appearance={{
              elements:{
                avatarBox:"w-full h-full",
              },
            }}
            ></UserButton>
          </SignedIn>
        </div>
      </nav>
    </header>
  );
};

export default Header;
