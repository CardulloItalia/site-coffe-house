export default function ShopProduct () {
    return(
        <div className="w-full h-fit flex flex-row gap-10 justify-center items-center">
            <div className="flex flex-col relative -rotate-10 gap-1">
                    <p className="w-[200px] -mt-10 text-green text-base">The Bing Pack </p>
                    <div className="w-[347.64px] h-[539.47px] bg-blue-night rounded-3xl z-10"></div>
            </div>
            <div className="flex flex-col gap-4">
                <p className="flex flex-row gap-2 text-5xl">Il <span className="text-yellow"> caffè </span> sempre a casa tua</p>
                <p className="text-green text-base">Ogni pacco racchiude la cura, la selezione e il profumo del nostro coffeehouse</p>
                <p className="text-black text-4xl font-bold">€10,38</p>
                <div className="px-10 py-2 w-fit bg-yellow text-sand rounded-md">
                    Compralo Ora
                </div>
            </div>
        </div>
    );
}