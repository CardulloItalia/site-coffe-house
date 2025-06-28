export default function ShopProduct() {

    return (
        <div className="w-full h-fit flex flex-row gap-10 justify-center items-center">
            <div className="flex flex-col relative -rotate-10 gap-1">
                <p className="w-[200px] -mt-10 text-green text-base">The Bing Pack </p>
                <div className="w-[347.64px] h-[539.47px] border-1 border-black rounded-3xl z-10">
                    <img src="https://images.unsplash.com/photo-1597088268939-ca0a66007a4d?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-full h-full object-cover rounded-3xl" alt="photo1" />
                </div>
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