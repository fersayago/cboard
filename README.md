# CBoard

This is an application to create a collaborative whiteboard to create ideas. Made with Nextjs, React,  and Tailwind (2024).

Features:

- 🛠️ Whiteboard from scratch
- 🧰 Toolbar with Text, Shapes, Sticky Notes & Pencil
- 🪄 Layering functionality
- 🎨 Coloring system
- ↩️ Undo & Redo functionality
- ⌨️ Keyboard shortcuts
- 🤝 Real-time collaboration 
- 💾 Real-time database 
- 🔐 Auth, organisations and invites 
- ⭐️ Favoriting functionality
- 🌐 Next.js 14 framework
- 💅 TailwindCSS & ShadcnUI styling

### Prerequisites

**Node version 14.x**

### Install packages

```shell
npm i
```

### Setup .env file


```js
CONVEX_DEPLOYMENT=
NEXT_PUBLIC_CONVEX_URL=
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
LIVEBLOCKS_SECRET_KEY=
NEXT_PRIVATE_LIVEBLOCKS_API_KEY=
```

### Setup Convex

```shell
npx convex dev

```

### Start the app

```shell
npm run dev
```