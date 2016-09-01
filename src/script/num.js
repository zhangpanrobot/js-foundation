function isNumeric(n) {
	const floatVal = parseFloat(n)
  return !Array.isArray(n) && !isNaN(floatVal) && isFinite(n)
}
