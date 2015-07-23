var Add = function() {
}

Add.prototype = new AbstractOperation();
Add.prototype.operator = "+";
Add.prototype.priority = 4;
Add.prototype.next = new Subtract();
Add.prototype.ExecuteThis = function(left, right) {
	return left + right;
}

