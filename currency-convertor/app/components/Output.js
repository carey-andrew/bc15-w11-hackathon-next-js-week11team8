export default function Output({props}){
    // we need to check that this is the correct order that the information is coming to us in.
    const {homeCurrency, holidayCurrency, conversionRate, expectedTotal} = props
    return (
        <>
        <div>This is the Output</div>
        <p> The conversion rate between {homeCurrency} and {holidayCurrency} is {conversionRate}.</p>
        <p> Your expected total is {expectedTotal}.</p>
        </>

    )
}

// default props for testing

Output.defaultprops = {homeCurrency: 1, holidayCurrency: 2, conversionRate: (homeCurrency/holidayCurrency), expectedTotal: (3000)}