import React from 'react';



const useForm = () => {
    const [loginData, setLoginData] = React.useState();


    const handleForm = e => {
        const name = e.target.name;
        const value = e.target.value;
        const newData = { ...loginData }

        newData[name] = value;

        setLoginData(newData);
    }

    return {
        loginData,
        setLoginData,
        handleForm
    };
};

export default useForm;