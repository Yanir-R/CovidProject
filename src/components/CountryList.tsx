import React from 'react';
import { Country } from './Country';

export const CountryList: React.FC<any> = ({ covidData }) => {

    return (
        <>
            <h1>Country List:</h1>

            {covidData.map((covidInfo: any, index: any) => (
                <ul key={index}>
                    <Country
                        Country={covidInfo.Country}
                        NewConfirmed={covidInfo.NewConfirmed}
                        TotalConfirmed={covidInfo.TotalConfirmed}
                        NewDeaths={covidInfo.NewDeaths}
                        TotalDeaths={covidInfo.TotalDeaths}
                        TotalRecovered={covidInfo.TotalRecovered}
                    />
                </ul>
            ))}

        </>

    )
}
