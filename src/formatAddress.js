/**
 * Write a function which returns a formatter function to format address based on input address data
 * Format should be the following: 'street, house, apartment, city, postal-code, country'
 * @returns {function}
 */
module.exports.formatAddress = function formatAddress() {
  return function(addres){
    const street1 = addres.street;
    const house1 = addres.house;
    const apartment1 = addres.apartment;
    const city1 = addres.city;
    const postalCode1 = addres.postalCode;
    const country1 = addres.country;

    return `${street1}, ${house1}, ${apartment1}, ${city1}, ${postalCode1}, ${country1}`;
  };
};
