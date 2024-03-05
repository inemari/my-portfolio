import React from "react";
import { Link } from "react-router-dom";
import { m, Variants } from "framer-motion";

interface NavItemProps {
    href: string;
    label: string;
    current: boolean;
    onClick?: () => void;
}

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

const NavItem: React.FC<NavItemProps> = ({ href, label, current, onClick }) => {
    return (
        <m.li
            variants={liVariant}
            className={`w-full text-center group ease-in-out transition ${!current && "hover:scale-110 hover:-translate-y-1 hover:bg-indigo"
                }`}
        >
            <m.div>
                <Link
                    to={href}
                    className={`font-montserrat leading-normal text-lg text-slate-gray ${current ? "font-semibold" : "group-hover:text-black "
                        }`}
                    onClick={onClick}
                >
                    {label}
                </Link>
            </m.div>
        </m.li>
    );
};

export default NavItem;
