import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { I18nProvider } from "@/lib/i18n";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
});

const siteUrl = "https://miguelmaestro.github.io";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Miguel Maestro | Cloud Engineer & Azure Expert",
    template: "%s | Miguel Maestro",
  },
  description:
    "Portfolio profesional de Miguel Maestro Martínez - Cloud Engineer con +2 años de experiencia en Azure, DevOps, Terraform y soluciones cloud enterprise. Experto en infraestructura escalable y automatización.",
  keywords: [
    "Azure Cloud Engineer",
    "DevOps Engineer",
    "Terraform",
    "Infrastructure as Code",
    "Kubernetes",
    "Azure DevOps",
    "Cloud Architecture",
    "CI/CD",
    "Miguel Maestro",
    "Portfolio",
    "AI/ML",
    "Microsoft Azure",
    "Cloud Migration",
  ],
  authors: [
    {
      name: "Miguel Maestro Martínez",
      url: "https://www.linkedin.com/in/miguelmaestromartinez",
    },
  ],
  creator: "Miguel Maestro Martínez",
  publisher: "Miguel Maestro Martínez",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    alternateLocale: ["en_US"],
    url: siteUrl,
    siteName: "Miguel Maestro Portfolio",
    title: "Miguel Maestro | Cloud Engineer & Azure Expert",
    description:
      "Portfolio profesional - Cloud Engineer especializado en Azure, DevOps y arquitecturas cloud enterprise",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Miguel Maestro - Cloud Engineer & Azure Expert",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Miguel Maestro | Cloud Engineer & Azure Expert",
    description:
      "Cloud Engineer especializado en Azure, DevOps y arquitecturas cloud enterprise",
    images: ["/og-image.png"],
    creator: "@miguelmaestro",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/manifest.json",
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Miguel Ángel Maestro Martínez",
    jobTitle: "Cloud Engineer & Azure Specialist",
    url: siteUrl,
    sameAs: [
      "https://www.linkedin.com/in/miguelmaestromartinez",
      "https://github.com/MiguelMaestro",
    ],
    worksFor: {
      "@type": "Organization",
      name: "Kyndryl",
    },
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Universidad Isabel I",
    },
    knowsAbout: [
      "Microsoft Azure",
      "DevOps",
      "Terraform",
      "Infrastructure as Code",
      "Kubernetes",
      "Cloud Architecture",
      "Azure DevOps",
      "CI/CD Pipelines",
      "Artificial Intelligence",
    ],
    description:
      "Cloud Engineer con más de 2 años de experiencia optimizando infraestructuras cloud en Azure. Especializado en escalabilidad, seguridad y automatización DevOps.",
  };

  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        className={cn(
          inter.variable,
          "antialiased min-h-screen bg-background text-foreground"
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          <I18nProvider>{children}</I18nProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
