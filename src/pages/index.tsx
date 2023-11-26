import Image from "next/image";
import { Inter } from "next/font/google";
import { AppProvider } from "@/components/context/AppProvider";
import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import Layout from "@/components/layout/Layout";
import { IMeta } from "@/components/layout/Meta";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const meta: IMeta = {
    title: "Home",
    description:
      "Welcome to the Home page for developers to discover the latest versions of the latest versions of the app",
  };
  return (
    <Layout meta={meta}>
      <main className="flex-grow">Main content goes here</main>
    </Layout>
  );
}
