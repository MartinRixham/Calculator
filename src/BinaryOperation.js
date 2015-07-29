var BinaryOperation = function(operator) {
	this.operator = operator;
	this.first;
	this.second;
	this.isPrior = false;
}

//chain of responsibility pattern
BinaryOperation.prototype.OperatorObj = new Add(); 

BinaryOperation.prototype.SetPriority = function() {
	this.isPrior = true
}

BinaryOperation.prototype.GetPriority = function() {
	if (this.isPrior)
	{
		return 0;
	}
	else
	{
		return this.OperatorObj.GetPriority(this.operator);
	}
}

BinaryOperation.prototype.AppendFirst = function(composite) {
	this.first = composite;
}

BinaryOperation.prototype.AppendSecond = function(composite) {
	this.second = composite;
}

BinaryOperation.prototype.GetSecond = function() {
	return this.second;
}

BinaryOperation.prototype.Calculate = function() {
	//var ret = this.first.Calculate() + this.second.Calculate();
	return this.OperatorObj.Execute(this.first.Calculate(), 
		this.second.Calculate(), this.operator);
}
