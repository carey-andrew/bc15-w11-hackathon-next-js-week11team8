export default function Output({ homeCurrency, holidayCurrency, conversionRate, expectedTotal}){
    // we need to check that this is the correct order that the information is coming to us in.
    // const {homeCurrency = 1, holidayCurrency = 42, conversionRate = 1.7, expectedTotal = 588} = props

    return (
        <>
        <div>This is the Output</div>
        <p> The conversion rate between {homeCurrency} and {holidayCurrency} is {conversionRate}.</p>
        <p> Your expected total is {expectedTotal}.</p>
        </>

    )
}

// // default props for testing
Output.defaultProps = {
    homeCurrency: 1,
    holidayCurrency: 2,
    conversionRate: 1.98,
    expectedTotal: 3000
}