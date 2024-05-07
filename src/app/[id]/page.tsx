"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";

interface Props {
    params: {
        id: string;
    };
}

interface Cat {
    id: string;
    url: string;
    height: number;
    width: number;
}

export default function CatProfile({ params }: Props) {
    const [cat, setCats] = useState<Cat | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get<Cat>(process.env.NEXT_PUBLIC_API_URL + `/${params.id}` ?? "");
            setCats(response.data);
        };
        fetchData();
    }, [])
    return (
        <main>
            <h1 className="text-4xl">Perfil del gato</h1>
            <h4 className="text-xl">{`ID: ${params.id}`}</h4>
            {
             cat !== null && (
                <Image
                src={cat.url}
                height={cat?.height}
                width={cat?.width}
                alt="IMagen de gato"
                />
             )   
            }
        </main>
    );
}