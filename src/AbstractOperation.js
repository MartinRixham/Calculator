var AbstractOperation = function() {
}

AbstractOperation.prototype.GetPriority = function(operator) {
	if (this.operator == operator) { 
		return this.priority;
	}
	else {
		return this.next.GetPriority(operator);
	}
}

AbstractOperation.prototype.Execute = function(left, right, operator) {
	if (this.operator == operator) { 
		return this.ExecuteThis(left, right);
	}
	else {
		return this.next.Execute(left, right, operator);
	}
}
