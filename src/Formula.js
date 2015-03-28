var Formula = function(operator) {
	this.operator = operator;
	this.first;
	this.second;
}

//chain of responsibility pattern
Formula.prototype.OperatorObj = new Add(); 

Formula.prototype.GetPriority = function() {
	return this.OperatorObj.GetPriority(this.operator);
}

Formula.prototype.AppendFirst = function(composite) {
	this.first = composite;
}

Formula.prototype.AppendSecond = function(composite) {
	this.second = composite;
}

Formula.prototype.GetSecond = function() {
	return this.second;
}

Formula.prototype.Calculate = function() {
	//var ret = this.first.Calculate() + this.second.Calculate();
	return this.OperatorObj.Execute(this.first.Calculate(), 
		this.second.Calculate(), this.operator);
}
