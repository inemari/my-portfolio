import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { m, Variants } from "framer-motion";
import NavToggle from "./NavToggle";

import Logo from "../Logo";
const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // const icon = isMenuOpen
    //     ? "M6 18 18 6M6 6l12 12" // Hamburger icon
    //     : "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"; // Close icon

    const location = useLocation();

    interface NavLink {
        href: string;
        label: string;
        current: boolean;
    }

    const generateNavLink = (href: string, label: string): NavLink => {
        return {
            href: href,
            label: label,
            current: href === location.pathname,
        };
    };

    const navLinks: NavLink[] = [
        generateNavLink("/", "Home"),
        generateNavLink("/Portfolio", "Portfolio"),
        generateNavLink("/Contact", "Contact"),
    ];

    const toggleMenu = () => {
        setIsMenuOpen(isMenuOpen ? false : true);
    };

    const mobileMenuVariant: Variants = {
        opened: {
            y: "0%",
            transition: {
                // delay: 0.15,
                duration: 1.1,
                ease: [0.74, 0, 0.19, 1.02],
            },
        },
        closed: {
            y: "-100%",
            transition: {
                delay: 0.35,
                duration: 0.50,
                ease: [0.74, 0, 0.19, 1.02],
            },
        },
    };

    // const fadeInVariant: Variants = {
    //     opened: {
    //         opacity: 1,
    //         transition: {
    //             delay: 1.2,
    //         },
    //     },
    //     closed: { opacity: 0 },
    // };

    const ulVariant: Variants = {
        opened: {
            transition: {
                delayChildren: 1,
                staggerChildren: 0.18,
            },
        },
        closed: {
            transition: {
                staggerChildren: 0.06,
                staggerDirection: -1,
            },
        },
    };

    const liVariant: Variants = {
        opened: {
            opacity: 1,
            y: "0%",
            transition: {
                duration: 0.65,
                ease: "easeOut",
            },
        },
        closed: {
            opacity: 0,
            y: "100%",
            transition: {
                duration: 0.25,
                ease: "easeInOut",
            },
        },
    };


    return (
        <m.div
            className="flex w-screen h-[90px] items-center md:justify-start justify-between shadow-sm px-3 fixed top-0  "
            initial="closed"
            animate={isMenuOpen ? "opened" : "closed"}
        >
            {/* Logo*/}
            <div className="w-1/3 h-full items-start  justify-start  z-10 ">
                <Logo />
            </div>

            {/* Menu on large screen */}
            <ul className="flex justify-center items-center gap-16 max-lg:hidden w-1/3">
                {navLinks.map((item) => (
                    <li key={item.label}>
                        <Link
                            to={item.href}
                            className={`font-montserrat leading-normal text-lg text-slate-gray text-nowrap ${item.current ? "font-bold" : ""
                                }`}
                        >
                            {item.label}
                        </Link>
                    </li>
                ))}
            </ul>

            {/* Menu items on mobile screen */}
            {
                isMenuOpen && (
                    <m.div
                        variants={mobileMenuVariant}
                        className="fixed top-20 right-0 left-0 h-fit lg:bottom-auto -z-30"
                    >
                        <m.ul className="md:hidden flex flex-col items-center bg-black justify-center h-full gap-3 p-3" variants={ulVariant}>
                            {navLinks.map((item) => (
                                <m.li
                                    key={item.label}
                                    className={`w-full text-center group ease-in-out transition ${!item.current && "hover:scale-110 hover:-translate-y-1 hover:bg-indigo"
                                        }`}>
                                    <Link
                                        to={item.href}
                                        className={`font-montserrat leading-normal text-lg text-slate-gray ${item.current ? "font-semibold" : "group-hover:text-black "}`}
                                        onClick={toggleMenu}>
                                        <m.div variants={liVariant}>
                                            {item.label}
                                        </m.div>
                                    </Link>
                                </m.li>
                            ))}
                        </m.ul>
                    </m.div>
                )
            }


            <NavToggle toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />


        </m.div >
    );
};

export default Navbar;
