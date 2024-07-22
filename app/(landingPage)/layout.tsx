import NavMenu from "@/components/NavMenu";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-white">
      <NavMenu />
      <div className="mt-[100px]">{children}</div>
    </div>
  );
}
