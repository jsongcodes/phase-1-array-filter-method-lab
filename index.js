const driversNames = []

function findMatching(driversNames, string) {
    const newDrivers = driversNames.filter(driversNames => driversNames.toLowerCase() === string.toLowerCase());
    return newDrivers;
}

function fuzzyMatch(driversNames, string) {
    const newDrivers = driversNames.filter(driversNames => driversNames[0] === string[0]);
    return newDrivers;
}

function matchName(driver, string) {
    const newDrivers = driver.filter(driver => driver.name === string);
    return newDrivers;
}