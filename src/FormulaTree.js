var FormulaTree = function() {
	var initialNum = new Number("0");
	var initialOp = new Formula("+");
	initialOp.AppendFirst(initialNum);
	this.iterator = initialOp;
	this.root = initialOp;
}

FormulaTree.prototype.Calculate = function() {
	return this.iterator.Calculate();
}

FormulaTree.prototype.Append = function(element) {
	if (isNaN(element))
	{
		var opObj = new Formula(element);
		// smaller number means higher priority
		if (opObj.GetPriority() < this.iterator.GetPriority())
		{
			opObj.AppendFirst(this.iterator.GetSecond());
			this.root.AppendSecond(opObj);
			this.iterator = opObj;
		}
		else
		{
			opObj.AppendFirst(this.iterator);
			this.iterator = opObj;
			this.root = this.iterator;
		}
	}
	else {
		var numObj = new Number(element);
		this.iterator.AppendSecond(numObj);
		this.iterator = this.root;
	}
}
