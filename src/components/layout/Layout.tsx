import React, { PropsWithChildren } from "react";
import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import Breadcrumb from "../common/Breadcrumb";
import Meta, { IMeta } from "./Meta";

interface ILayout extends PropsWithChildren {
  children: React.ReactNode;
  title?: string;
  meta: IMeta;
}

const Layout: React.FC<ILayout> = ({ children, title, meta }) => {
  return (
    <>
      <Meta {...meta}/>
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="flex-grow overflow-x-hidden h-[calc(100vh-4rem)] w-[calc(100vw-16rem)]" id="content">
          <Breadcrumb />
          {children}
        </main>
      </div>
    </>
  );
};

export default Layout;
