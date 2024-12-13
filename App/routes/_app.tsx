// routes/_app.tsx
import { type PageProps } from "$fresh/server.ts";
import { Navbar } from "../components/Navbar.tsx";
import { Hero } from "../components/Hero.tsx";
import { Work } from "../components/Work.tsx";

export default function App({ Component }: PageProps) {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>App</title>
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body>
        <Navbar />
        <Hero />
        <Work />
        <Component />
      </body>
    </html>
  );
}