import React from "react";
import { useEffect } from "react";


const axios = require('axios').default;

const Employees = () =>{
    useEffect(() => {
        axios.get('https://reqres.in/api/users')
        .then(function (response) {
            if (response.status === 200 && response != null) {
                const data = response.data
                return data;
            }
            else{
                throw new Error('Empty data')
            }
        })
    }, []);
    return(
        <div>
           
        </div>
    );
}

export default Employees;
