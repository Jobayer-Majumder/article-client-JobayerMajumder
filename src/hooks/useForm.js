import React from 'react';



const useForm = () => {
    const [formData, setFormData] = React.useState();


    const handleForm = e => {
        const name = e.target.name;
        const value = e.target.value;
        const newData = { ...formData }

        newData[name] = value;

        setFormData(newData);
    }

    return {
        formData,
        setFormData,
        handleForm
    };
};

export default useForm;