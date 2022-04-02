import Link from "next/link";
import React from "react";
import { useAuth } from "./authProvider";
import Login from "./login";
import Logout from "./logout";

const Header: React.FC = () => {
  const { user, setUser } = useAuth();
  
  return (
    <div className="flex justify-between p-5 bg-usp text-white drop-shadow-lg items-center mb-3 ">
      <Link href="/" passHref>
        <a className="font-semibold text-2xl lg:text-4xl">Fila dos Bandecos</a>
      </Link>

      <div>
        {!user && <Login />}
        {user && <Logout />}
      </div>
    </div>
  );
};

export default Header;
