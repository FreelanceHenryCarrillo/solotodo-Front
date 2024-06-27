"use client";
import { Provider } from "react-redux";
import { AppStore, makeStore } from "@/lib/store";
import { useRef } from "react";
import { ToastContainer } from "react-toastify";

import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./(components)/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const storeRef = useRef<AppStore>();
  if (!storeRef.current) {
    storeRef.current = makeStore();
  }

  return (
    <html lang="en">
      <Provider store={storeRef.current}>
        <body className="overflow-hidden w-[100vw] h-[100vh] ">
          <Navbar />
          {children}
          <ToastContainer />
        </body>
      </Provider>
    </html>
  );
}
