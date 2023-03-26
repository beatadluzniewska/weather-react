import React from "react";
import "./Weather.css";

export default function Weather() {
    let weatherData = {
        city: "New York",
        temperature: 19,
        date: "Tuesday 10:00",
        description: "Cloudy",
        imgUrl: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAAjdJREFUeNrtmsGtgzAMhjtCRmAERsgIHYFjjx2BERiBEToCI+TaG2+DbJBnKj8pD1Eaiv8AwpX+C1Ap/hzHjpNLCOFyZl0UgAJQAApAASgABaAAFIACODEA9C/83AypIrUkRwpv5Pib4dsCNp5cAMgIS3rMGPxJw3/t4QDQoEtSt8LwsTpJEFAAAONjNUM4HSIEOO7vJC8Mwa2FkHURZBDSM2KAWu4CwPP5LEgtyZMCy/OzIgKBgGA2BUAGliPDxxreldFM2EU4JAOgwRtSPeHdmj0/Z3z8fcEQasTCiATgEgxMURvNAkR2sOIA2MtBSH60KNbC4dAhAHhBACFDdrBiADj2A0DI7PA4AgB0dihWAaBBXUk92Hhkdqi+BsDGh8ySzg7tGgD9BgC88FrgvgKQIeY/ZgepxXB3m6EFm6bm7ADqQwDggSLUHQVA2KG6P50JQJ+a96UBuC08OwqRerOWGPftkUa7Oc/GrTBKo5b0mEivwzOLAlABjb8v6EY1CXVGgwCAampUqZ5NNP5fuS1aB6w87Zn1PG+XpStOKw3AIro5IONfM0e8EhRsZFxz7EYRACRmgQc0YPMAENrAdJk6UBgAKwojz/W/yQUgXgilARguS5dUd2Yir+foPzSQ7TAfifdLOjZvzhSzQID0A3gmuJTDzIQzRXg4IC9IvFsY68jzWxr/qgvQV2TsRJ1gwMXOIuW+JNWhjtx2DWCDE6fvAOhNUQWgABSAAlAACkABKAAFoABOp1+6Bd0LJ+BorgAAAABJRU5ErkJggg==",
        humidity: 90,
        wind: 10,
        sunrise: "06:00",
        sunset: "17:30",
    };
    return (
        <div className="Weather">
            <div className="card wrapper">
                <form className="form-inline mb-3 mt-1">
                    <div className="form-group mb-2">
                        <input
                            className="search-city"
                            type=" search"
                            for="search"
                            placeholder="search city..."
                        />
                        <button
                            className="search-button"
                            type="submit"
                            value="search"
                        >
                            search
                        </button>
                        <button className="location">
                            <i className="fa-solid fa-location-crosshairs"></i>
                        </button>
                    </div>
                </form>
                <div className="row">
                    <div className="col-4">
                        <img
                            className="weather-today-icon"
                            alt={weatherData.description}
                            src={weatherData.imgUrl}
                        />
                    </div>
                    <div className="col-8">
                        <div className="row">
                            <div className="col-12">
                                <ul>
                                    <li className="time-switch">
                                        Last updated: <span>00:00</span>
                                    </li>
                                    <li>
                                        <span>
                                            {weatherData.date}, July 14th
                                        </span>
                                    </li>
                                    <li className="city-display">
                                        <h4>
                                            <span>{weatherData.city}</span>
                                        </h4>
                                        <span> USA</span>
                                    </li>
                                    <div className="temperature-display">
                                        <li>
                                            <h1>
                                                <span className="temp-now">
                                                    {weatherData.temperature}
                                                </span>
                                            </h1>
                                            <span className="units">
                                                <a href="#" className="active">
                                                    °C{" "}
                                                </a>
                                                <span> | </span>
                                                <a
                                                    href="#"
                                                    className="inactive"
                                                >
                                                    °F
                                                </a>
                                            </span>
                                        </li>
                                    </div>

                                    <li>
                                        <span>{weatherData.description}</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="row weather-details">
                            <div className="col-3">
                                <ul>
                                    <li>
                                        <b>Max Temp. </b>
                                    </li>
                                    <li>
                                        <b>Min. Temp.</b>
                                    </li>
                                    <li>
                                        <b>Wind speed</b>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-3">
                                <ul>
                                    <li>
                                        <span>35</span>°C
                                    </li>
                                    <li>
                                        <span>21</span>°C
                                    </li>
                                    <li>
                                        <span>{weatherData.wind}</span> m/h
                                    </li>
                                </ul>
                            </div>
                            <div className="col-3">
                                <ul>
                                    <li>
                                        <b>Sunrise</b>
                                    </li>
                                    <li>
                                        <b>Sunset</b>
                                    </li>
                                    <li>
                                        <b>Humidity</b>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-3">
                                <ul>
                                    <li>
                                        <span>{weatherData.sunrise}</span>
                                    </li>
                                    <li>
                                        <span>{weatherData.sunset}</span>
                                    </li>
                                    <li>
                                        <span>{weatherData.humidity}</span>%
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row"></div>
            </div>
            <div className="credits">
                <span>Coded by Beata Dluzniewska </span>
                <a
                    href="https://github.com/beatadluzniewska/weather-react"
                    target="_blank"
                >
                    <img
                        width="25px"
                        src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                        target="_blank"
                    />
                </a>
            </div>
        </div>
    );
}
