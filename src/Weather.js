import React from "react";
import axios from "axios";
import { Puff } from "react-loader-spinner";

export default function Weather(props) {
    function handleResponse(response) {
        alert(
            `The weather in ${response.data.name} is ${response.data.main.temp}°C`
        );
    }
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=f81614abe2395d5dfecd45b9298041de&units=metric`;
    axios.get(url).then(handleResponse);
    return (
        <Puff
            height="80"
            width="80"
            radius={1}
            color="#4fa94d"
            ariaLabel="puff-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
        />
    );
}
