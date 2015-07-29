QUnit.test( "hello test", function( assert ) {
	assert.ok( 1 == "1", "Passed!" );
});
QUnit.test( "Calculate", function( assert ) {
num = 22;
assert.equal( 
	num, CalcLogic("22"), "Passed!" );
});
QUnit.test( "Add", function( assert ) {
assert.equal( 
	2, CalcLogic("1 + 1"), "Passed!" );
});
QUnit.test( "Subtract", function( assert ) {
assert.equal( 
	3, CalcLogic("10 - 7"), "Passed!" );
});
QUnit.test( "Multiply", function( assert ) {
assert.equal( 
	70, CalcLogic("10 * 7"), "Passed!" );
});
QUnit.test( "Divide", function( assert ) {
assert.equal( 
	4, CalcLogic("24 / 6"), "Passed!" );
});
QUnit.test( "ThreeNumbers", function( assert ) {
assert.equal( 
	33, CalcLogic("34 - 3 + 2"), "Passed!" );
});
QUnit.test( "Number", function( assert ) {
	assert.equal( 
		28, new Number("28").Calculate(), "Passed!" );
});
QUnit.test( "Formula_Add", function( assert ) {
	var eqn = new BinaryOperation("+");
	var left = new Number("11");
	eqn.AppendFirst(left);
	var right = new Number("7");
	eqn.AppendSecond(right);
	assert.equal( 
		eqn.Calculate(), 18, "Passed!" );
});
QUnit.test( "FormulaTree_Add", function( assert ) {
	var tree = new FormulaTree();
	tree.Append("11");
	tree.Append("+");
	tree.Append("5");
	assert.equal( 
		tree.Calculate(), 16, "Passed!" );
});
QUnit.test( "Formula_Subtract", function( assert ) {
	var eqn = new BinaryOperation("-");
	var left = new Number("11");
	eqn.AppendFirst(left);
	var right = new Number("7");
	eqn.AppendSecond(right);
	assert.equal( 
		eqn.Calculate(), 4, "Passed!" );
});
QUnit.test( "Formula_Multiply", function( assert ) {
	var eqn = new BinaryOperation("*");
	var left = new Number("11");
	eqn.AppendFirst(left);
	var right = new Number("7");
	eqn.AppendSecond(right);
	assert.equal( 
		eqn.Calculate(), 77, "Passed!" );
});
QUnit.test( "Formula_Divide", function( assert ) {
	var eqn = new BinaryOperation("/");
	var left = new Number("12");
	eqn.AppendFirst(left);
	var right = new Number("8");
	eqn.AppendSecond(right);
	assert.equal( 
		eqn.Calculate(), 1.5, "Passed!" );
});
QUnit.test( "ThreeOperands", function( assert ) {
	// 10 * 3 - 8
	var operator1 = new BinaryOperation("*");
	var operator2 = new BinaryOperation("-");
	var num1 = new Number("10");
	operator1.AppendFirst(num1);
	var num2 = new Number("3");
	operator1.AppendSecond(num2);
	var num3 = new Number("8");
	operator2.AppendFirst(operator1);
	operator2.AppendSecond(num3);
	assert.equal( 
		operator2.Calculate(), 22, "Passed!" );
});
QUnit.test( "FormulaTree_ThreeOperands", function( assert ) {
	var tree = new FormulaTree();
	tree.Append("10");
	tree.Append("*");
	tree.Append("8");
	tree.Append("-");
	tree.Append("5");
	assert.equal( 
		tree.Calculate(), 75, "Passed!" );
});
QUnit.test( "ThreeOperands_Priority", function( assert ) {
	var tree = new FormulaTree();
	tree.Append("10");
	tree.Append("-");
	tree.Append("8");
	tree.Append("*");
	tree.Append("5");
	assert.equal( 
		tree.Calculate(), -30, "Passed!" );
});
QUnit.test( "ThreeOperands_Priority2", function( assert ) {
	var tree = new FormulaTree();
	tree.Append("10");
	tree.Append("+");
	tree.Append("8");
	tree.Append("/");
	tree.Append("16");
	assert.equal( 
		tree.Calculate(), 10.5, "Passed!" );
});
QUnit.test( "RunAll", function( assert ) {
	var tree = new FormulaTree();
	assert.equal( 
		tree.RunAll("10 + 8 / 16"), 10.5, "Passed!" );
});
QUnit.test( "Operator_NextTo_Operator", function( assert ) {
	assert.throws( 
		function() {
			var tree = new FormulaTree();
			tree.RunAll("10 + - 16");
		},
		"Invalid input string.",
		"Element next to operator must be a number." );
	assert.throws( 
		function() {
			var tree = new FormulaTree();
			tree.RunAll("10 + 16 5");
		},
		"Invalid input string.",
		"Element next to number must be a operator." );
});
QUnit.test( "Bracket_Beginning", function( assert ) {
	var tree = new FormulaTree();
	assert.equal( 
		tree.RunAll("( 10 + 14 ) / 16"), 1.5, "Passed!" );
});
QUnit.test( "Bracket_End", function( assert ) {
	var tree = new FormulaTree();
	assert.equal( 
		tree.RunAll("3 * ( 10 + 14 )"), 72, "Passed!" );
});
QUnit.test( "Bracket3", function( assert ) {
	var tree = new FormulaTree();
	assert.equal( 
		tree.RunAll("( 3 * ( 10 + 1 ) - 22 ) / 2"), 5.5, "Passed!" );
});
QUnit.test( "Bracket4", function( assert ) {
	var tree = new FormulaTree();
	assert.equal( 
		tree.RunAll("( 3 + 6 ) * 5 - 7 / ( 2 + 2 )"), 43.25, "Passed!" );
});
QUnit.test( "Bracket_AribitrarySpace", function( assert ) {
	var tree = new FormulaTree();
	assert.equal( 
		tree.RunAll("(3 + 6  ) * 5 - 7 /(2 + 2 ) "), 43.25, "Passed!" );
});
QUnit.test( "Bracket_Error", function( assert ) {
	assert.throws( 
		function() {
			var tree = new FormulaTree();
			tree.RunAll("10 (  16 + 2 )");
		},
		"Invalid input string.",
		"( must come after operator or (." );
	assert.throws( 
		function() {
			var tree = new FormulaTree();
			tree.RunAll("( 10 + ) * 16");
		},
		"Invalid input string.",
		") must come after number or )." );
});
// - 5 as -5
// treatment of ()
// continuous space
// unexpected character
// unequal number of ( and )
