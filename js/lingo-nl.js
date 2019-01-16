var words = [
	"appel",
	"aldus",
	"afwas",
	"aftel",
	"aarde",
	"armen",
	"actie",
	"apart",
	"adres",
	"avond",
	"aders",
	"alarm",
	"boten",
	"balen",
	"beter",
	"bomen",
	"boren",
	"boven",
	"boxen",
	"brood",
	"broek",
	"brand",
	"breed",
	"benen",
	"beeld",
	"brief",
	"beten",
	"basis",
	"blauw",
	"beren",
	"buren",
	"banen",
	"bloed",
	"broer",
	"blond",
	"boter",
	"beleg",
	"breng",
	"baken",
	"beker",
	"blind",
	"bezig",
	"baden",
	"bedel",
	"bazen",
	"bazin",
	"baren",
	"beden",
	"beken",
	"bezem",
	"baard",
	"bidet",
	"breuk",
	"conus",
	"cello",
	"creme",
	"cloud",
	"cacao",
	"cadet",
	"cavia",
	"ceder",
	"combi",
	"china",
	"clown",
	"draai",
	"deden",
	"dalen",
	"derde",
	"delen",
	"dwaas",
	"daden",
	"dader",
	"dames",
	"diner",
	"datum",
	"dozen",
	"dreun",
	"duits",
	"dagen",
	"deren",
	"dwerg",
	"dwaal",
	"dwing",
	"druil",
	"droog",
	"draad",
	"dweil",
	"drank",
	"duren",
	"dwars",
	"drugs",
	"daten",
	"daler",
	"doorn",
	"disco",
	"degen",
	"droom",
	"dient",
	"drone",
	"dadel",
	"duwen",
	"druif",
	"deken",
	"deler",
	"elven",
	"eigen",
	"enger",
	"engel",
	"elder",
	"enkel",
	"effen",
	"email",
	"egaal",
	"fiets",
	"friet",
	"files",
	"forel",
	"films",
	"feest",
	"fruit",
	"falen",
	"flora",
	"fauna",
	"feeen",
	"freak",
	"forum",
	"fusie",
	"geven",
	"gaven",
	"groen",
	"graai",
	"getal",
	"grens",
	"grond",
	"groef",
	"graal",
	"gewei",
	"games",
	"grote",
	"groet",
	"garen",
	"gebak",
	"graag",
	"genre",
	"glans",
	"geluk",
	"geeuw",
	"horen",
	"heren",
	"halen",
	"hagel",
	"haren",
	"helen",
	"harde",
	"hemel",
	"hoofd",
	"huren",
	"hamer",
	"haken",
	"heden",
	"hotel",
	"hobby",
	"heler",
	"hoger",
	"ieder",
	"index",
	"immer",
	"icoon",
	"inlog",
	"inzet",
	"innig",
	"jovel",
	"jaren",
	"jicht",
	"jabot",
	"jacht",
	"jaden",
	"jagen",
	"jager",
	"japon",
	"jarig",
	"jawel",
	"jeans",
	"jemig",
	"jeugd",
	"joint",
	"jonas",
	"joule",
	"koken",
	"kreet",
	"koker",
	"kerst",
	"kegel",
	"koude",
	"kader",
	"krent",
	"kamer",
	"kaars",
	"kaart",
	"kraan",
	"krant",
	"keren",
	"kruid",
	"kerel",
	"kubus",
	"kraal",
	"kleur",
	"kroon",
	"klein",
	"korst",
	"klopt",
	"kabel",
	"kunst",
	"kopje",
	"krans",
	"klimt",
	"kater",
	"klink",
	"kudde",
	"kruis",
	"lopen",
	"laten",
	"lepel",
	"links",
	"laden",
	"leven",
	"lezen",
	"lucht",
	"lenen",
	"laser",
	"lente",
	"licht",
	"lader",
	"leder",
	"lunch",
	"lijst",
	"leger",
	"leden",
	"legen",
	"lagen",
	"lezer",
	"lever",
	"lingo",
	"loper",
	"luier",
	"lager",
	"leeuw",
	"maand",
	"malen",
	"maken",
	"media",
	"meter",
	"motor",
	"maten",
	"markt",
	"mazen",
	"molen",
	"meest",
	"meren",
	"model",
	"meden",
	"maden",
	"macht",
	"meeuw",
	"mager",
	"magen",
	"maren",
	"manen",
	"noord",
	"nieuw",
	"negen",
	"namen",
	"neven",
	"nodig",
	"naden",
	"neder",
	"nemen",
	"onder",
	"optel",
	"ovaal",
	"ovale",
	"onwel",
	"optie",
	"orden",
	"oppas",
	"ouder",
	"ophef",
	"oases",
	"palen",
	"plein",
	"pegel",
	"paars",
	"prijs",
	"piano",
	"pixel",
	"paden",
	"pasta",
	"pizza",
	"poten",
	"paard",
	"puber",
	"pauze",
	"preek",
	"polis",
	"pater",
	"proef",
	"panda",
	"penis",
	"prins",
	"pluto",
	"polen",
	"plint",
	"quota",
	"quant",
	"quark",
	"queue",
	"quilt",
	"quote",
	"robot",
	"reken",
	"raden",
	"regen",
	"radio",
	"rente",
	"regio",
	"rugby",
	"reden",
	"roken",
	"ruzie",
	"ruist",
	"regel",
	"racen",
	"races",
	"riool",
	"ramen",
	"radar",
	"roman",
	"rokje",
	"razen",
	"roede",
	"staan",
	"staal",
	"speel",
	"steeg",
	"stoel",
	"stook",
	"steek",
	"schep",
	"spijs",
	"stoep",
	"shirt",
	"samen",
	"sites",
	"sport",
	"spalk",
	"sjaal",
	"storm",
	"staat",
	"steun",
	"strak",
	"serie",
	"shows",
	"schat",
	"snoep",
	"sfeer",
	"smeer",
	"speer",
	"scene",
	"speld",
	"smeed",
	"smaak",
	"super",
	"stand",
	"steer",
	"smelt",
	"sedan",
	"skier",
	"sluis",
	"sneer",
	"steel",
	"truck",
	"terug",
	"typen",
	"talen",
	"taboe",
	"tegel",
	"taart",
	"tafel",
	"trouw",
	"teken",
	"teren",
	"taken",
	"treur",
	"tenen",
	"titel",
	"thuis",
	"tiara",
	"teder",
	"toets",
	"tabak",
	"trein",
	"tarwe",
	"telen",
	"teler",
	"uiten",
	"uilig",
	"uitje",
	"uiver",
	"ultra",
	"uniek",
	"uppie",
	"uraan",
	"uiers",
	"velen",
	"vloer",
	"video",
	"varen",
	"vegen",
	"veren",
	"vader",
	"vaten",
	"vuren",
	"vrouw",
	"vlees",
	"vogel",
	"vroeg",
	"vezel",
	"veins",
	"vorst",
	"veder",
	"vanaf",
	"vieze",
	"veger",
	"villa",
	"veler",
	"vrede",
	"vries",
	"woord",
	"wagen",
	"wonen",
	"waren",
	"warme",
	"weten",
	"water",
	"weren",
	"wazig",
	"wegen",
	"weven",
	"wezen",
	"weken",
	"wraak",
	"wilde",
	"wreed",
	"wrede",
	"wenst",
	"woest",
	"xenon",
	"yacht",
	"yucca",
	"zwaar",
	"zware",
	"zesde",
	"zagen",
	"zalig",
	"zomer",
	"zeden",
	"zwart",
	"zeven",
	"zicht",
	"zadel",
	"zweet",
	"zenuw",
	"zweer",
	"zweef",
	"zaden",
	"zaken",
	"zeker",
	"zever",
	"zeeen"];


