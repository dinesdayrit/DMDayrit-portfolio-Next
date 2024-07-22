import NavMenu from "@/components/NavMenu";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-white">
      <NavMenu />
      <div>{children}</div>
    </div>
  );
}
