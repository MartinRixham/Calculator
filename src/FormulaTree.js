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
		this.chunks[this.chunks.length - 1].Check("(");
		this.chunks.push(new BracketedTree());
	}
	else if (")" == element)
	{
		this.chunks[this.chunks.length - 1].Check(")");
		if (this.chunks[this.chunks.length - 2].afterBracket)
		{
			this.chunks[this.chunks.length - 1].iterator.SetPriority();
			this.chunks[this.chunks.length - 2].SetFirstObject(
				this.chunks[this.chunks.length - 1].iterator);
		}
		else
		{
			this.chunks[this.chunks.length - 2].CreateCompleteTree(
				this.chunks[this.chunks.length - 1].iterator);
		}
		this.chunks.pop();
	}
	else
	{
		this.chunks[this.chunks.length - 1].Append(element);
	}
}

FormulaTree.prototype.RunAll = function(calcStr) {
	var arrayOfCalc = calcStr.replace(/\(/g, " \( ");
	arrayOfCalc = arrayOfCalc.replace(/\)/g, " \) ");
	arrayOfCalc = arrayOfCalc.replace(/(\s+)/g, " ");
	arrayOfCalc = arrayOfCalc.replace(/(^\s+)|(\s+$)/g, "");
	arrayOfCalc = arrayOfCalc.split(" ");
	for (var i = 0; i < arrayOfCalc.length; i++) {
		this.Append(arrayOfCalc[i]);
	}
	return this.Calculate();
}
