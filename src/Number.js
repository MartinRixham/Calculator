var Number = function(numStr) {
	this.value = parseFloat(numStr);
}

Number.prototype.Calculate = function() {
	return this.value;
}

Number.prototype.SetPriority = function() {
}

Number.prototype.GetPriority = function() {
	return 0;
}
