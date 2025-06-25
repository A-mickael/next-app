# 🚀 next-vitrine

Starter **Next.js + TailwindCSS + shadcn/ui** simple, léger et prêt à l'emploi pour créer rapidement des sites vitrines ou des landing pages.

> ✨ Pensé pour aller vite sans back-end, sans authentification, ni base de données.

---

## 🧰 Technologies utilisées

- [Next.js 14](https://nextjs.org/) (App Router)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/) – composants UI accessibles
- [TypeScript](https://www.typescriptlang.org/)
- [pnpm](https://pnpm.io/) – gestionnaire de paquets rapide

---

## 📦 Installation

```bash
# Cloner le projet
git clone https://github.com/tonpseudo/next-vitrine.git

# Aller dans le dossier
cd next-vitrine

# Installer les dépendances
pnpm install

# Lancer le serveur de développement
pnpm dev
```

## 📁 Structure des dossiers

```
next-vitrine/
├── app/ # Pages et layouts (App Router)
│ ├── layout.tsx
│ └── page.tsx
├── components/ # Composants réutilisables (Navbar, Footer, etc.)
├── public/ # Images, favicon, etc.
├── src/ # Composants shadcn (card, button...)
│ ├── components/ui
│ └── lib/ # Fonctions utilitaires (facultatif)
└── tsconfig.json # Configuration TypeScript
```

## 🧪 Scripts utiles
```
pnpm dev # Lancer le serveur en développement
pnpm build # Générer le build de production
pnpm lint # Linter le projet
pnpm format # Formater le code avec Prettier
```

## 🧱 Composants shadcn/ui inclus

Tu peux facilement ajouter des composants avec :
pnpm dlx shadcn@latest add [nom-du-composant]

Exemples :
pnpm dlx shadcn@latest add button
pnpm dlx shadcn@latest add card
pnpm dlx shadcn@latest add input

## ✅ Inclus dans ce starter

✅ Configuration de base Next.js App Router

✅ Tailwind CSS prêt à l’emploi

✅ Composants shadcn/ui (Button inclus par défaut)

✅ Composant Navbar de base

✅ Responsive par défaut

✅ Config TypeScript et alias @/

✅ SEO prêt à être étendu (metadata dans layout.tsx)

✅ Accessibilité via Radix (utilisé par shadcn/ui)


## 🚧 Non inclus (par design)

❌ Authentification

❌ Base de données

❌ API backend

❌ CMS

Ce starter est pensé pour les sites statiques/vitrines simples. Pour des projets plus complexes, tu peux créer un second starter avec auth, Prisma, etc.


## 💡 Ajouter du SEO et de la sécurité ?

Ce projet peut facilement évoluer :

- Métadonnées SEO (layout.tsx)

- En-têtes HTTP sécurisés via middleware

- Balises Open Graph / Twitter

- Accessibilité avec les composants shadcn


## 📄 Licence

MIT - Libre d'utilisation et de modification.


## 👨‍💻 Auteur

Développé avec ❤️ par Mika
👉 [Portfolio bientôt disponible]
