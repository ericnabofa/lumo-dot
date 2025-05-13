"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ReactiveDotBackground from "./ReactiveDotBackground";

export default function ReactiveDotWrapper() {
  const pathname = usePathname();
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(pathname === "/");
  }, [pathname]);

  if (!show) return null;
  return <ReactiveDotBackground />;
}
