export default function CardTheSayAboutUs  ({
    name,
    comment
}: {
    name: string;
    comment: string;
}) {

    return (
        <div className="m-3 p-3 border-2 border-black rounded-md  bg-white w-fit">
            <p>{name}</p>
            <p>{comment}</p>
        </div>
    )
}
