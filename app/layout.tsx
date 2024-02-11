import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ClerkProvider, UserButton } from "@clerk/nextjs";
import { ThemeProvider } from "@/components/provider/theme-provider";
import { ThemeToggleButton } from "@/components/theme-toggle-button";

const font = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Discord",
  description: "Discord Clone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={cn(font.className, "dark:bg-[#313338]")}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
            <div className="flex gap-4 items-center absolute top-4 right-4">
              <UserButton afterSignOutUrl="/" />
              <ThemeToggleButton />
            </div>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
