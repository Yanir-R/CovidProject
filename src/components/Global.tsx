import React from 'react'

export const Global: React.FC<any> = ({ NewConfirmed, NewDeaths, NewRecovered, TotalConfirmed, TotalDeaths, TotalRecovered }) => {
    // console.log('Global Data:', NewConfirmed, NewDeaths, NewRecovered, TotalConfirmed, TotalDeaths, TotalRecovered)
    return (
        <>
            <ul>
                <h3>NewConfirmed - {NewConfirmed}</h3>
                <h3>NewDeaths - {NewDeaths}</h3>
                <h3>NewRecovered - {NewRecovered}</h3>
                <h3>TotalConfirmed - {TotalConfirmed}</h3>
                <h3>TotalDeaths - {TotalDeaths}</h3>
                <h3>TotalRecovered - {TotalRecovered}</h3>
            </ul>
        </>

    )
}