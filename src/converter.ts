/**
 * Write a function converting temperature, weight and distance. Precision is 2 number after digits
 * @param {string | number} value
 * @param {'m'|'mi'|'gr'|'pound'|'C'|'K'} from
 * @param {'m'|'mi'|'gr'|'pound'|'C'|'K'} to
 * @returns {boolean}
 */
module.exports.converter = function (value: number, from: string, to: string): number {
  const conversions: Record<string, number | ((val: number) => number)> = {
    'm:mi' : 0.000621371,
    'mi:m' : 1609.34,
    'gr:pound' : 0.00220462,
    'pound:gr' : 453.592,
    'C:K' : (val) => val + 273.15,
    'K:C' : (val) => val - 273.15,
   };

   const key = `${from}:${to}`;
   const conversion = conversions[key];

   if(!conversion) throw new Error;

   let result = typeof conversion === 'number' ? value * conversion : conversion(value);

   result = Math.round(result * 100) / 100;

   if(isNaN(result)) throw new Error;


   return result;
};
