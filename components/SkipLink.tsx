"use client";

export default function SkipLink() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-6 focus:py-3 focus:bg-azure-600 focus:text-white focus:rounded-lg focus:shadow-2xl focus:outline-none focus:ring-4 focus:ring-azure-400 transition-all"
    >
      Saltar al contenido principal
    </a>
  );
}
