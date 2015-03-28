function Calculator() {
	
	this.characters = 
		[
			[
				new Character("1"),
				new Character("2"),
				new Character("3"),
				new Character(" + ")
			],
			[
				new Character("4"),
				new Character("5"),
				new Character("6"),
				new Character(" - ")
			],
			[
				new Character("7"),
				new Character("8"),
				new Character("9"),
				new Character(" * ")
			],
			[
				new Character("("),
				new Character("0"),
				new Character(")"),
				new Character(" / ")
			]
		];

	this.extraCharacters =
		[
			[
				new Character(" ^ "),
				new Character(" √ "),
				new Character(" exp("),
				new Character(" log(")
			],
			[
				new Character(" % "),
				new Character(" sin("),
				new Character(" cos("),
				new Character(" tan(")
			],
			[
				new Character(" \u03C0 "),
				new Character(" e "),
				new Character("."),
				new Character(".")
			],
			[
				new Character("."),
				new Character("."),
				new Character("."),
				new Character(".")
			]
		];
		
	this.input = "";

    this.title = new Click(function() { this.input = ""; });
	
	this.text = new Value(function(value) {
	
		if (value != undefined) {
		
			this.input = value;
		}
		
		return this.input;
	});
	
	this.calculate = new Click(function() {
	
		this.input = CalcLogic(this.input);
	});
	
	this.moveUp = new Click(function() {
	
		var grid = document.querySelector(".controls .table .grid");
		
		grid.className = "grid";
	});
	
	this.moveDown = new Click(function() {
		
		var grid = document.querySelector(".controls .table .grid");
		
		grid.className = "grid extra";
	});
	
	var self = this;
	
	function Character(character) {
	
		this.text = new Binding({
		
			text: function() { return character; },
			click: function() {
			
				self.input += character;
			}
		});
	}

	var grid = document.querySelector(".grid");

	var height = grid.offsetHeight;

	// The scale factor is empirically determined to make the calculator
	// the right height to contain the positioned button grid accross browsers.
	document.querySelector(".calculator").style.height = 3 * height - 362 + "px";
}

document.addEventListener("DOMContentLoaded", function() {

	new BindingRoot(calculator = new Calculator());
});
