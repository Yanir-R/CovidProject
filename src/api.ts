export const baseCovidApi = 'https://api.covid19api.com/summary'

export const api = {
    getSummaryData: async () => {
        const res = await fetch(`${baseCovidApi}`)
        const data = await res.json()
        // console.log('my API data:', data.Countries)
        return data.Countries
    }
}