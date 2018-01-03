var synth = new Tone.Synth().toMaster();
var juego = 0;

var html5_audiotypes={ 
"mp3": "audio/mpeg",
"mp4": "audio/mp4",
"ogg": "audio/ogg",
"wav": "audio/wav"
}
function crearSonido(sound){
var html5audio=document.createElement('audio')
if (html5audio.canPlayType){ //Comprobar soporte para audio HTML5
for (var i=0; i<arguments.length; i++){
var sourceel=document.createElement('source')
sourceel.setAttribute('src', arguments[i])
if (arguments[i].match(/.(w+)$/i))
sourceel.setAttribute('type', html5_audiotypes[RegExp.$1])
html5audio.appendChild(sourceel)
}
html5audio.load()
html5audio.playclip=function(){
html5audio.currentTime=0
html5audio.play()
}
return html5audio
}
else{
return {playclip:function(){throw new Error('Su navegador no soporta audio HTML5')}}
}
}

//Inicializar sonidos

// SET 1
var test1 = crearSonido('libraries/test/1.wav');
var test2 = crearSonido('libraries/test/2.wav');
var test3 = crearSonido('libraries/test/3.wav');
var test4 = crearSonido('libraries/test/4.wav');
var test5 = crearSonido('libraries/test/5.wav');
var test6 = crearSonido('libraries/test/6.wav');
var test7 = crearSonido('libraries/test/7.wav');
var test8 = crearSonido('libraries/test/8.wav');
var test9 = crearSonido('libraries/test/9.wav');

var A1 = crearSonido('libraries/2/1.wav');
var A2 = crearSonido('libraries/2/2.wav');
var A3 = crearSonido('libraries/2/3.wav');
var A4 = crearSonido('libraries/2/4.wav');
var A5 = crearSonido('libraries/2/5.wav');
var A6 = crearSonido('libraries/2/6.wav');
var A7 = crearSonido('libraries/2/7.wav');
var A8 = crearSonido('libraries/2/8.wav');
var A9 = crearSonido('libraries/2/9.wav');

var B1 = crearSonido('libraries/2/10.wav');
var B2 = crearSonido('libraries/2/11.wav');
var B3 = crearSonido('libraries/2/12.wav');
var B4 = crearSonido('libraries/2/13.wav');
var B5 = crearSonido('libraries/2/14.wav');
var B6 = crearSonido('libraries/2/15.wav');
var B7 = crearSonido('libraries/2/16.wav');
var B8 = crearSonido('libraries/2/17.wav');
var B9 = crearSonido('libraries/2/18.wav');

var C1 = crearSonido('libraries/2/19.wav');
var C2 = crearSonido('libraries/2/20.wav');
var C3 = crearSonido('libraries/2/21.wav');
var C4 = crearSonido('libraries/2/22.wav');
var C5 = crearSonido('libraries/2/23.wav');
var C6 = crearSonido('libraries/2/24.wav');
var C7 = crearSonido('libraries/2/31.wav');
var C8 = crearSonido('libraries/2/32.wav');
var C9 = crearSonido('libraries/2/33.wav');

var D1 = crearSonido('libraries/2/34.wav');
var D2 = crearSonido('libraries/2/35.wav');
var D3 = crearSonido('libraries/2/36.wav');
var D4 = crearSonido('libraries/2/38.wav');
var D5 = crearSonido('libraries/2/39.wav');
var D6 = crearSonido('libraries/2/40.wav');
var D7 = crearSonido('libraries/2/41.wav');
var D8 = crearSonido('libraries/2/42.wav');
var D9 = crearSonido('libraries/2/43.wav');

var E1 = crearSonido('libraries/1/1.wav');
var E2 = crearSonido('libraries/1/2.wav');
var E3 = crearSonido('libraries/1/3.wav');
var E4 = crearSonido('libraries/1/4.wav');
var E5 = crearSonido('libraries/1/5.wav');
var E6 = crearSonido('libraries/1/6.wav');
var E7 = crearSonido('libraries/1/7.wav');
var E8 = crearSonido('libraries/1/8.wav');
var E9 = crearSonido('libraries/1/9.wav');


var juego1 = [];
var juego2 = [];
var juego3 = [];
var juego4 = [];
var juego5 = [];
var juego6 = [];
var juego7 = [];
var juego8 = [];
var juego9 = [];

setJuegos();
function setJuegos(){
juego1 = [test1, A1, B1, C1, D1, E1]
juego2 = [test2, A2, B2, C2, D2, E2]
juego3 = [test3, A3, B3, C3, D3, E3]
juego4 = [test4, A4, B4, C4, D4, E4]
juego5 = [test5, A5, B5, C5, D5, E5]
juego6 = [test6, A6, B6, C6, D6, E6]
juego7 = [test7, A7, B7, C7, D7, E7]
juego8 = [test8, A8, B8, C8, D8, E8]
juego9 = [test9, A9, B9, C9, D9, E9]
}

