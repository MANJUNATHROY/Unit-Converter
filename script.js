const feet = document.getElementById("feet")
const inch = document.getElementById("inch")
const inputs = document.getElementsByClassName("input")

for (let i = 0; i < inputs.length; i++) {
	let input = inputs[i];
	input.addEventListener("input", function (e) {
		let value = parseFloat(e.target.value);
		switch (e.target.name) {
			case "feet":
				inch.value = value * 12;
				break;
			case "inch":
				feet.value = value / 12;
				break;
		}
	})
}
