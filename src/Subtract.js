var Subtract = function() {
}

Subtract.prototype = new AbstractOperation();
Subtract.prototype.operator = "-";
Subtract.prototype.priority = 4;
Subtract.prototype.next = new Multiply();
Subtract.prototype.ExecuteThis = function(left, right) {
	return left - right;
}

