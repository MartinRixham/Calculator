var BracketedTree = function() {
	this.afterBracket = true;
	this.afterNum = false;
	this.iterator;
	this.root;
}

BracketedTree.prototype.Append = function(element) {
	if (this.afterNum) {
		if (isNaN(element)) {	// +-*/), not(
			var opObj = new BinaryOperation(element);
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
			this.afterNum = false;
		}
		else 
		{
			throw "Invalid input string.";
		}
	}
	else
	{
		var numObj = new Number(element);
		if (isNaN(element))
		{
			throw "Invalid input string.";
		}
		else if (this.afterBracket)
		{
			this.iterator = numObj;
			this.root = numObj;
			this.afterBracket = false;
		}
		else 
		{
			this.iterator.AppendSecond(numObj);
			this.iterator = this.root;
		}
		this.afterNum = true;
	}
}
