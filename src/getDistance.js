/**
 * Calculate the distance between two points represented on the standard Planar coordinate system
 * with precision 2 decimal places
 * Each Point represented by object contains two property (X and Y)
 * @param {Object} firstPoint
 * @param {Object} secondPoint
 * @returns {number}
 */
module.exports.getDistance = function getDistance(firstPoint, secondPoint) {
  const x = secondPoint.X - firstPoint.X;
  const y = secondPoint.Y - firstPoint.Y;

  const dist = Math.sqrt(x * x + y * y);
  return Number(dist.toFixed(2));
};
