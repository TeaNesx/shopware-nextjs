"use client";

import type { Metadata } from "next";
import { Geist, Geist_Mono, Manrope, Jost } from "next/font/google";
import store from "./store";
import { Provider } from "react-redux";
import "./globals.css";
import { Navigation, Footer } from "@/components";
import { ReactLenis } from "lenis/react";

const manrope = Manrope({
  variable: "--font-manrope",
});

const jost = Jost({
  variable: "--font-jost",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Provider store={store}>
      <html lang="de">
        <ReactLenis>
          <body className={`${manrope.variable} ${jost.variable} antialiased`}>
            <section id="navigation">
              <Navigation />
            </section>
            <section id="content">{children}</section>
            <section id="footer">
              <Footer />
            </section>
          </body>
        </ReactLenis>
      </html>
    </Provider>
  );
}
