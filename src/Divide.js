var Divide = function() {
}

Divide.prototype = new AbstractOperation();
Divide.prototype.operator = "/";
Divide.prototype.priority = 3;
//Divide.prototype.next = new Divide();
Divide.prototype.ExecuteThis = function(left, right) {
	return left / right;
}

