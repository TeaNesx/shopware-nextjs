import React from "react";
import { useGetNavigationQuery } from "@/services/shopwareApi";
import Image from "next/image";

export const Navigation = () => {
  const { data, error, isLoading } = useGetNavigationQuery("main-navigation");

  if (error) return <p>Error fetching navigation</p>;

  const navAction = [
    { icon: "search.svg", href: "", action: "search" },
    { icon: "user.svg", href: "", action: "login" },
    { icon: "heart.svg", href: "wishlist", action: "" },
    { icon: "cart.svg", href: "", action: "checkout" },
  ];

  return (
    <nav className="fixed w-full">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo */}
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <Image
            src="/v2_tuning_city_logo_rund.png"
            height={20}
            width={100}
            alt="Logo Tuning City"
          />
        </a>

        {/* Mobile Menu Toggle */}
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        {/* Navigation Links */}
        <div className="hidden w-full md:flex md:w-auto" id="navbar-default">
          <ul className="flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-3 md:mt-0 items-center text-xl">
            {data?.map((item: any, index: number) => (
              <li key={index}>
                <a
                  href={item.name || "#"}
                  className="block py-2 px-3 text-white"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          <div className="navigation-action grid grid-cols-4 gap-4 md:space-x-3 items-center">
            {navAction.map((item, index) => (
              <div key={index} className="flex flex-col">
                {item.href ? (
                  <a href={item.href} className="flex justify-center">
                    <Image
                      src={`/icons/${item.icon}`}
                      alt={item.action}
                      width={24}
                      height={24}
                    />
                  </a>
                ) : (
                  <button className="flex justify-center">
                    <Image
                      src={`/icons/${item.icon}`}
                      alt={item.icon}
                      width={24}
                      height={24}
                    />
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
