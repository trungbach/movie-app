import axios from 'axios';

export const getDataVirusCorona = async() => {
    const url = 'https://api.covid19api.com/summary?fbclid=IwAR1hpPrL03AxQ98knyli7JyY7nzZyHvOuaAfhw0rQAy9f5Ki1W102zguVrg';
    const response = await axios.get(url);
    const result = response.status === 200 && response.data;
    return result;
}