var Number = function(numStr) {
	this.value = parseFloat(numStr);
}

Number.prototype.Calculate = function() {
	return this.value;
}