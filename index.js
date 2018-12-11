// Code your solution in this file.

function lowerCaseDrivers(list) {
  return list.map(function(driver) {
    return driver.toLowerCase();
  });
}

function nameToAttributes(list) {
  return list.map(function(driver){
    const driverFirst = driver.split(' ')[0];
    const driverLast = driver.split(' ')[1];

    return { firstName: driverFirst, lastName: driverLast};
  });
}

function attributesToPhrase(list) {
  return list.map(function(driver) {
    return '${driver.name} is from ${driver.hometown}'
  });
}
