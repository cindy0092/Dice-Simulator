// an obj that store the result every times when the user roll the dice
//bind the result to the d3 graph

$(document).ready(function(){
	var input, data;
	$('form input[type="text"]').on('blur', function(){
		console.log(this.value);
	});
	$('#dice').on('submit', function(e){
		e.preventDefault();
		var obj;
		input = $('#num').val();
		data = rollingDice(parseInt(input));
		// $('#div').empty();
		// for(var key in output){
		// 	$('#div').append('<p id="change">' + key + ": "+ output[key] + '</p>');
		// }
		var x = d3.scale.linear()
			//_.each(output, function(item){data.push(item)})
	    	.domain([0, d3.max(data, function(d){return d.value;})])
	    	.range([0, 420]);

	    console.log("d3.max", d3.max(data, function(d){return d.value;}));
	    	
	    var divSelection = d3.select(".chart")
	  		.selectAll("div")
	    	.data(data)
	  		.enter()
	  		.append("div"); // first level append

		divSelection.append("div") // second level 1st append
			.classed("bar-label", true)
	    	.text(function(d) { return d.name; });

	    divSelection.append("div") // second level 2nd append
	  		.classed("bar", true)
	    	.style("width", function(d) { 
	    		return x(d.value) + "px"; })
	    	.text(function(d) { return d.value; });
	});
});
function rollingDice(nTimes){
	var array = [
	{name: "one", value: 0}, {name: "two", value: 0},
	{name: "three", value: 0}, {name: "four", value: 0},
	{name: "five", value: 0}, {name: "six", value: 0},
	];
	for(var i = 0; i < nTimes; i++){
		var dice = Math.floor(Math.random() * 6 + 1);
		if(dice === 1){
			array[0]["value"] += 1;
		}
		else if(dice === 2){
			array[1]["value"] += 1;
		}
		else if(dice === 3){
			array[2]["value"] += 1;
		}
		else if(dice === 4){
			array[3]["value"] += 1;
		}
		else if(dice === 5){
			array[4]["value"] += 1;
		}
		else{
			array[5]["value"] += 1;
		}
	}
	return array;
	// var result = {};
	// for(var i = 0; i < nTimes; i++){
	// 	var dice = Math.floor(Math.random() * 6 + 1) 
	// 	if(result.hasOwnProperty(dice)){
	// 		result[dice] += 1;
	// 	}
	// 	else{
	// 		result[dice] = 1;
	// 	}
	// }
	// return result;
}
console.log(rollingDice(10));	