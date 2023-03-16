import { FC } from "react";
import { Outlet } from "react-router-dom";

const PublicLayout: FC = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default PublicLayout;
