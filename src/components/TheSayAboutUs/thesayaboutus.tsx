import { Marquee } from "../magicui/marquee";

const client = [
    {
        "name": "Luca",
        "comment": "Ottimo caffè e ambiente tranquillo, ci torno sempre volentieri!"
    },
    {
        "name": "Giulia",
        "comment": "Adoro il cappuccino e il personale è super gentile!"
    },
    {
        "name": "Marco",
        "comment": "Posto perfetto per lavorare in pace e gustare un buon espresso."
    },
    {
        "name": "Francesca",
        "comment": "Atmosfera accogliente e dolci deliziosi, consigliatissimo!"
    },
    {
        "name": "Alessandro",
        "comment": "Il miglior caffè della città, semplice e sempre di qualità."
    }
]
const firstRow = client;


export const CardTheSayAboutUs = ({
    name,
    comment
}: {
    name: string;
    comment: string;
}) => {
    return (
        <div className="m-3 p-3 border-2 border-black rounded-md  bg-white w-fit">
            <p>{name}</p>
            <p>{comment}</p>
        </div>
    )
}


export default function TheSayAboutAs() {
    return (
        <div className="mt-10 mb-10">
            <p className="text-center text-2xl text-black">Cosa dicono di noi</p>
            <Marquee pauseOnHover className="[--duration:20s]">
                {firstRow.map((client) => (
                    <CardTheSayAboutUs key={client.name} name={client.name} comment={client.comment} />
                ))}
            </Marquee>
        </div>
    );
}
