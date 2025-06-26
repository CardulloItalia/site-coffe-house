import Image from "next/image";

export default function Footer() {
    return (
        <div className="w-full p-10 flex flex-col gap-10 bg-green">
            <div>
                <Image
                    src="/assets/logoEnd.png"
                    alt="logo"
                    width={200}
                    height={200}
                />
            </div>
            <div className="flex flex-row gap-10">
                <div>
                    <p className="text-white">Contattaci</p>
                    <p>caffeHouse@gmail.com</p>
                    <p>+39 25187928384</p>
                    <p>Via coniglio bianco ,19</p>
                </div>

                <div>
                    <p className="text-white">Aperture</p>
                    <p>Tutti i giorni dalle 8.00 - 20.00</p>
                </div>
            </div>
        </div>
    );
}