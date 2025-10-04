import { Header } from "../../widgets/header";
import { memo } from "react";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="">
      <Header />
      <main className="">
        <Outlet />
      </main>
    </div>
  );
};

export default memo(MainLayout);
