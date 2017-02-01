var data = `
  {
		"sites" : {
			"translate.google" : "source",
			"slovnik.seznam.cz" : "q"
		},
		"letters" : {
			"charka" : {
				"a" : "á",
				"A" : "Á",
				"o" : "ó",
				"O" : "Ó",
				"e" : "é",
				"E" : "É",
				"u" : "ú",
				"U" : "Ú",
				"y" : "ý",
				"Y" : "Ý",
				"i" : "í",
				"I" : "Í"
			},
			"hachek" : {
				"e" : "ě",
				"E" : "Ě",
				"c" : "č",
				"C" : "Č",
				"s" : "š",
				"S" : "Š",
				"r" : "ř",
				"R" : "Ř",
				"z" : "ž",
				"Z" : "Ž",
				"u" : "ů",
				"U" : "Ů",
				"n" : "ň",
				"N" : "Ň",
				"d" : "ď",
				"D" : "Ď",
				"t" : "ť",
				"T" : "Ť"
			}
		}
	}
`;
var json = JSON.parse(data);
var elem;

Object.keys(json.sites).forEach(function(k){
    if (document.URL.includes(k)){
			console.log("k: " + k);
			elem = document.getElementById(json.sites[k])
			return;
		}
});



elem.oninput = function(){
	var lastSymbolIndex = elem.value.search(["\'|\""])
	console.log("Find \' or \" at: " + lastSymbolIndex);
	if(lastSymbolIndex > 0){
		if(elem.value[lastSymbolIndex] == "\'"){
			repl(elem, json.letters.charka, lastSymbolIndex)
		}
		else{
			repl(elem, json.letters.hachek, lastSymbolIndex)
		}
	}
}

function repl(element, dict, index){
	Object.keys(dict).forEach(function(k){
		if (element.value[index-1] == k){
			element.value = element.value.substring(0, index-1) + dict[k] + element.value.substring(index+1, element.value.length)
			return;
		}
	});
}