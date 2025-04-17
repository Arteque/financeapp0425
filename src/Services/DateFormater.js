const DateFormater = (data) => {
    const d = new Date(data)
    const cutomDate = {
        d: d.toLocaleDateString('en-US', {
            day: '2-digit'
        }),
        m: d.toLocaleDateString('en-US', {
            month: 'short'
        }),
        y: d.toLocaleDateString('en-US', {
            year: 'numeric'
        }),
    }

    return `${cutomDate.d} ${cutomDate.m} ${cutomDate.y}`
}
export default DateFormater