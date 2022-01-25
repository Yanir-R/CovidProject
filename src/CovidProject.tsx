import React, { useEffect, useState } from "react";
import { api } from "./api";
import { CountryList } from "./components/CountryList";
import { GlobalList } from "./components/GlobalList";
import "./App.css";
import { DoughnutChart } from "./components/DoughnutChart";
import { BarChart } from "./components/BarChart";

export const CovidProject: React.FC = () => {
  let [covidCountriesData, setCovidCountriesData] = useState<any>([]);
  let [covidGlobalData, setCovidGlobalData] = useState<any>([]);

  useEffect(() => {
    fetchCovidCountriesData();
  }, []);

  const fetchCovidCountriesData = async () => {
    let dataCountriesResponse = await api.getSummaryData();
    setCovidCountriesData(dataCountriesResponse.Countries);
    setCovidGlobalData(dataCountriesResponse.Global);
    return dataCountriesResponse;
  };

  return (
    <>
      <h1>Covid Data</h1>
      <div className="container">
        <div>
          <CountryList covidCountriesData={covidCountriesData} />
        </div>
        <div>
          <GlobalList covidGlobalData={covidGlobalData} />
          <DoughnutChart covidGlobalData={covidGlobalData} />
        </div>
      </div>
      <div>
        <BarChart covidCountriesData={covidCountriesData} />
      </div>
    </>
  );
};
