const a1 =[
	{
		"id": "0001",
		"type": "donut",
		"name": "Cake",
		"ppu":0.78,
		"batters":
			{
				"batter":
					[
						{ "id": "1001", "type": "Regular" },
						{ "id": "1002", "type": "Chocolate" },
						{ "id": "1003", "type": "Blueberry" },
						{ "id": "1004", "type": "Devil's Food" }
					]
			},
		"topping":
			[
				{ "id": "5001", "type": "None" },
				{ "id": "5002", "type": "Glazed" },
				{ "id": "5005", "type": "Sugar" },
				{ "id": "5007", "type": "Powdered Sugar" },
				{ "id": "5006", "type": "Chocolate with Sprinkles" },
				{ "id": "5003", "type": "Chocolate" },
				{ "id": "5004", "type": "Maple" }
			]
	},
	{
		"id": "0002",
		"type": "donut",
		"name": "Raised",
		"ppu": 0.55,
		"batters":
			{
				"batter":
					[
						{ "id": "1001", "type": "Regular" }
					]
			},
		"topping":
			[
				{ "id": "5001", "type": "None" },
				{ "id": "5002", "type": "Glazed" },
				{ "id": "5005", "type": "Sugar" },
				{ "id": "5003", "type": "Chocolate" },
				{ "id": "5004", "type": "Maple" }
			]
	},
	{
		"id": "0003",
		"type": "donut",
		"name": "Old Fashioned",
		"ppu":0.26,
		"batters":
			{
				"batter":
					[
						{ "id": "1001", "type": "Regular" },
						{ "id": "1002", "type": "Chocolate" }
					]
			},
		"topping":
			[
				{ "id": "5001", "type": "None" },
				{ "id": "5002", "type": "Glazed" },
				{ "id": "5003", "type": "Chocolate" },
				{ "id": "5004", "type": "Maple" }
			]
	}
];
function toppin (arr){
for(var t of arr ){
   for ( var x of t.topping){
     console.log(x.type)
   }
}
}
toppin(a1);
console.log("______________________")

function batters (arr){
for(var t of arr ){
  var x = t["batters"];
       for ( var u of x.batter){
     console.log(u.type)
   }
}}
batters(a1);
console.log("______________________")


function ave (arr){
var r = 0;
var r1 = 0;

for(var t in arr ){
  r += arr[r1].ppu;
  r1++;
}
console.log(r/r1);}

ave(a1);
console.log("______________________")


function sum (arr){
var r = 0;
var r1 = 0;

for(var t in arr ){
  r += arr[r1].ppu;
  r1++;
}
console.log(r);}

sum(a1);

console.log("______________________")


function IDs (arr){
for(var t of arr ){
if( t !== "batters"|| "topping"){
console.log(t.id) }
var x = t["batters"];
       for ( var u of x.batter){
     console.log(u.id)
   }

   for ( var x of t.topping){
     console.log(x.id)
   }
}
}

IDs(a1);
