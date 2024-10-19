import React from "react";
import { FaUserCircle } from "react-icons/fa";

import { Navlinks } from "./Navbar";

const ResponsiveMenu = ({ showMenu }) => {
    console.log("showMenu", showMenu);
    return (
        <div
            className={`${showMenu ? "left-0" : "-left-[100%]"
                } fixed bottom-0 top-0 z-20 flex h-screen w-[55%] flex-col justify-between bg-white dark:bg-gray-900 dark:text-white px-8 pb-6 pt-16 text-black transition-all duration-200 md:hidden rounded-r-xl shadow-md`}
        >
            <div className="card">
                <div className="flex items-center justify-start gap-3">

                    <div>
                        <span className="text-2xl">DanX<span className="text-primary animate-pulse group-hover:scale-105 duration-200">tech</span></span>
                    </div>
                </div>
                <nav className="mt-12">
                    <ul className="space-y-4 text-xl">
                        {Navlinks.map((data) => (
                            <>
                                <li>
                                    <a href={data.link} className="mb-5 inline-block">
                                        {data.name}
                                    </a>
                                </li>
                            </>
                        ))}
                    </ul>
                </nav>
            </div>
            <div className="footer">
                <h1>
                    My ❤  <a href="https://dilshad-ahmed.github.io/">Portfolio</a>{" "}
                </h1>
            </div>
        </div>
    );
};

export default ResponsiveMenu;
