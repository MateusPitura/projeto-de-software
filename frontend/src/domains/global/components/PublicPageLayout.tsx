import type { ReactNode } from "react";
import { Outlet } from "react-router-dom";

export default function PublicPageLayout(): ReactNode {
  return (
    <div className="bg-light-surfaceContainerLowest w-full h-screen flex flex-col">
      <Outlet />
    </div>
  );
}
