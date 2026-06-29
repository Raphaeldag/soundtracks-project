function createAudio(src) {
	const audio = new Audio(src);
	audio.preload = "metadata";
	return audio;
}

function registerButtons(buttons, musics) {
	for (let i = 0; i < buttons.length; i++) {
		buttons[i].addEventListener("click", () => {
			stopAllMusics();
			currentMusic = musics[i];
			currentMusic.play();
		});
	}
}

// FUNCTION PARA PARAR TODAS AS MUSICAS
function stopAllMusics() {
	const allMusics = [
		...musics2521,
		...musicsKimBokJoo,
		...musicsMrRobot,
		...musicsMrPlankton,
		...musicsTheLongWalk,
		...musicsElemental,
		...musicsClouds,
		...musicsWordsBubble,
		...musicsKoeNoKatachi,
		...musicsBlueBox,
		...musicsAhiruNoSora,
		...musicsYourLieInApril,
		...musicsSousouNoFrieren,
		...musicsDrStone,
	];
	allMusics.forEach((music) => {
		music.pause();
		music.currentTime = 0;
	});
}

// SPACE PAUSAR A MUSICA CORRENTE
document.addEventListener("keydown", function (event) {
	if (event.code === "Space" && currentMusic) {
		event.preventDefault();
		if (currentMusic.paused) {
			currentMusic.play();
		} else {
			currentMusic.pause();
		}
	}
});

let currentMusic = null;

// 2521 CONTAINER
const musics2521 = [
	createAudio("sounds/tvSeries/2521/Very, Slowly.mp3"),
	createAudio("sounds/tvSeries/2521/Free.mp3"),
	createAudio("sounds/tvSeries/2521/You Are My Dream.mp3"),
	createAudio("sounds/tvSeries/2521/Will.mp3"),
	createAudio("sounds/tvSeries/2521/Missing You.mp3"),
	createAudio("sounds/tvSeries/2521/Your Existence.mp3"),
	createAudio("sounds/tvSeries/2521/Starlight.mp3"),
];
const buttons2521 = document.querySelectorAll(".button2521");

// KIM BOK JOOC CONTAINER
const musicsKimBokJoo = [
	createAudio("sounds/tvSeries/kim-bok-joo/Dreams.mp3"),
	createAudio("sounds/tvSeries/kim-bok-joo/pick you up.mp3"),
	createAudio("sounds/tvSeries/kim-bok-joo/Clear.mp3"),
	createAudio("sounds/tvSeries/kim-bok-joo/Another dream, one mind.mp3"),
	createAudio("sounds/tvSeries/kim-bok-joo/Consolation.mp3"),
	createAudio("sounds/tvSeries/kim-bok-joo/Little girl become a woman.mp3"),
	createAudio("sounds/tvSeries/kim-bok-joo/Lost dreams.mp3"),
	createAudio("sounds/tvSeries/kim-bok-joo/On that day we.mp3"),
	createAudio("sounds/tvSeries/kim-bok-joo/See you again, ddung!.mp3"),
];
const buttonsKimBokJoo = document.querySelectorAll(".button-kimBokJoo");

// MR PLANKTON CONTAINER
const musicsMrPlankton = [
	createAudio("sounds/tvSeries/mr-plankton/Umbrella.mp3"),
	createAudio("sounds/tvSeries/mr-plankton/smile.mp3"),
	createAudio("sounds/tvSeries/mr-plankton/my wish is.mp3"),
	createAudio("sounds/tvSeries/mr-plankton/snow.mp3"),
];
const buttonsMrPlankton = document.querySelectorAll(".button-mrPlankton");

// MR ROBOT CONTAINER
const musicsMrRobot = [
	createAudio("sounds/tvSeries/mr.robot/Going for a walk.mp3"),
	createAudio("sounds/tvSeries/mr.robot/Darlene Knew.mp3"),
	createAudio("sounds/tvSeries/mr.robot/Outro-m83.mp3"),
	createAudio("sounds/tvSeries/mr.robot/The best part.mp3"),
];
const buttonsMrRobot = document.querySelectorAll(".button-mrRobot");

// THE LONG WALK CONTAINER
const musicsTheLongWalk = [
	createAudio("sounds/movies/the-long-walk/olson_1.mp3"),
	createAudio("sounds/movies/the-long-walk/mom_1.mp3"),
];
const buttonsTheLongWalk = document.querySelectorAll(".button-theLongWalk");

// ELEMENTAL
const musicsElemental = [
	createAudio("sounds/movies/elemental/Steal-The-Show.mp3"),
	createAudio("sounds/movies/elemental/Bubble-Date.mp3"),
];
const buttonsElemental = document.querySelectorAll(".button-elemental");

// CLOUDS
const musicsClouds = [
	createAudio("sounds/movies/clouds/clouds.mp3"),
	createAudio("sounds/movies/clouds/Expectations.mp3"),
	createAudio("sounds/movies/clouds/Upward.mp3"),
	createAudio("sounds/movies/clouds/Moments-Fade.mp3"),
];
const buttonsClouds = document.querySelectorAll(".button-clouds");

