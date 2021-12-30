import React from 'react';

export const Country: React.FC<any> =
    ({ Country, NewConfirmed, NewDeaths, TotalConfirmed, TotalDeaths, TotalRecovered }) => {

        return (
            <>
                <h1>Country Info:</h1>
                <ul>
                    <h3>Country - {Country}</h3>
                    <h3>NewConfirmed - {NewConfirmed}</h3>
                    <h3>TotalDeaths - {TotalDeaths}</h3>
                    <h3>NewDeaths - {NewDeaths}</h3>
                    <h3>TotalConfirmed - {TotalConfirmed}</h3>
                    <h3>TotalRecovered - {TotalRecovered}</h3>
                </ul>
            </>

        )
    }