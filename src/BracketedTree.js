var BracketedTree = function() {
	this.afterBracket = true;
	this.afterNum = false;
	this.iterator;
	this.root;
}

BracketedTree.prototype.Check = function(element) {
	if (this.afterNum && (!isNaN(element) || "(" == element))
	{
		throw "Invalid input string.";
	}
	else if (!this.afterNum && (isNaN(element) && "(" != element))
	{
		throw "Invalid input string.";
	}
}

BracketedTree.prototype.Append = function(element) {
	this.Check(element);
	if (this.afterNum) {
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
		var numObj = new Number(element);
		if (this.afterBracket)
		{
			this.SetFirstObject(numObj);
		}
		else 
		{
			this.CreateCompleteTree(numObj);
		}
		this.afterNum = true;
	}
}

BracketedTree.prototype.SetFirstObject = function(obj) {
	this.iterator = obj;
	this.root = obj;
	this.afterBracket = false;
	this.afterNum = true;
}

BracketedTree.prototype.CreateCompleteTree = function(obj) {
	this.iterator.AppendSecond(obj);
	this.iterator = this.root;
	this.afterNum = true;
}