// WORDS BUBBLE UP LIKE SODA POP
const musicsWordsBubble = [
	createAudio("sounds/animes/words-bubble/Kawaii!!.mp3"),
	createAudio("sounds/animes/words-bubble/Closer sig.mp3"),
	createAudio("sounds/animes/words-bubble/Detour.mp3"),
	createAudio("sounds/animes/words-bubble/Sepia.mp3"),
	createAudio("sounds/animes/words-bubble/Soda bottle baby.mp3"),
	createAudio("sounds/animes/words-bubble/Sunny.mp3"),
	createAudio("sounds/animes/words-bubble/Sunset like an orange.mp3"),
	createAudio("sounds/animes/words-bubble/Tears.mp3"),
];
const buttonsWordsBubble = document.querySelectorAll(".button-wordsBubble");

// KOE NO KATACHI
const musicsKoeNoKatachi = [
	createAudio("sounds/animes/koe-no-katachi/heart beat.mp3"),
	createAudio("sounds/animes/koe-no-katachi/svg.mp3"),
	createAudio("sounds/animes/koe-no-katachi/thn.mp3"),
	createAudio("sounds/animes/koe-no-katachi/van.mp3"),
	createAudio("sounds/animes/koe-no-katachi/btf.mp3"),
	createAudio("sounds/animes/koe-no-katachi/van (var).mp3"),
	createAudio("sounds/animes/koe-no-katachi/Ivs (var).mp3"),
	createAudio("sounds/animes/koe-no-katachi/tre.mp3"),
	createAudio("sounds/animes/koe-no-katachi/vignette.mp3"),
	createAudio("sounds/animes/koe-no-katachi/lit (var).mp3"),
];
const buttonsKoeNoKatachi = document.querySelectorAll(".button-koeNoKatachi");

// BLUE BOX
const musicsBlueBox = [
	createAudio("sounds/animes/blue-box/chinatsu.mp3"),
	createAudio("sounds/animes/blue-box/grateful.mp3"),
	createAudio("sounds/animes/blue-box/after all, it's frustrating.mp3"),
	createAudio("sounds/animes/blue-box/words from a loved one.mp3"),
	createAudio("sounds/animes/blue-box/the relationship between the two.mp3"),
];
const buttonsBlueBox = document.querySelectorAll(".button-blueBox");

// AHIRU NO SORA
const musicsAhiruNoSora = [
	createAudio("sounds/animes/ahiru-no-sora/true winner.mp3"),
	createAudio("sounds/animes/ahiru-no-sora/share the beat.mp3"),
	createAudio("sounds/animes/ahiru-no-sora/i'm not alone.mp3"),
	createAudio("sounds/animes/ahiru-no-sora/why.mp3"),
	createAudio("sounds/animes/ahiru-no-sora/Myself in thought.mp3"),
];
const buttonsAhiruNoSora = document.querySelectorAll(".button-ahiruNoSora");

// YOUR LIE IN APRIL
const musicsYourLieInApril = [
	createAudio("sounds/animes/your-lie-in-april/Friend A.mp3"),
	createAudio("sounds/animes/your-lie-in-april/Watashi violinist na no.mp3"),
	createAudio("sounds/animes/your-lie-in-april/Otouto Mitai Na Sonzai.mp3"),
];
const buttonsYourLieInApril = document.querySelectorAll(".button-yourLieInApril");

// SOUSOU NO FRIEREN
const musicsSousouNoFrieren = [
	createAudio("sounds/animes/frieren/Where the Blue-Moon Weed Grows.mp3"),
	createAudio("sounds/animes/frieren/Farewell, my friend.mp3"),
	createAudio("sounds/animes/frieren/Gone, but not forgotten.mp3"),
	createAudio("sounds/animes/frieren/Knife to the Throat.mp3"),
];
const buttonsSousouNoFrieren = document.querySelectorAll(".button-sousouNoFrieren");

// DR STONE
const musicsDrStone = [
	createAudio("sounds/animes/dr-stone/Thousands Of Years May Have Passed….mp3"),
	createAudio("sounds/animes/dr-stone/Meeting again.mp3"),
	createAudio("sounds/animes/dr-stone/i'm not alone.mp3"),
	createAudio("sounds/animes/dr-stone/Cube.mp3"),
];
const buttonsDrStone = document.querySelectorAll(".button-drStone");

registerButtons(buttons2521, musics2521);
registerButtons(buttonsKimBokJoo, musicsKimBokJoo);
registerButtons(buttonsMrPlankton, musicsMrPlankton);
registerButtons(buttonsMrRobot, musicsMrRobot);
registerButtons(buttonsTheLongWalk, musicsTheLongWalk);
registerButtons(buttonsElemental, musicsElemental);
registerButtons(buttonsClouds, musicsClouds);
registerButtons(buttonsWordsBubble, musicsWordsBubble);
registerButtons(buttonsBlueBox, musicsBlueBox);
registerButtons(buttonsKoeNoKatachi, musicsKoeNoKatachi);
registerButtons(buttonsAhiruNoSora, musicsAhiruNoSora);
registerButtons(buttonsYourLieInApril, musicsYourLieInApril);
registerButtons(buttonsSousouNoFrieren, musicsSousouNoFrieren);
registerButtons(buttonsDrStone, musicsDrStone);
