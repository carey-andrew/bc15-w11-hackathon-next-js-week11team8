

export default async function FetchRequest(holidayCurrency) {

    const response = await fetch(`https://v6.exchangerate-api.com/v6/1422c9c7818ee8bbfbd312ee/pair/GBP/${holidayCurrency}`, {
        headers: {
            Accept: "appliction/json",
        } 
    }        
)

    if (!response.ok) {
        console.error(`status:${response.status}`)
        console.error(`text:${await response.text()}`)
        return
    }
    
 const data = await response.json()
    
    
    const conversionRate = data.conversion_rate
console.log(conversionRate)
    return conversionRate
    
}