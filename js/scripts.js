jQuery(document).ready(function	() {

	$('#values-form').submit(function(e){
		e.preventDefault();


		var newTriangle = {
			a: parseInt($('#a').val()),
			b: parseInt($('#b').val()),
			c: parseInt($('#c').val()),
			sides: function(){
				return this.a + ", " + this.b + ", " + this.c;
			},

			type: function () {
				if (!(this.a < (this.b + this.c)) || !(this.a > Math.abs(this.b - this.c)) || !(this.b < (this.a + this.c)) || !(this.b > Math.abs(this.a - this.c)) || !(this.c < (this.a + this.b)) || !(this.c > Math.abs(this.a - this.b))) {
					return "not triangle"
				} else if (this.a == this.b && this.b == this.c) {
					return "equilateral"
				} else if (this.a == this.b || this.a == this.c || this.b == this.c) {
					return "isosceles"
				} else {
					return "scalene"
				}


			}
		};


		var currentTriangle = newTriangle.type();


		function filler(currentTriangle) {
			switch (currentTriangle) {
				case "not triangle":
					alert("It's not triangle! Check your values");
					break;
				case "equilateral":
					$(".equilateral").show();
					$("ul#equilateral").append("<li><span class='equilaterals'>" + newTriangle.sides() + "</span></li>");
					break;
				case "isosceles":
					$(".isosceles").show();
					$("ul#isosceles").append("<li><span class='isosceleses'>" + newTriangle.sides() + "</span></li>");
					break;
				case "scalene":
					$(".scalene").show();
					$("ul#scalene").append("<li><span class='scalenes'>" + newTriangle.sides() + "</span></li>");
			}
		}

		filler(currentTriangle);

	});





});


