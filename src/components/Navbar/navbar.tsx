'use client'

import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const pathName = usePathname();

    const links = [
        { href: "", label: "House Menù" },
        { href: "", label: "Store House" },
        { href: "", label: "Contattaci" }
    ]
    return (
        <div className="w-full flex flex-row  gap-60 justify-center items-center">
            <div>
                <Image
                    src="/assets/logo.png"
                    alt="logo"
                    width={200}
                    height={200}
                />
            </div>
            <div>
                <ul className="w-full flex flex-row items-center justify-beetween gap-10">
                    {links.map((link) => (
                        <li key={`${link.href}${link.label}`} className="text-black">
                            <a href={link.href} className={` ${pathName == link.href ? 'text-yellow font-semibold' : 'text-black font-normal'}`}>
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <button className="py-2 px-10 bg-yellow text-sand rounded-sm">
                    Accedi
                </button>
            </div>
        </div>
    );
}