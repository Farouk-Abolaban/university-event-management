import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  SignInButton,
} from "@clerk/nextjs";
import { Toaster } from "sonner";
import CustomUserDropdown from "@/app/CustomUserDropdown"; //user icon dropdown

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "EventU",
  description: "University Event Management System",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable} bg-gray-50`}>
          <Toaster /> {/* Ensures notifications work */}

          {/* Navigation */}
          <nav className="p-4 bg-white shadow-md flex justify-between items-center">
            <h1 className="text-xl font-semibold text-red-600">EventU</h1>
            <div>
              <SignedOut>
                <SignInButton
                  mode="modal"
                  afterSignInUrl="/home"
                  className="px-4 py-2 bg-red-600 text-white font-medium rounded-md hover:bg-red-700 transition"
                />
              </SignedOut>
              <SignedIn>
                <CustomUserDropdown />
              </SignedIn>
            </div>
          </nav>

          {/* Page Content */}
          <main className="min-h-screen">{children}</main>

          {/* Footer */}
          <footer className="bg-red-50 py-6 mt-10 text-center text-gray-600">
            <p>Made by Farouk, Husam, Franklyn, Jeremy</p>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
