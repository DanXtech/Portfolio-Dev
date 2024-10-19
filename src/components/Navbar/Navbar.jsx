// // import React, { useState } from "react";
// import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
// import ResponsiveMenu from "./ResponsiveMenu";
// // import Logo from "../../assets/logo.png";
// import DarkMode from "./DarkMode";
// import { useState } from "react";
// // import { BiPhoneCall } from "react-icons/bi";

// export const Navlinks = [
//     {
//         id: 1,
//         name: "HOME",
//         link: "/",
//     },
//     {
//         id: 2,
//         name: "ABOUT",
//         link: "#about",
//     },
//     {
//         id: 3,
//         name: "Experience",
//         link: "#experience",
//     },
//     {
//         id: 4,
//         name: "PORTFOLIO",
//         link: "#Portfolio",
//     },
//     {
//         id: 5,
//         name: "CONTACT",
//         link: "#contact",
//     },
// ];
// const Navbar = () => {
//     const [showMenu, setShowMenu] = useState(false);

//     const toggleMenu = () => {
//         setShowMenu(!showMenu);
//     };
//     return (
//         <div
//             className="relative  z-10 shadow-md w-full dark:bg-black dark:text-white duration-300
//     "
//         >
//             <div className="container">
//                 <div className="flex justify-between items-center py-4">
//                     <div className="sm:flex items-center gap-3 hidden font-semibold text-gray-500 dark:text-gray-400 group">
//                         <span className="text-2xl">DanX<span className="text-primary animate-pulse group-hover:scale-105 duration-200">tech</span></span>


//                     </div>
//                     <nav className="hidden md:block">
//                         <ul className="flex items-center gap-8">
//                             {Navlinks.map(({ id, name, link }) => (
//                                 <li key={id} className="py-4">
//                                     <a
//                                         href={link}
//                                         className="inline-block text-lg font-semibold  hover:text-primary duration-300"
//                                     >
//                                         {name}
//                                     </a>
//                                 </li>
//                             ))}
//                             {/* DarkMode feature implement */}
//                             <DarkMode />
//                         </ul>
//                     </nav>
//                     {/* Mobile view  */}
//                     <div className="flex items-center gap-4 md:hidden py-4">
//                         <DarkMode />
//                         {/* Mobile Hamburger icon */}
//                         {showMenu ? (
//                             <HiMenuAlt1
//                                 onClick={toggleMenu}
//                                 className=" cursor-pointer transition-all"
//                                 size={30}
//                             />
//                         ) : (
//                             <HiMenuAlt3
//                                 onClick={toggleMenu}
//                                 className="cursor-pointer transition-all"
//                                 size={30}
//                             />
//                         )}
//                     </div>
//                 </div>
//             </div>
//             <ResponsiveMenu showMenu={showMenu} />
//         </div>
//     );
// };

// export default Navbar;



import { useState } from "react";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu";
import DarkMode from "./DarkMode";

export const Navlinks = [
    {
        id: 1,
        name: "HOME",
        link: "/",
    },
    {
        id: 2,
        name: "ABOUT",
        link: "#about",
    },
    {
        id: 3,
        name: "Experience",
        link: "#experience",
    },
    {
        id: 4,
        name: "PORTFOLIO",
        link: "#Portfolio",
    },
    {
        id: 5,
        name: "CONTACT",
        link: "#contact",
    },
];

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <div className="relative z-10 shadow-md w-full dark:bg-black dark:text-white duration-300">
            <div className="container">
                <div className="flex justify-between items-center py-4">
                    <div className="flex items-center gap-3 font-semibold text-gray-500 dark:text-gray-400 group">
                        <span className="text-2xl">🧛‍♀️DanX<span className="text-primary animate-pulse group-hover:scale-105 duration-200">tech</span></span>
                    </div>
                    {/* Desktop view navigation */}
                    <nav className="hidden md:flex items-center gap-8">
                        <ul className="flex items-center gap-8">
                            {Navlinks.map(({ id, name, link }) => (
                                <li key={id} className="py-4">
                                    <a href={link} className="inline-block text-lg font-semibold hover:text-primary duration-300">{name}</a>
                                </li>
                            ))}
                        </ul>
                        {/* DarkMode feature implement */}
                        <DarkMode />
                    </nav>
                    {/* Mobile view navigation */}
                    <div className="md:hidden flex items-center gap-4 py-4">
                        {/* DarkMode feature implement */}
                        <DarkMode />
                        {/* Mobile Hamburger icon */}
                        {showMenu ? (
                            <HiMenuAlt1 onClick={toggleMenu} className="cursor-pointer transition-all" size={30} />
                        ) : (
                            <HiMenuAlt3 onClick={toggleMenu} className="cursor-pointer transition-all" size={30} />
                        )}
                    </div>
                </div>
            </div>
            <ResponsiveMenu showMenu={showMenu} />
        </div>
    );
};

export default Navbar;

