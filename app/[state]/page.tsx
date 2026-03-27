"use client";

import {useParams} from "next/navigation";
import useSWR from "swr";
import GasPriceCard from "@/app/components/GasPrices"
import styled from "styled-components";
import { GasPriceData } from "@/app/interfaces/GasPrice";

const GasPriceWrapper = styled.main`
    margin: 0 auto;
    width: 80vw;
    background-color: cadetblue;
`;

const StateName = styled.h1`
    color: black;
    text-align: center;
`;

const CityCardsContainer = styled.div`
    display: flex;
    flex-flow: row wrap;
    gap: 20px;
    justify-content: center;
    border: darkslateblue 5px solid;
    padding: 20px;
`;


export default function PricePage() {

    const params = useParams();
    const stateAbbr = params?.state || "";

    const {data, error} = useSWR<GasPriceData>(
        stateAbbr ? `/api/getStateUsaPrice?state=${stateAbbr}` : null,
        (url: string) =>
            fetch(url)
                .then((res) => res.json())
    );

    if (error) return <div>Failed to load gas prices</div>;
    if (!data) return <div>Loading gas prices...</div>;
    if (!data?.success) return <div>No data available for {stateAbbr}</div>;

   const cities = data.result.cities;

    return (
        <GasPriceWrapper>
            <StateName>{stateAbbr} Gas prices</StateName>
            <CityCardsContainer>
                {
                    cities.map((city, i: number) =>
                        (
                            <GasPriceCard
                                key={i}
                                currency={city.currency}
                                name={city.name}
                                gasoline={city.gasoline}
                                midGrade={city.midGrade}
                                premium={city.premium}
                                diesel={city.diesel}
                            />
                        )
                    )
                }
            </CityCardsContainer>
        </GasPriceWrapper>
    );
}