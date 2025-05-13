"use client";
import dynamic from "next/dynamic";

const LumoLandingPage = dynamic(() => import("@/components/LumoLandingPage"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="h-screen w-screen relative overflow-hidden">
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <LumoLandingPage />
      </div>
    </main>
  );
}
