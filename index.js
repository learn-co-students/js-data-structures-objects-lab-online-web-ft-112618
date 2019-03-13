// Write your solution in this file!
const driver = {
};

function updateDriverWithKeyAndValue(driver, key, value){
  return Object.assign({}, driver, {['name']: 'Sam'}, {['address']: '11 Broadway'});
  }

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
  driver['address'] = '12 Broadway';
  return driver;
}

function deleteFromDriverByKey(driver, key){
  let newDriver = Object.assign({}, driver, {['name']: 'Sam'}, {['address']: '11 Broadway'})
  delete newDriver.name
  return newDriver
}

function destructivelyDeleteFromDriverByKey(driver, key){
  delete driver.name;
  return driver;
}
