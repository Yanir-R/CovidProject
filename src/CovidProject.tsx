import React, { useEffect, useState } from 'react'
import { api } from './api'
import { CountryList } from './components/CountryList'

export const CovidProject: React.FC = () => {
    let [covidData, setCovidData] = useState<any>([])

    useEffect(() => {
        fetchCovidData()
    }, [])

    const fetchCovidData = async () => {
        let dataResponse = await api.getSummaryData()
        setCovidData(dataResponse)
        // console.log('Country Data:', dataResponse)
        return dataResponse
    }


    return (
        <>
            <div>
                <h1>covid Data</h1>
            </div>
            <div>
                <CountryList covidData={covidData} />
            </div>
        </>
    )
}