var looper = 0;
var stop = 0;
function setup() {
	$(document).keydown(function(tecla){
			switch(tecla.keyCode ){
				case 103:
				if(looper==1){
					loopers[0] = 1;
				}
				reproducir(juego1[juego],0);
				break;
				case 104:
				if(looper==1){
					loopers[1] = 1;
				}
				reproducir(juego2[juego],1);
				break;
				case 105:
				if(looper==1){
					loopers[2] = 1;
				}
				reproducir(juego3[juego],2);
				break;
				case 100:
				if(looper==1){
					loopers[3] = 1;
				}
				reproducir(juego4[juego],3);
				break;
				case 101:
				if(looper==1){
					loopers[4] = 1;
				}
				reproducir(juego5[juego],4);
				break;
				case 102:
				if(looper==1){
					loopers[5] = 1;
				}
				reproducir(juego6[juego],5);
				break;
				case 97:
				if(looper==1){
					loopers[6] = 1;
				}
				reproducir(juego7[juego],6)
				break;
				case 98:
				if(looper==1){
					loopers[7] = 1;
				}
				reproducir(juego8[juego],7);
				break;
				case 99:
				if(looper==1){
					loopers[8] = 1;
				}
				reproducir(juego9[juego],8);
				break;
				case 107:
					if ( juego < juego1.length - 1)
					 juego += 1;
					kitnumber(juego);
					 break;
				case 109:
					if (juego > 0)
					juego -= 1;
					kitnumber(juego);
				break;
				/*case 96:
				if(stop == 1){
					stop = 0 ;
				}else if (looper == 1){
					console.log("rec Off")
					looper=0;
				}else if(looper == 0){
					console.log("rec")
					looper= 1;
				}
				break;*/
				case 106:
				if (stop == 1){
					stop=0;
				}else if(stop == 0){
					stop= 1;
				}
				break;
		}
	});

}
var loopers = [];
for (var i = 0; i < 9; i++) {
	loopers[i] = 0;
}
function rep(sound, btn){
	console.log("rep")
	sound.playclip()
		Tap(btn);
}
var looped = [];
function reproducir(sonido, btn){
	if(loopers[btn] == 0){
		sonido.playclip();
		Tap(btn);
		}else if(loopers[btn] == 1){
			looped[btn] = setInterval(function(){console.log("rep")
			sonido.playclip()
			Tap(btn);
			loopers[btn]=0;}, BPM);
		}else if(stop == 1){
			clearInterval(looped[btn]);
		}
	}


var BPM = 668;  // 2668
var colors = ["AliceBlue","AntiqueWhite","Aqua","Aquamarine","Azure","Beige","Bisque","Black","BlanchedAlmond","Blue","BlueViolet","Brown","BurlyWood","CadetBlue","Chartreuse","Chocolate","Coral","CornflowerBlue","Cornsilk","Crimson","Cyan","DarkBlue","DarkCyan","DarkGoldenRod","DarkGray","DarkGrey","DarkGreen","DarkKhaki","DarkMagenta","DarkOliveGreen","Darkorange","DarkOrchid","DarkRed","DarkSalmon","DarkSeaGreen","DarkSlateBlue","DarkSlateGray","DarkSlateGrey","DarkTurquoise","DarkViolet","DeepPink","DeepSkyBlue","DimGray","DimGrey","DodgerBlue","FireBrick","FloralWhite","ForestGreen","Fuchsia","Gainsboro","GhostWhite","Gold","GoldenRod","Gray","Grey","Green","GreenYellow","HoneyDew","HotPink","IndianRed","Indigo","Ivory","Khaki","Lavender","LavenderBlush","LawnGreen","LemonChiffon","LightBlue","LightCoral","LightCyan","LightGoldenRodYellow","LightGray","LightGrey","LightGreen","LightPink","LightSalmon","LightSeaGreen","LightSkyBlue","LightSlateGray","LightSlateGrey","LightSteelBlue","LightYellow","Lime","LimeGreen","Linen","Magenta","Maroon","MediumAquaMarine","MediumBlue","MediumOrchid","MediumPurple","MediumSeaGreen","MediumSlateBlue","MediumSpringGreen","MediumTurquoise","MediumVioletRed","MidnightBlue","MintCream","MistyRose","Moccasin","NavajoWhite","Navy","OldLace","Olive","OliveDrab","Orange","OrangeRed","Orchid","PaleGoldenRod","PaleGreen","PaleTurquoise","PaleVioletRed","PapayaWhip","PeachPuff","Peru","Pink","Plum","PowderBlue","Purple","Red","RosyBrown","RoyalBlue","SaddleBrown","Salmon","SandyBrown","SeaGreen","SeaShell","Sienna","Silver","SkyBlue","SlateBlue","SlateGray","SlateGrey","Snow","SpringGreen","SteelBlue","Tan","Teal","Thistle","Tomato","Turquoise","Violet","Wheat","White","WhiteSmoke","Yellow","YellowGreen"];
function Tap(pad){
	document.getElementsByClassName("toggle")[pad].style.background = colors[Math.round(Math.random()*(colors.length-1))];
	var tiempo = setTimeout(function(){document.getElementsByClassName("toggle")[pad].style.background = "#ccd0d4";}, 120);
}


/*
document.getElementById("textarea").addEventListener("click", clear);

function clear() {
	document.getElementById('textarea').innerHTML = "";
}
*/