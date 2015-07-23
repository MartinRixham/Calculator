var Multiply = function() {
}

Multiply.prototype = new AbstractOperation();
Multiply.prototype.operator = "*";
Multiply.prototype.priority = 3;
Multiply.prototype.next = new Divide();
Multiply.prototype.ExecuteThis = function(left, right) {
	return left * right;
}

