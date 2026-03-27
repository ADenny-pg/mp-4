import styled from "styled-components";
import { GasPrice } from "@/app/interfaces/GasPrice";

const GasPriceCardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid #cba6a6;
    border-radius: 8px;
    padding: 15px;
    background-color: antiquewhite;
`;

export default function GasPriceCard(props: GasPrice){
    return (
        <GasPriceCardWrapper>
            <h3>{props.name}</h3>
            <p>Regular: ${props.gasoline}</p>
            <p>Mid-Grade: ${props.midGrade}</p>
            <p>Premium: ${props.premium}</p>
            <p>Diesel: ${props.diesel}</p>
            <p>Currency: {props.currency}</p>
        </GasPriceCardWrapper>
    );
}