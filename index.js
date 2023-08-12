// Code your solution here
function findMatching(drivers, driverName) {

    const newDrivers = drivers.filter((driver) => driverName.toLowerCase() === driver.toLowerCase())

    return newDrivers
}


function fuzzyMatch(drivers, letters) {
    const newDrivers = drivers.filter((driver) => driver.startsWith(letters))

    return newDrivers
}

function matchName(drivers, name) {

    const newDrivers = drivers.filter((driver) => driver.name === name)
    return newDrivers
}
