'use client'

import { useEffect, useState } from "react";
import { Marquee } from "../magicui/marquee";
import { Client } from "@/types/clientDB";
import { getAllProfileClient } from "@/service/fetchDataClient";
import CardTheSayAboutUs from "./CartClient/cardclient";

export default function TheSayAboutUs() {

    const [profileClient, setProfileClient] = useState<Client[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);


    const loadingClientProfile = async () => {
        try {
            setLoading(true)
            setError(null)

            const data = await getAllProfileClient()

            if (data) {
                setProfileClient(data)
            } else {
                setError("Error loading profile client")
            }
        } catch (err) {
            setError('Error wifi')
        } finally {
            setLoading(false)
        }
    }


    useEffect(() => {
        loadingClientProfile()
    }, [])


    if (loading) {
        return (
            <div className="mt-10 mb-10">
                <p className="text-center text-2xl text-black">Cosa dicono di noi</p>
                <div className="text-center mt-4">
                    <p>Caricamento...</p>
                </div>
            </div>
        )
    }

    if (error) {
        return (
            <div className="mt-10 mb-10">
                <p className="text-center text-2xl text-black">Cosa dicono di noi</p>
                <div className="text-center mt-4 text-red-500">
                    <p>Errore: {error}</p>
                    <button 
                        onClick={loadingClientProfile}
                        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                        Riprova
                    </button>
                </div>
            </div>
        )
    }

    return (
        <div className="mt-10 mb-10">
            <p className="text-center text-2xl text-black">Cosa dicono di noi</p>
            
            {profileClient.length === 0 ? (
                <div className="text-center mt-4">
                    <p>Nessun cliente trovato</p>
                </div>
            ) : (
                <Marquee pauseOnHover className="[--duration:20s]">
                    {profileClient.map((client, index) => (
                        <CardTheSayAboutUs 
                            key={`${client.name}-${index}`} 
                            name={client.name} 
                            comment={client.comment} 
                        />
                    ))}
                </Marquee>
            )}
        </div>
    );
}