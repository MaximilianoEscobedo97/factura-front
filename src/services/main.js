import axios from "axios";

const ApiBase = "http://localhost/factura/public/api";

export const getAllCfdis = async () => {
    return await axios.get(`${ApiBase}/cfdi/list`);
};

export const SendCfdis = async (id) => {
    return await axios.get(`${ApiBase}/cfdi/${id}/email`);
};

export const createCfdi = async (data) => {
    return await axios
        .post(`${ApiBase}/cfdi/create`, data)
        .then((response) => {
            return response;
        })
        .catch((error) => console.log(error));
};

export const createClient = async (data) => {
    return await axios
        .post(`${ApiBase}/clients`, data)
        .then((response) => {
            return response;
        })
        .catch((error) => console.log(error));
};

export const CancelCfdi = async (id) => {
    return await axios
        .patch(`${ApiBase}/cfdi/cancel/${id}`)
        .then((response) => {
            return response;
        })
        .catch((error) => console.log(error));
};