var inColumn = 1; //Hier wordt aangegeven welke column je huidig in bevindt.
var inRow = 1; // Hier wordt aangegeven welke rij je huidig in bevindt.
var word = words[Math.floor(Math.random() * words.length)]; // In deze variable wordt een willekeurig word gekozen uit de worden array
var letters = [word.charAt(0),"","","",""] // Dit zorgt ervoor dat de eerste letter wordt weergeven.
var guess = []; // Hier wordt de letters opgeslagen die ingevoerd worden.
var isTyping = false; // Dit houdt bij of er getypt mag worden of niet.
var bgSound = new Audio("sound/bg.mp3") // Achtergrond muziek tijdens het spelen.

// Het Lingo Spelbord wordt hier beneden aangemaakt.

function createBoard() {
	for(rowNumber = 1; rowNumber < 6; rowNumber++){
		var Row = document.createElement("div");
		Row.id = "row_" + rowNumber;
		Row.setAttribute("class", "row");

	for (columnNumber = 1; columnNumber < 6; columnNumber++) {
		var Column = document.createElement("div");
		Row.appendChild(Column);
		Column.id = "column_" + rowNumber + "." + columnNumber;
		Column.setAttribute("class", "column");
		var par = document.createElement("p");
		Column.appendChild(par);
	}
	document.getElementById("lingoGame").appendChild(Row);
	isTyping = true;
	}
	bgSound.loop = true;
	bgSound.play();
	type();
}

