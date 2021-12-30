export const baseCovidSummaryApi = 'https://api.covid19api.com/summary'
export const baseCovidApi = 'https://api.covid19api.com/summary'


export const api = {
    getSummaryData: async () => {
        const res = await fetch(`${baseCovidSummaryApi}`)
        const data = await res.json()
        // console.log('my API data:', data)
        return data
    },
}

// return {countries: data.Countries, global: data.Global}