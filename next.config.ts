import type { NextConfig } from "next";

const securityHeaders = [
  {
    key: "X-Frame-Options", //Empêche l’affichage dans un <iframe> (anti clickjacking)
    value: "DENY",
  },
  {
    key: "Referrer-Policy", //Limite les infos envoyées lors d’un clic sortant
    value: "strict-origin-when-cross-origin",
  },
  {
    key: "X-Content-Type-Options", //	Empêche certains fichiers d’être mal interprétés par le navigateur
    value: "nosniff",
  },
  {
    key: "X-DNS-Prefetch-Control", //Accélère la navigation
    value: "on",
  },
  {
    key: "Strict-Transport-Security", //Forcer HTTPS sur le site (préchargé par les navigateurs)
    value: "max-age=63072000; includeSubDomains; preload",
  },
  {
    key: "Permissions-Policy", //Désactive l’accès aux capteurs inutiles (micro, caméra, etc.)
    value: "camera=(), microphone=(), geolocation=()",
  },
];

const nextConfig: NextConfig = {
  reactStrictMode: true,
  headers: async () => {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
