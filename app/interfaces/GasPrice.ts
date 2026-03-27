export type GasPrice = {
    currency: string;
    name: string;
    gasoline: string;
    midGrade: string;
    premium: string;
    diesel: string;
}

export type GasPriceData = {
    success: boolean;
    result: {
        state: GasPrice;
        cities: GasPrice[];
    }
}