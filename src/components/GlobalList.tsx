import React from 'react'
import { Global } from './Global'

export const GlobalList: React.FC<any> = ({ covidGlobalData }) => {

    return (
        <>
            <h1>Global List</h1>
            <ul>
                <Global
                    NewConfirmed={covidGlobalData.NewConfirmed}
                    NewDeaths={covidGlobalData.NewDeaths}
                    NewRecovered={covidGlobalData.NewRecovered}
                    TotalConfirmed={covidGlobalData.TotalConfirmed}
                    TotalDeaths={covidGlobalData.TotalDeaths}
                    TotalRecovered={covidGlobalData.TotalRecovered}
                />
            </ul>
        </>
    )
}

