// Code your solution here:
function driversWithRevenueOver(drivers, amount) {
    const out = drivers.filter( function(driver) { return driver.revenue > amount })
    return out
}

function driverNamesWithRevenueOver(drivers, amount) {
    const newDrivers = drivers.filter( function(driver) { return driver.revenue > amount })
    const out = newDrivers.map( function(driver) { return driver.name } )
    return out
}

function exactMatch(drivers, attribute) {
    const out = drivers.filter( function(driver) { return driver.name === attribute.name || driver.revenue === attribute.revenue })
    return out
}

function exactMatchToList(drivers, attribute) {
    const newDrivers = drivers.filter( function(driver) { return driver.name === attribute.name || driver.revenue === attribute.revenue })
    const out = newDrivers.map( function(driver) { return driver.name } )
    return out
}