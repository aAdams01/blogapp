import Image from "next/image";
import Hero from "@/components/hero/Hero";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Hero />
      <div>TODO: About</div>
      <div>TODO: Recent book reviews/blog posts</div>
    </main>
  );
}
