import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";

import { getProfile, supabase } from "../supabaseClient";

export default function Root() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProfile().then((user) => {
      setUser(user);
      if (!user) {
        console.log("redirect");
        return (window.location.href = "/login");
      }
      setLoading(false);
    });
  }, []);

  return (
    <>
      {loading ? (
        <div className="container" style={{ padding: "50px 0 100px 0" }}>
          <h1 className="text-3xl font-bold text-center text-gray-900">
            Nuggacito
          </h1>
          <p>Cargando...</p>
        </div>
      ) : (
        <>
          <div id="sidebar">
            <div className="flex flex-col w-64 h-screen py-8 bg-white border-r dark:bg-gray-800 dark:border-gray-600">
              <div className="flex flex-col items-center mt-6 -mx-2">
                <img
                  src="https://avatars.githubusercontent.com/u/55534004?v=4"
                  alt="avatar"
                  className="object-cover w-24 h-24 mx-2 rounded-full"
                />
                <h4 className="mx-2 mt-2 font-medium text-gray-800 dark:text-gray-200 hover:underline">
                  {user?.email}
                </h4>
                <p className="mx-2 mt-1 text-sm font-medium text-gray-600 dark:text-gray-400 hover:underline">
                  Nuggacito
                </p>
              </div>
              <div className="flex flex-col justify-between flex-1 mt-6">
                <nav>
                  <a
                    href="#"
                    className="flex items-center px-4 py-2 text-gray-700 bg-gray-200 dark:bg-gray-900 dark:text-gray-200"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6"
                    >
                      <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                      <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                    </svg>
                    Dashboard
                  </a>
                  <a
                    href="#"
                    className="flex items-center px-4 py-2 mt-2 text-gray-600 rounded dark:text-gray-200 hover:bg-gray-700 hover:text-gray-200"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 004.25 22.5h15.5a1.875 1.875 0 001.865-2.071l-1.263-12a1.875 1.875 0 00-1.865-1.679H16.5V6a4.5 4.5 0 10-9 0zM12 3a3 3 0 00-3 3v.75h6V6a3 3 0 00-3-3zm-3 8.25a3 3 0 106 0v-.75a.75.75 0 011.5 0v.75a4.5 4.5 0 11-9 0v-.75a.75.75 0 011.5 0v.75z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    Productos
                  </a>
                  <a
                    href="#"
                    className="flex items-center px-4 py-2 mt-2 text-gray-600 rounded dark:text-gray-200 hover:bg-gray-700 hover:text-gray-200"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6"
                    >
                      <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
                    </svg>
                    Pedidos
                  </a>
                  <a
                    href="#"
                    className="flex items-center px-4 py-2 mt-2 text-gray-600 rounded dark:text-gray-200 hover:bg-gray-700 hover:text-gray-200"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6"
                    >
                      <path d="M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.128l-.001.144a2.25 2.25 0 01-.233.96 10.088 10.088 0 005.06-1.01.75.75 0 00.42-.643 4.875 4.875 0 00-6.957-4.611 8.586 8.586 0 011.71 5.157v.003z" />
                    </svg>
                    Usuarios
                  </a>
                  <button
                    className="button block"
                    type="button"
                    onClick={() => {
                      supabase.auth.signOut();
                      window.location.href = "/login";
                    }}
                  >
                    Sign Out
                  </button>
                </nav>
              </div>
            </div>
          </div>
          <div id="detail">
            <Outlet />
          </div>
        </>
      )}
    </>
  );
}
