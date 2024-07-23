import NavMenu from "@/components/NavMenu";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-gray-200">
      <NavMenu />
      <div>{children}</div>
    </div>
  );
}
