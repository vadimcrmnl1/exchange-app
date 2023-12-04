import axios from "axios";

const instance = axios.create({
    baseURL: `https://v6.exchangerate-api.com/v6/64c8c92b143be27201d41b40/latest/`,

})

export const exchangeApi = {
    getCurrency(currency: string) {
        return instance.get(currency)
    },
}
