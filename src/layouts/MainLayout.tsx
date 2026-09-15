import { Outlet } from "react-router-dom";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import { Suspense } from "react";
import Skeleton from "../components/ui/Skeleton";

function MainLayout() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Suspense fallback={<Skeleton className="h-8 w-full" />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}

export default MainLayout;