// De eerste letter wordt hier toegevoegd, en elke letter die op de correcte plaats is wordt ook toegevoegd.

function addLetters() {
	for (var i = 0; i < 5; i++) {
		document.getElementById("column_" + inRow + "." + (i+1)).firstChild.innerHTML=letters[i];
		document.getElementById("column_" + inRow + "." + (i+1)).firstChild.style.opacity="0.5";
	}
}

// met de function Type wordt aangegeven dat er getypt mag worden, en dat er alleen maar letters ingevoerd mogen worden van A-Z

function type() {
	addLetters();
	document.onkeypress = function(event){
		var keyboard = String.fromCharCode(event.keyCode);
		if (keyboard.match(/[a-z]/i) && inColumn < 6 && isTyping == true){	
			document.getElementById("column_" + inRow + "." + inColumn).firstChild.style.opacity = "1.0";		
			document.getElementById("column_" + inRow + "." + inColumn++).firstChild.innerHTML = keyboard;
			guess.push(keyboard);
			console.log(guess);
			nextRow();
		}
		else if(!keyboard.match(/[a-z]/i)){
			alert("Voer een toegestaande letter in (A-Z)");
		}
	}
}

// In deze functie wordt gecheckt of de correcte letters ingevoerd zijn, als alles correct is dan krijg je een alert en wordt het spel herstart. Anders wordt de volgende rij geladen.

function check() {
    var answer = word.split("");
    console.log(answer);
    for(var rowNumber = 0; rowNumber < answer.length; rowNumber++){
        if (guess[rowNumber] == answer[rowNumber]){
        	letters[rowNumber] = answer[rowNumber];
            document.getElementById("column_" + inRow + "." + (rowNumber + 1)).style.backgroundColor = "green";
            guess[rowNumber] = " ";
            answer[rowNumber] = "*";
        }
    }
    if(checkAllValues(answer) == true){
    	isTyping = false;
    	setTimeout(function(){
    		alert("Gefeliciteerd! U heeft het correcte woord geraden!");
    		window.location.reload();
    	}, 500);
    }
    for(var rowNumber = 0; rowNumber < answer.length; rowNumber++){
        for(var columnNumber = 0; columnNumber < answer.length; columnNumber++){
            if (guess[rowNumber] == answer[columnNumber]){
                document.getElementById("column_" + inRow + "." + (rowNumber + 1)).style.backgroundColor = "yellow";
                document.getElementById("column_" + inRow + "." + (rowNumber + 1)).style.borderRadius = "90px";
                guess[rowNumber] = " ";
                answer[columnNumber] = "*";
            }
        }
    }
}

// Hier wordt de volgende rij geladen, na 5 pogingen krijg je een alert met dat je het fout heb, wat het correcte word was en wordt het spel herladen.

function nextRow() {
	if (inColumn > 5){
		check();
		if (isTyping == true){
			setTimeout(function(){
				inColumn = 1;
				inRow++;	
				if (inRow > 5) {
					alert("Jammer! Het woord was " + word + ", probeer het nog een keer!")
					window.location.reload();
				}
				addLetters();
				guess.splice(0, guess.length);
			}, 500);
		}
	}
}

// Met deze knop maak je het spel.

button2.onclick = function() {
	createBoard();
	button2.style.display = "none";
}

// Hier wordt gecheckt of alles correct is door te vragen in de array of * aanwezig is.

function checkAllValues(wordArray){
    for (var i = 0; i < wordArray.length; i++){
        if (!(wordArray[i].includes("*"))){
            return false;
        }
        if (i == wordArray.length-1){
            if (wordArray[i] != "*"){
                return false;
            }
            return true;
        }
    }
}