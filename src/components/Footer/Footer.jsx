
// import {
//     FaFacebook,
//     FaInstagram,
//     FaLinkedin,
// } from "react-icons/fa";

export const Navlinks = [
    {
        id: 1,
        name: "Home",
        link: "/",
    },
    {
        id: 2,
        name: "About",
        link: "/#about",
    },
    {
        id: 3,
        name: "Experience",
        link: "#experience",
    },
    {
        id: 4,
        name: "Portfolio",
        link: "#Portfolio",
    },
    {
        id: 5,
        name: "Contact",
        link: "#contact",
    },
];
const Footer = () => {
    const today = new Date()
    const Year = today.getFullYear()

    return (
        <div
            className="py-10 w-full bg-gray-100 dark:bg-dark dark:text-white duration-300
    "
        >
            <div className="container">
                <div className="grid grid-cols-1 sm:grid-cols-3 items-center">
                    <div className="flex items-center justify-center gap-3 font-semibold text-2x1  ">
                        <h3>
                            Dan<span className="text-primary animate-pulse group-hover:scale-105 duration-200">Xtech</span>
                        </h3>
                        {/* <div>
                         
                            <div className="flex items-center gap-3">
                                <a href="#">
                                    <FaInstagram className="text-3xl hover:text-primary duration-300" />
                                </a>
                                <a href="#">
                                    <FaFacebook className="text-3xl hover:text-primary duration-300" />
                                </a>
                                <a href="#">
                                    <FaLinkedin className="text-3xl hover:text-primary duration-300" />
                                </a>
                            </div>
                        </div> */}
                    </div>
                    <div className="sm:block hidden">| 😎At you service 24hour | {Year}
                    </div>
                    <nav className="hidden md:block">
                        <ul className="flex items-center gap-3">
                            {Navlinks.map(({ id, name, link }) => (
                                <li key={id} className="py-4">
                                    <a
                                        href={link}
                                        className="inline-block text-2x1 font-semibold  hover:text-primary py-1 hover:border-primary transition-colors duration-300  "
                                    >
                                        {name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Footer;
