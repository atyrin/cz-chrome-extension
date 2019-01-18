var json = {
	"sites": {
		"translate.google.ru": "source",
		"translate.google.com": "source",
		"translate.google.cz": "source",
		"slovnik.seznam.cz": "q",
		"prirucka.ujc.cas.cz": "slovo"
	},
	"letters": {
		"charka": {
			"a": "á",
			"A": "Á",
			"o": "ó",
			"O": "Ó",
			"e": "é",
			"E": "É",
			"u": "ú",
			"U": "Ú",
			"y": "ý",
			"Y": "Ý",
			"i": "í",
			"I": "Í"
		},
		"hachek": {
			"e": "ě",
			"E": "Ě",
			"c": "č",
			"C": "Č",
			"s": "š",
			"S": "Š",
			"r": "ř",
			"R": "Ř",
			"z": "ž",
			"Z": "Ž",
			"u": "ů",
			"U": "Ů",
			"n": "ň",
			"N": "Ň",
			"d": "ď",
			"D": "Ď",
			"t": "ť",
			"T": "Ť"
		}
	}
}


if (Object.keys(json.sites).includes(document.location.host)) {
	console.log("Enable cz-chrome-extension for: " + document.location.host);
	var elem = document.getElementById(json.sites[document.location.host])

	elem.oninput = () => {
		let lastSymbolIndex = elem.value.search(["\'|\""])
		if (lastSymbolIndex > 0) {
			if (elem.value[lastSymbolIndex] == "\'") {
				repl(elem, json.letters.charka, lastSymbolIndex)
			}
			else {
				repl(elem, json.letters.hachek, lastSymbolIndex)
			}
		}
	}
}

function repl(element, dict, index) {
	let itemForReplace = element.value[index - 1];
	if (Object.keys(dict).includes(itemForReplace)) {
		element.value = element.value.substring(0, index - 1) + dict[itemForReplace] + element.value.substring(index + 1, element.value.length)
	}
}