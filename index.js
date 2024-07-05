// Write your solution in this file!
var customerName = 'bob';

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

function setBestCustomer() {
  window.bestCustomer = 'not bob';
}

function overwriteBestCustomer(newFavorite) {
  window.bestCustomer = newFavorite;
}

const leastFavoriteCustomer = 'some initial value';

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'new value'; 
}

module.exports = {
  upperCaseCustomerName,
  setBestCustomer,
  overwriteBestCustomer,
  changeLeastFavoriteCustomer
};
