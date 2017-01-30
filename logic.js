var data = `
  {
		"sites" : {
			"translate.google" : "source",
			"slovnik.seznam.cz" : "q"
		},
		"letters" : {
			"hachek" : {
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
			"charka" : {
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
			elem = document.getElementById(json.sites[k]);
			return;
		}
});

elem.oninput = function(){
	if(elem.value.length > 1){
		var lastSymbol = elem.value[elem.value.length - 1];
		var preLastSymbol = elem.value[elem.value.length - 2];
		if (lastSymbol == "\'"){
			console.log("Find spec symbol \'");
			Object.keys(json.letters.hachek).forEach(function(k){
				if (preLastSymbol == k){
					createNewValue(json.letters.hachek[k]);
					return;
				}
			});
		}
		else if(lastSymbol == "\""){
			console.log("Find spec symbol \"")
			Object.keys(json.letters.charka).forEach(function(k){
				if (preLastSymbol == k){
					createNewValue(json.letters.charka[k]);
					return;
				}
			});
		}
	}
}

function createNewValue(newAdditionalValue, element=elem){
	console.log("Case: ", newAdditionalValue);
	element.value = element.value.substring(0, element.value.length - 2) + newAdditionalValue;
}
