
import {NextResponse} from "next/server";

export const dynamic = "force-dynamic";

const GAS_PRICE_API_KEY= process.env.API_KEY;

export async function GET(request: Request): Promise<NextResponse>{

    const {searchParams} = new URL(request.url);

    const state = searchParams.get("state");

    console.log("State:", state);
    console.log("API Key:", GAS_PRICE_API_KEY ? `${GAS_PRICE_API_KEY.substring(0, 5)}...` : "MISSING");

    if(!state){
        return NextResponse.json({error: "No [state] provided"}, {status:400});
    }

    const res = await fetch(
        `https://gas-price.p.rapidapi.com/stateUsaPrice?state=${state}`,
        {
            headers: {
                'x-rapidapi-key': GAS_PRICE_API_KEY,
                'x-rapidapi-host': 'gas-price.p.rapidapi.com',
                'Content-Type': 'application/json'
            } as HeadersInit
        }
    );

    if(res.status === 429) {
        return NextResponse.json({error: "API Limit reached"}, {status: 429})
    }

    if(res.status !== 200){
        return NextResponse.json({error: "Failed to fetch data"}, {status:500});
    }


    const data = await res.json();

    return NextResponse.json(data);
}



