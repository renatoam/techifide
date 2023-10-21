import { Wrapper } from "@/components/atoms";
import { Header } from "@/components/organisms";
import { memo } from "react";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <Wrapper>
      <Header />
      <Outlet />
    </Wrapper>
  )
}

export default memo(Layout)
