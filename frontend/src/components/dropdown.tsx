import Link from "next/link";
import { Menu, Transition } from "@headlessui/react";
import { FiMenu } from "react-icons/fi";
import Login from "./login";
import Logout from "./logout";
import { useAuth } from "./authProvider";

export default function Dropdown() {
  const { user, setUser } = useAuth();

  return (
    <Menu as="div" className="relative inline-block text-right text-3xl">
      <Menu.Button className="p-1 rounded-lg drop-shadow">
        <FiMenu />
      </Menu.Button>

      <Transition
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
        <Menu.Items className="absolute right-0 mt-1 origin-top-right rounded-lg drop-shadow flex flex-col p-2 bg-white text-usp text-lg">
          <Menu.Item>
            <div>
              {!user && <Login />}
              {user && <Logout />}
            </div>
          </Menu.Item>

          <Menu.Item>
            <div>
              <Link href="/about">
                <a>Informações</a>
              </Link>
            </div>
          </Menu.Item>

          <Menu.Item>
            <div>
              {user && (
                <Link href="/submit">
                  <a>Adicionar</a>
                </Link>
              )}
            </div>
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
