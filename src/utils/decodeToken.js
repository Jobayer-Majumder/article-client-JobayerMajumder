import jwt_decode from 'jwt-decode';

export const decodeToken = async (token) => {

    try {
        const decoded = jwt_decode(token);

        return decoded;
    } catch (error) {
        console.log(error)
    }
};