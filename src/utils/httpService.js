import { API_HOST } from '../config/apiService';

export const postRequest = async ({ data }) => {
    const config = {
        method: 'POST',
        headers: {
            'Content-Type': 'text/plain;charset=utf-8'
        },
        body: JSON.stringify(data)
    };
    try {
        const response = await fetch(API_HOST, config);
        return { status: response.status, message: 'Successfully update data' };
    } catch (error) {
        console.error(error, '[postRequest] error');
        return { status: 500, message: error.message };
    }
};
