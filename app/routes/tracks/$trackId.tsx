import { Button, Table } from "@mantine/core";
import { useClipboard } from "@mantine/hooks";
import type { Click } from "@prisma/client";
import type { LoaderFunction } from'@vercel/remix';
//import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { db } from "~/utils/db.server";

console.log('made it to $trackId.tsx')
type LoaderData = {
    track: {
        trackId: string;
        Clicks: Click[];
    };
};
export const loader: LoaderFunction = async ({params}) =>{
    const track = await db.track.findUnique({
        where: {trackId: params.trackId},
        select:{
            trackId: true,
            Clicks: {
                orderBy: [{
                    createdAt: "desc",
                }]
            }
        }
    });

    if(!track){
        throw new Error(`track $(params.trackId) does not exist`)
    };

    const data: LoaderData = { track };

    return json(data);  
};

export default function TrackRoute(){
    const data = useLoaderData<LoaderData>();
    const clipboard = useClipboard({timeout: 500})
    console.log("http://localhost:3000/"+data.track.trackId)

const rows = data.track.Clicks.map((click) =>{

    return(
        <tr key={click.id}>
            <td>{new Date(click.createdAt).toLocaleDateString([],
                 {hour12: true})}</td>
            <td>{click.createdAt}</td>
            <td>{click.ip}</td>
        </tr>
    )
})

    return( 
    <div>
        <Button color={clipboard.copied ? 'teal' : 'blue'} 
        onClick={() => clipboard.copy((window.location.origin)+'/'+(data.track.trackId))}
        >
            {clipboard.copied ? 'copied' : 'Copy'}
        </Button>
        <Table>
        <thead>
            <tr>
                <td>Data</td>
                <td>User Agent</td>
                <td>Ip</td>
            </tr>
        </thead>
        <tbody>{rows}</tbody>
    </Table>
    
    <a href={'/'+(data.track.trackId)} target="new">
        TEST
    </a>
    </div>)
};
