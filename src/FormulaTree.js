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

FormulaTree.prototype.TokenizeInput = function(calcStr) {    
    // Regex to split the given input string into separate 'tokens', where 
    // each token is a number, operator or bracket:
    // 
    //  [+\-*/()]           # any one of the symbols +-*/()
    //                      # note that '-' must be escaped with \
    //  |                   # or
    //  (
    //      [0-9]+          # one or more numerals
    //      (\.[0-9]+)?     # optional decimal point and one or more numerals
    //  )
    // 
    // TODO: change to treat invalid chars appropriately. Currently 
    //       it ignores any other characters, e.g. 
    //          '1 + 1' = 'a1 + 1x!'
	var arrayOfTokens = calcStr.match( /[+\-*/()]|([0-9]+(\.[0-9]+)?)/g);  
    return arrayOfTokens;
}

FormulaTree.prototype.RunAll = function(calcStr) {
	var tokens = this.TokenizeInput(calcStr);

	for (var i = 0; i < tokens.length; i++) {
		this.Append(tokens[i]);
	}
	return this.Calculate();
}
