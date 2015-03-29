var FormulaTree = function() {
	this.chunks = [];
	this.chunks.push(new BracketedTree());
}

FormulaTree.prototype.Calculate = function() {
	return this.chunks[0].iterator.Calculate();
}

FormulaTree.prototype.Append = function(element) {
	if ("(" == element)
	{
		this.chunks.push(new BracketedTree());
	}
	else if (")" == element)
	{
		if (this.chunks[this.chunks.length - 2].afterBracket)
		{
			this.chunks[this.chunks.length - 1].iterator.SetPriority();
			this.chunks[this.chunks.length - 2].iterator
			= this.chunks[this.chunks.length - 1].iterator;
			this.chunks[this.chunks.length - 2].root
			= this.chunks[this.chunks.length - 1].iterator;
		}
		else
		{
			this.chunks[this.chunks.length - 2].iterator.AppendSecond(
				this.chunks[this.chunks.length - 1].iterator);
			this.chunks[this.chunks.length - 2].iterator 
			= this.chunks[this.chunks.length - 2].root;
		}
		this.chunks[this.chunks.length - 2].afterBracket = false;
		this.chunks[this.chunks.length - 2].afterNum = true;
		this.chunks.pop();
	}
	else
	{
		this.chunks[this.chunks.length - 1].Append(element);
	}
}

FormulaTree.prototype.RunAll = function(calcStr) {
	var arrayOfCalc = calcStr.split(" ");
	for (var i = 0; i < arrayOfCalc.length; i++) {
		this.Append(arrayOfCalc[i]);
	}
	return this.Calculate();
}
