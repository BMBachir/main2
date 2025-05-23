import "@/app/globals.css";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import { MainNav } from "./components/main-nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "FormationConnect - Plateforme de mise en relation",
  description:
    "Plateforme innovante de mise en relation entre entreprises, écoles de formation, formateurs et consultants",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.className
        )}
      >
        <div className="container mx-auto ">
          <MainNav />
          <main>{children}</main>
          <footer className="py-6 md:py-0 md:px-8 md:h-24 border-t flex flex-col md:flex-row items-center justify-between">
            <p className="text-sm text-gray-500 text-center md:text-left">
              © 2025 FormationConnect. Tous droits réservés.
            </p>
            <div className="flex items-center gap-4 mt-4 md:mt-0">
              <a href="#" className="text-sm text-gray-500 hover:underline">
                Mentions légales
              </a>
              <a href="#" className="text-sm text-gray-500 hover:underline">
                Politique de confidentialité
              </a>
              <a href="#" className="text-sm text-gray-500 hover:underline">
                CGU
              </a>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
