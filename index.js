let _ = {};

_.identity = function (x) {
  return x;
};

_.first = function (arr, n = 1) {
  if (!Array.isArray(arr) && arr.constructor !== String) return undefined;

  if (arr.length === 0) return undefined;

  if (n <= 0) return undefined;

  return arr.slice(0, Math.min(n, arr.length));
};

module.exports = _;