export default function MainSection() {
    return (
        <div className="w-full flex flex-row justify-center items-center mt-20 mb-30 ">
            <div className="flex flex-col gap-2 -space-x-40 z-20 -mt-30"> 
                <p className="w-[650px] text-7xl text-blue-night">Dal chicco alla <br/> tazza: ogni aroma <br/> racconta una storia.</p>
                <p className="text-lg w-[400px] text-green">Benvenuti da CoffeeHouse: il vostro punto di incontro per caffeina, conversazioni e creatività.</p>
                <button className="px-10 py-2 w-fit bg-yellow text-sand rounded-md">Esplora le novità</button>
            </div>
            <div className="flex flex-row -space-x-50">
                <div className="flex flex-col gap-1">
                    <div className="w-[374px] h-[579px] bg-green rounded-3xl"></div>
                    <p className="text-sm text-green">Caffè selezionato e dolci fatti a mano</p>
                </div>
                <div className="flex flex-col relative rotate-12 gap-1">
                    <p className="absolute right-0 w-[200px] inset-x-32 -mt-10 text-sm text-green">Ogni caffè ha la sua storia. Noi la serviamo con un sorriso</p>
                    <div className="w-[347.64px] h-[539.47px] bg-blue-night rounded-3xl z-10"></div>
                </div>
            </div>
        </div>
    );
}