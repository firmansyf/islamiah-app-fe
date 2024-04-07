import { Button } from "@/components/ui/button";
import { Toggle } from "@/components/ui/toggle";
import { setOpenSidenav, useLayoutController } from "@/context";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

export default function Sidebar({ routes }: any) {
  const [controller, dispatch] = useLayoutController();
  const { sidenavType, openSidenav } = controller;
  const sidenavTypes = {
    dark: "bg-gradient-to-br from-gray-800 to-gray-900",
    white: "bg-white shadow-sm",
    transparent: "bg-transparent",
  };
  return (
    <>
      <aside
        className={`${sidenavTypes[sidenavType]} ${
          openSidenav ? "translate-x-0" : "-translate-x-80"
        } fixed inset-0 z-50 my-4 ml-4 h-[calc(100vh-32px)] w-72 rounded-xl transition-transform duration-300 xl:translate-x-0 border border-blue-gray-100`}
      >
        <div className={`relative`}>
          <section className="py-4 px-4 text-center flex justify-start items-center gap-5 border-b-2">
            <h1 className="font-semibold text-xl tracking-tight">Islam App</h1>
          </section>

          <Toggle
            className="absolute right-1 top-2 grid rounded-xl xl:hidden"
            onClick={() => setOpenSidenav(dispatch, false)}
          >
            <XMarkIcon strokeWidth={2.5} className="h-5 w-5 text-black" />
          </Toggle>
        </div>
        <div className="my-7 mx-4">
          {routes.map(({ title, pages }: any, key: number) => (
            <ul key={key} className="mb-4 flex flex-col gap-1">
              {title && (
                <li className="mx-3.5 mt-4 mb-2">
                  <span>{title}</span>
                </li>
              )}
              {pages.map(({ icon, name, path }: any) => (
                <li key={name} className="my-1">
                  <Link to={path}>
                    <Button
                      onClick={() => setOpenSidenav(dispatch, false)}
                      size="sm"
                      className="primary flex items-center gap-2"
                    >
                      {icon}
                      <span className="capitalize">{name}</span>
                    </Button>
                  </Link>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </aside>
    </>
  );
}
