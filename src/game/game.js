const ASSET_FALLBACKS = {
	PLAYER_SHEET: "/generated-assets/player_sheet-transparent.webp",
	ENEMY_SHEET: "/generated-assets/enemy_sheet-transparent.webp",
	MINOTAUR_SHEET: "/generated-assets/minotaur_sheet-transparent.webp",
	PICKUP_ATLAS: "/generated-assets/pickup_atlas-transparent.webp",
	CAVE_ATLAS: "/generated-assets/cave_atlas-transparent.webp",
	BARREL_ATLAS: "/generated-assets/barrel_atlas-transparent.webp",
	GUIDE_NPC_ATLAS: "/generated-assets/guide_npc_atlas-transparent.webp",
	GUIDE_FRONT_JUMP_ATLAS: "/generated-assets/guide_front_jump_atlas-transparent.webp",
	CAVE_BACKDROP: "/generated-assets/cave_backdrop.webp",
	EFFECT_SHEET: "/generated-assets/effect_sheet-transparent.webp",
};

const WORLD = { width: 7400, height: 820 };
const VIEW_HEIGHT = 640;
const PLAYER_MAX_HP = 5;
const BOSS_ROOM = { x: 6580, y: 176, w: 760, h: 498 };
const SECOND_FLOOR_PORTAL = { x: 7240, y: 620, w: 86, h: 142 };
const LANGUAGE_ORDER = ["es", "en", "pt", "fr", "de", "it"];

const BASE_CONFIG = {
	playerSpeed: 255,
	swordDamage: 2,
	magicDamage: 1,
	enemySpeedMultiplier: 1,
	dashSpeed: 560,
	barrelSpawnChance: 0.72,
	enemyDropChance: 0.38,
	effectsIntensity: 1,
};

const LEVEL = {
	start: { x: 86, y: 620 },
	platforms: [
		{ x: -40, y: 620, w: 560, h: 54 },
		{ x: 650, y: 620, w: 430, h: 54 },
		{ x: 1220, y: 620, w: 360, h: 54 },
		{ x: 1710, y: 620, w: 390, h: 54 },
		{ x: 2250, y: 620, w: 460, h: 54 },
		{ x: 2840, y: 620, w: 420, h: 54 },
		{ x: 3520, y: 620, w: 440, h: 54 },
		{ x: 4200, y: 620, w: 900, h: 54 },
		{ x: 245, y: 490, w: 330, h: 44 },
		{ x: 610, y: 395, w: 250, h: 44 },
		{ x: 965, y: 500, w: 250, h: 44 },
		{ x: 1315, y: 420, w: 260, h: 44 },
		{ x: 1650, y: 330, w: 260, h: 44 },
		{ x: 2040, y: 470, w: 280, h: 44 },
		{ x: 2380, y: 365, w: 260, h: 44 },
		{ x: 2745, y: 455, w: 280, h: 44 },
		{ x: 3130, y: 350, w: 260, h: 44 },
		{ x: 3460, y: 450, w: 260, h: 44 },
		{ x: 3810, y: 540, w: 280, h: 44 },
		{ x: 4170, y: 410, w: 300, h: 44 },
		{ x: 4550, y: 500, w: 260, h: 44 },
		{ x: 4905, y: 390, w: 260, h: 44 },
		{ x: 5250, y: 520, w: 280, h: 44 },
		{ x: 5610, y: 430, w: 270, h: 44 },
		{ x: 5950, y: 335, w: 260, h: 44 },
		{ x: 6285, y: 500, w: 260, h: 44 },
		{ x: 6500, y: 620, w: 155, h: 54 },
		{ x: 6670, y: 620, w: 680, h: 54 },
	],
	decor: [
		{ type: "crystal_cluster", x: 120, y: 620, w: 80, h: 88 },
		{ type: "crystal_cluster", x: 520, y: 480, w: 64, h: 72 },
		{ type: "crystal_cluster", x: 1190, y: 620, w: 62, h: 70 },
		{ type: "crystal_cluster", x: 1845, y: 330, w: 76, h: 82 },
		{ type: "crystal_cluster", x: 2385, y: 365, w: 72, h: 78 },
		{ type: "crystal_cluster", x: 3215, y: 350, w: 76, h: 84 },
		{ type: "crystal_cluster", x: 3900, y: 540, w: 74, h: 82 },
		{ type: "crystal_cluster", x: 4575, y: 500, w: 70, h: 80 },
		{ type: "crystal_cluster", x: 5000, y: 390, w: 68, h: 76 },
		{ type: "crystal_cluster", x: 5730, y: 430, w: 74, h: 82 },
		{ type: "crystal_cluster", x: 6065, y: 335, w: 70, h: 78 },
		{ type: "crystal_cluster", x: 6885, y: 620, w: 86, h: 96 },
		{ type: "stalactite", x: 390, y: 120, w: 78, h: 96 },
		{ type: "stalactite", x: 880, y: 105, w: 70, h: 90 },
		{ type: "stalactite", x: 1530, y: 95, w: 72, h: 92 },
		{ type: "stalactite", x: 2290, y: 120, w: 76, h: 96 },
		{ type: "stalactite", x: 3050, y: 96, w: 76, h: 96 },
		{ type: "stalactite", x: 3720, y: 128, w: 76, h: 96 },
		{ type: "stalactite", x: 4470, y: 112, w: 76, h: 96 },
		{ type: "stalactite", x: 5310, y: 105, w: 76, h: 96 },
		{ type: "stalactite", x: 6030, y: 92, w: 76, h: 96 },
		{ type: "stalactite", x: 6760, y: 120, w: 76, h: 96 },
		{ type: "ladder", x: 315, y: 480, w: 58, h: 142 },
		{ type: "ladder", x: 1700, y: 330, w: 58, h: 292 },
		{ type: "ladder", x: 3165, y: 350, w: 58, h: 270 },
		{ type: "ladder", x: 5985, y: 335, w: 58, h: 287 },
	],
	pickups: [
		{ type: "emerald", x: 300, y: 438 },
		{ type: "double_jump", x: 480, y: 578 },
		{ type: "emerald", x: 780, y: 354 },
		{ type: "emerald", x: 1425, y: 378 },
		{ type: "double_jump", x: 1880, y: 578 },
		{ type: "emerald", x: 2470, y: 322 },
		{ type: "emerald", x: 3305, y: 308 },
		{ type: "emerald", x: 4330, y: 368 },
		{ type: "double_jump", x: 5020, y: 348 },
		{ type: "emerald", x: 5350, y: 478 },
		{ type: "emerald", x: 6065, y: 292 },
		{ type: "emerald", x: 6375, y: 458 },
	],
	barrelSpots: [
		{ x: 470, y: 620 },
		{ x: 720, y: 395 },
		{ x: 1025, y: 500 },
		{ x: 1435, y: 420 },
		{ x: 1860, y: 620 },
		{ x: 2190, y: 470 },
		{ x: 2570, y: 365 },
		{ x: 3020, y: 620 },
		{ x: 3235, y: 350 },
		{ x: 3630, y: 450 },
		{ x: 3970, y: 540 },
		{ x: 4390, y: 410 },
		{ x: 4690, y: 500 },
		{ x: 5015, y: 390 },
		{ x: 5430, y: 520 },
		{ x: 5725, y: 430 },
		{ x: 6055, y: 335 },
		{ x: 6355, y: 500 },
		{ x: 6810, y: 620 },
	],
	enemies: [
		{ type: "zombie", x: 705, y: 620, minX: 660, maxX: 1020 },
		{ type: "bat", x: 790, y: 330, minX: 620, maxX: 945 },
		{ type: "crawler", x: 1380, y: 620, minX: 1240, maxX: 1540 },
		{ type: "bat", x: 1510, y: 365, minX: 1320, maxX: 1900 },
		{ type: "zombie", x: 1870, y: 620, minX: 1725, maxX: 2050 },
		{ type: "crawler", x: 2310, y: 620, minX: 2260, maxX: 2680 },
		{ type: "bat", x: 2800, y: 405, minX: 2620, maxX: 3210 },
		{ type: "zombie", x: 3060, y: 620, minX: 2860, maxX: 3240 },
		{ type: "crawler", x: 3620, y: 620, minX: 3530, maxX: 3920 },
		{ type: "bat", x: 3920, y: 470, minX: 3730, maxX: 4230 },
		{ type: "zombie", x: 4440, y: 620, minX: 4210, maxX: 4700 },
		{ type: "crawler", x: 5260, y: 620, minX: 5260, maxX: 5510 },
		{ type: "bat", x: 5660, y: 380, minX: 5330, maxX: 5900 },
		{ type: "zombie", x: 6250, y: 620, minX: 5980, maxX: 6460 },
	],
};

const ENEMY_STATS = {
	bat: { hp: 2, w: 54, h: 34, speed: 70, score: 60, anim: "bat_fly", height: 52 },
	zombie: { hp: 3, w: 42, h: 66, speed: 48, score: 90, anim: "zombie_walk", height: 74 },
	crawler: { hp: 4, w: 62, h: 34, speed: 62, score: 110, anim: "crawler_scuttle", height: 48 },
};

const TEXT = {
		es: {
		loading: "Cargando la cueva...",
		start: "Toca para empezar",
		lost: "Has caído",
		won: "Portal al segundo piso",
		retry: "toca para reintentar",
		again: "toca para jugar otra vez",
		score: "Puntaje",
		pause: "Pausa",
		resume: "Reanudar",
		exit: "Salir",
		language: "Idioma: ES",
		volume: "Volumen",
		best: "Mejor",
		boss: "MINOTAURO",
		portal: "Piso 2 pronto",
		sealed: "La sala se sella",
		guide: ["Controles:", "A/D moverte · W saltar", "Shift dash · J espada", "K magia · S+K descenso", "W+K fuego arriba"],
	},
	en: {
		loading: "Loading the cave...",
		start: "Tap to start",
		lost: "You fell",
		won: "Portal to floor 2",
		retry: "tap to retry",
		again: "tap to play again",
		score: "Score",
		pause: "Pause",
		resume: "Resume",
		exit: "Exit",
		language: "Language: EN",
		volume: "Volume",
		best: "Best",
		boss: "MINOTAUR",
		portal: "Floor 2 soon",
		sealed: "The room seals",
		guide: ["Controls:", "A/D move · W jump", "Shift dash · J sword", "K magic · S+K dive", "W+K upward fire"],
	},
	pt: {
		loading: "Carregando a caverna...",
		start: "Toque para começar",
		lost: "Você caiu",
		won: "Portal do 2º piso",
		retry: "toque para tentar de novo",
		again: "toque para jogar de novo",
		score: "Pontos",
		pause: "Pausa",
		resume: "Continuar",
		exit: "Sair",
		language: "Idioma: PT",
		volume: "Volume",
		best: "Recorde",
		boss: "MINOTAURO",
		portal: "Piso 2 em breve",
		sealed: "A sala se sela",
		guide: ["Controles:", "A/D mover · W saltar", "Shift dash · J espada", "K magia · S+K descer", "W+K fogo para cima"],
	},
	fr: {
		loading: "Chargement de la caverne...",
		start: "Touchez pour commencer",
		lost: "Vous êtes tombé",
		won: "Portail vers l'étage 2",
		retry: "touchez pour réessayer",
		again: "touchez pour rejouer",
		score: "Score",
		pause: "Pause",
		resume: "Reprendre",
		exit: "Quitter",
		language: "Langue: FR",
		volume: "Volume",
		best: "Meilleur",
		boss: "MINOTAURE",
		portal: "Étage 2 bientôt",
		sealed: "La salle se scelle",
		guide: ["Contrôles:", "A/D bouger · W sauter", "Shift dash · J épée", "K magie · S+K descente", "W+K feu vers le haut"],
	},
	de: {
		loading: "Höhle lädt...",
		start: "Tippen zum Starten",
		lost: "Du bist gefallen",
		won: "Portal zu Ebene 2",
		retry: "tippen zum Wiederholen",
		again: "tippen zum Neustart",
		score: "Punkte",
		pause: "Pause",
		resume: "Weiter",
		exit: "Beenden",
		language: "Sprache: DE",
		volume: "Lautstärke",
		best: "Bestwert",
		boss: "MINOTAURUS",
		portal: "Ebene 2 bald",
		sealed: "Der Raum versiegelt sich",
		guide: ["Steuerung:", "A/D bewegen · W springen", "Shift dash · J Schwert", "K Magie · S+K Sturz", "W+K Feuer nach oben"],
	},
	it: {
		loading: "Caricamento caverna...",
		start: "Tocca per iniziare",
		lost: "Sei caduto",
		won: "Portale al piano 2",
		retry: "tocca per riprovare",
		again: "tocca per rigiocare",
		score: "Punti",
		pause: "Pausa",
		resume: "Riprendi",
		exit: "Esci",
		language: "Lingua: IT",
		volume: "Volume",
		best: "Migliore",
		boss: "MINOTAURO",
		portal: "Piano 2 presto",
		sealed: "La sala si sigilla",
		guide: ["Comandi:", "A/D muovi · W salta", "Shift dash · J spada", "K magia · S+K discesa", "W+K fuoco in alto"],
	},
};

export function createGame({ mount, sdk, tweaks, assets }) {
	let root;
	let canvas;
	let ctx;
	let overlay;
	let overlayTitle;
	let overlayText;
	let controls;
	let pauseButton;
	let pauseMenu;
	let pauseTitle;
	let pauseResumeButton;
	let pauseExitButton;
	let languageButton;
	let volumeSlider;
	let resizeObserver;
	let animationFrame = 0;
	let lastTime = 0;
	let endedSubmitted = false;
	let assetsReady = false;
	let assetError = null;
	let cssWidth = 0;
	let cssHeight = 0;
	let viewWidth = 360;
	let scale = 1;
	let language = "es";
	let volume = 0.65;
	let audioHandle = null;
	let audioContext = null;
	const loaded = { images: {}, frames: {} };
	const unsubscribes = [];
	const config = { ...BASE_CONFIG };
	const input = {
		left: false,
		right: false,
		up: false,
		down: false,
		jump: false,
		jumpWasDown: false,
	};
	const camera = { x: 0, y: 62, shake: 0 };
	const game = createInitialState();

	function applyTweaks() {
		for (const key of Object.keys(BASE_CONFIG)) {
			const value = tweaks?.get?.(key);
			if (Number.isFinite(value)) config[key] = value;
			const unsubscribe = tweaks?.subscribe?.(key, (next) => {
				if (Number.isFinite(next)) config[key] = next;
			});
			if (typeof unsubscribe === "function") unsubscribes.push(unsubscribe);
		}
	}

	function createInitialState() {
		return {
			mode: "loading",
			time: 0,
			score: 0,
			best: 0,
			message: "",
			messageTimer: 0,
			player: createPlayer(),
			enemies: [],
			pickups: [],
			barrels: [],
			projectiles: [],
			effects: [],
			boss: createBoss(),
			bossRoomLocked: false,
			bossRoomCleared: false,
		};
	}

	function createPlayer() {
		return {
			x: LEVEL.start.x,
			y: LEVEL.start.y,
			lastSafeX: LEVEL.start.x,
			lastSafeY: LEVEL.start.y,
			vx: 0,
			vy: 0,
			w: 34,
			h: 62,
			dir: 1,
			hp: PLAYER_MAX_HP,
			armor: false,
			doubleJumpCharges: 0,
			grounded: false,
			invuln: 0,
			swordCooldown: 0,
			magicCooldown: 0,
			dashCooldown: 0,
			dashTimer: 0,
			dashDir: 1,
			canAirDash: true,
			attackTimer: 0,
			castTimer: 0,
			slamActive: false,
			slamArmed: false,
		};
	}

	function createBoss() {
		return {
			type: "boss",
			x: 7040,
			y: 620,
			w: 104,
			h: 140,
			hp: 22,
			maxHp: 22,
			dir: -1,
			active: false,
			dead: false,
			attackTimer: 0,
			attackCooldown: 1.3,
			hurt: 0,
		};
	}

	function resetRun(mode = "ready") {
		const previousBest = game.best;
		Object.assign(game, createInitialState());
		game.best = previousBest || 0;
		game.mode = mode;
		game.enemies = LEVEL.enemies.filter((enemy) => enemy.type === "bat" || hasPlatformUnder(enemy.x, enemy.y)).map((enemy, index) => {
			const stats = ENEMY_STATS[enemy.type];
			return {
				...enemy,
				id: `${enemy.type}-${index}`,
				hp: stats.hp,
				maxHp: stats.hp,
				w: stats.w,
				h: stats.h,
				dir: index % 2 === 0 ? -1 : 1,
				dead: false,
				hurt: 0,
				phase: index * 0.8,
				vx: 0,
				vy: 0,
				grounded: enemy.type === "bat",
				alert: 0,
				spawnY: enemy.y,
				jumpCooldown: 0.4 + index * 0.05,
			};
		});
		game.pickups = LEVEL.pickups.map((pickup, index) => ({ ...pickup, id: `pickup-${index}`, collected: false }));
		game.barrels = LEVEL.barrelSpots
			.filter(() => Math.random() <= config.barrelSpawnChance)
			.map((barrel, index) => ({
				...barrel,
				id: `barrel-${index}`,
				hp: 2,
				broken: false,
				loot: chooseBarrelLoot(),
			}));
		game.projectiles = [];
		game.effects = [];
		endedSubmitted = false;
		camera.x = 0;
		camera.shake = 0;
		input.left = false;
		input.right = false;
		input.up = false;
		input.down = false;
		input.jump = false;
		input.jumpWasDown = false;
		updateOverlay();
	}

	async function startRun() {
		if (!assetsReady || game.mode === "playing") return;
		if (game.mode !== "ready") resetRun("playing");
		await unlockAudio();
		game.mode = "playing";
		overlay.hidden = true;
		setPauseVisible(false);
		pulse(18);
		playTone(420, 0.08, "triangle");
	}

	function buildDom() {
		root = document.createElement("section");
		root.className = "cave-game";

		canvas = document.createElement("canvas");
		canvas.className = "game-surface cave-canvas";
		canvas.setAttribute("aria-label", "Eclipse del Abismo");
		ctx = canvas.getContext("2d");
		ctx.imageSmoothingEnabled = false;

		overlay = document.createElement("button");
		overlay.className = "start-overlay";
		overlay.type = "button";
		overlay.innerHTML = `
			<span class="overlay-panel">
				<strong class="overlay-title"></strong>
				<span class="overlay-text"></span>
			</span>
		`;
		overlayTitle = overlay.querySelector(".overlay-title");
		overlayText = overlay.querySelector(".overlay-text");
		overlay.addEventListener("pointerup", () => {
			if (game.mode === "ready") startRun();
			else if (game.mode === "lost" || game.mode === "won") {
				resetRun("playing");
				overlay.hidden = true;
			}
		});

		controls = document.createElement("div");
		controls.className = "touch-controls";
		controls.innerHTML = `
			<div class="move-pad" aria-label="Controles de movimiento">
				<button type="button" data-hold="jump" aria-label="Saltar">▲</button>
				<button type="button" data-hold="left" aria-label="Mover izquierda">◀</button>
				<button type="button" data-hold="down" aria-label="Mirar o golpear hacia abajo">▼</button>
				<button type="button" data-hold="right" aria-label="Mover derecha">▶</button>
			</div>
			<div class="action-pad" aria-label="Acciones">
				<button type="button" data-action="sword" aria-label="Ataque de espada">Espada</button>
				<button type="button" data-action="magic" aria-label="Hechizo mágico">Magia</button>
				<button type="button" data-action="dash" aria-label="Dash">Dash</button>
			</div>
		`;

		pauseButton = document.createElement("button");
		pauseButton.className = "pause-button";
		pauseButton.type = "button";
		pauseButton.setAttribute("aria-label", "Pausa");
		pauseButton.textContent = "Ⅱ";
		pauseButton.addEventListener("pointerup", (event) => {
			event.preventDefault();
			togglePause();
		});

		pauseMenu = document.createElement("div");
		pauseMenu.className = "pause-menu";
		pauseMenu.hidden = true;
		pauseMenu.innerHTML = `
			<section class="pause-card" role="dialog" aria-modal="true">
				<h2></h2>
				<label class="volume-row"><span></span><input type="range" min="0" max="1" step="0.05"></label>
				<button type="button" data-pause="language"></button>
				<button type="button" data-pause="resume"></button>
				<button type="button" data-pause="exit"></button>
			</section>
		`;
		pauseTitle = pauseMenu.querySelector("h2");
		volumeSlider = pauseMenu.querySelector("input");
		languageButton = pauseMenu.querySelector('[data-pause="language"]');
		pauseResumeButton = pauseMenu.querySelector('[data-pause="resume"]');
		pauseExitButton = pauseMenu.querySelector('[data-pause="exit"]');
		volumeSlider.value = String(volume);
		volumeSlider.addEventListener("input", () => {
			volume = Number(volumeSlider.value);
			playTone(240 + volume * 360, 0.035, "sine");
		});
		languageButton.addEventListener("click", () => {
			language = LANGUAGE_ORDER[(LANGUAGE_ORDER.indexOf(language) + 1) % LANGUAGE_ORDER.length];
			updatePauseText();
		});
		pauseResumeButton.addEventListener("click", resumeFromPause);
		pauseExitButton.addEventListener("click", exitToTitle);
		updatePauseText();

		root.append(canvas, controls, pauseButton, pauseMenu, overlay);
		mount.replaceChildren(root);
		bindInput();
		resizeObserver = new ResizeObserver(resizeCanvas);
		resizeObserver.observe(root);
		resizeCanvas();
	}

	function bindInput() {
		const downKeys = new Set();
		const keyMap = {
			ArrowLeft: "left",
			KeyA: "left",
			ArrowRight: "right",
			KeyD: "right",
			ArrowDown: "down",
			KeyS: "down",
			ArrowUp: "jump",
			KeyW: "jump",
			Space: "jump",
		};

		root.addEventListener("pointerdown", () => {
			if (game.mode === "ready") return;
		}, { passive: true });

		window.addEventListener("keydown", onKeyDown);
		window.addEventListener("keyup", onKeyUp);

		function onKeyDown(event) {
			if (event.code === "Escape" || event.code === "KeyP") {
				event.preventDefault();
				togglePause();
				return;
			}
			if (event.code === "Enter" && game.mode === "ready") {
				startRun();
				return;
			}
			if (event.code === "KeyR" && (game.mode === "lost" || game.mode === "won")) {
				resetRun("playing");
				overlay.hidden = true;
				return;
			}
			if (keyMap[event.code]) {
				input[keyMap[event.code]] = true;
				if (event.code === "ArrowUp" || event.code === "KeyW") input.up = true;
				event.preventDefault();
			}
			if (downKeys.has(event.code)) return;
			downKeys.add(event.code);
			if (event.code === "KeyJ") trySword();
			if (event.code === "KeyK") tryMagic();
			if (event.code === "KeyL" || event.code === "ShiftLeft" || event.code === "ShiftRight") {
				event.preventDefault();
				tryDash();
			}
		}

		function onKeyUp(event) {
			downKeys.delete(event.code);
			if (keyMap[event.code]) {
				input[keyMap[event.code]] = false;
				if (event.code === "ArrowUp" || event.code === "KeyW") input.up = false;
				event.preventDefault();
			}
		}

		for (const button of controls.querySelectorAll("button")) {
			const hold = button.dataset.hold;
			const action = button.dataset.action;
			if (hold) {
				button.addEventListener("pointerdown", (event) => {
					event.preventDefault();
					button.setPointerCapture(event.pointerId);
					input[hold] = true;
					if (hold === "jump") input.up = true;
					button.classList.add("is-pressed");
				});
				const release = (event) => {
					input[hold] = false;
					if (hold === "jump") input.up = false;
					button.classList.remove("is-pressed");
					tryReleaseCapture(button, event.pointerId);
				};
				button.addEventListener("pointerup", release);
				button.addEventListener("pointercancel", release);
				button.addEventListener("lostpointercapture", () => {
					input[hold] = false;
					if (hold === "jump") input.up = false;
					button.classList.remove("is-pressed");
				});
			}
			if (action === "sword") button.addEventListener("pointerdown", (event) => {
				event.preventDefault();
				trySword();
			});
			if (action === "magic") button.addEventListener("pointerdown", (event) => {
				event.preventDefault();
				tryMagic();
			});
			if (action === "dash") button.addEventListener("pointerdown", (event) => {
				event.preventDefault();
				tryDash();
			});
		}

		unsubscribes.push(() => {
			window.removeEventListener("keydown", onKeyDown);
			window.removeEventListener("keyup", onKeyUp);
		});
	}

	function tryReleaseCapture(element, pointerId) {
		try {
			element.releasePointerCapture(pointerId);
		} catch {
			// The pointer may already have been released by the browser.
		}
	}

	function resizeCanvas() {
		if (!root || !canvas || !ctx) return;
		const rect = root.getBoundingClientRect();
		cssWidth = Math.max(1, rect.width);
		cssHeight = Math.max(1, rect.height);
		const ratio = Math.min(window.devicePixelRatio || 1, 2);
		canvas.width = Math.round(cssWidth * ratio);
		canvas.height = Math.round(cssHeight * ratio);
		canvas.style.width = `${cssWidth}px`;
		canvas.style.height = `${cssHeight}px`;
		ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
		ctx.imageSmoothingEnabled = false;
		scale = cssHeight / VIEW_HEIGHT;
		viewWidth = cssWidth / scale;
	}

	function assetUrl(key) {
		return assets?.get?.(key) || ASSET_FALLBACKS[key];
	}

	function sidecarUrl(url) {
		return url.replace(/\.[^/.?#]+(?=([?#]|$))/, ".frames").replace(/\.frames(?=([?#]|$))/, ".frames.json");
	}

	async function preloadAssets() {
		const bundles = [
			["player", "PLAYER_SHEET", true],
			["enemies", "ENEMY_SHEET", true],
			["boss", "MINOTAUR_SHEET", true],
			["pickups", "PICKUP_ATLAS", true],
			["cave", "CAVE_ATLAS", true],
			["barrels", "BARREL_ATLAS", true],
			["guide", "GUIDE_NPC_ATLAS", true],
			["guideFront", "GUIDE_FRONT_JUMP_ATLAS", true],
			["backdrop", "CAVE_BACKDROP", false],
			["effects", "EFFECT_SHEET", true],
		];

		try {
			await Promise.all(bundles.map(async ([name, key, hasFrames]) => {
				const url = assetUrl(key);
				const [image, frameData] = await Promise.all([
					loadImage(url),
					hasFrames ? loadJson(sidecarUrl(url)) : Promise.resolve(null),
				]);
				loaded.images[name] = image;
				if (frameData) loaded.frames[name] = frameData;
			}));
			assetsReady = true;
			assetError = null;
			game.mode = "ready";
		} catch (error) {
			assetError = error;
			game.mode = "asset-error";
		}
		updateOverlay();
	}

	function loadImage(url) {
		return new Promise((resolve, reject) => {
			const image = new Image();
			image.decoding = "async";
			image.onload = () => resolve(image);
			image.onerror = () => reject(new Error(`No se pudo cargar ${url}`));
			image.src = url;
		});
	}

	async function loadJson(url) {
		const response = await fetch(url);
		if (!response.ok) throw new Error(`No se pudo cargar ${url}`);
		return response.json();
	}

	async function loadBest() {
		try {
			const saved = await sdk?.gameState?.load?.();
			if (saved?.version === 1 && Number.isFinite(saved.best)) {
				game.best = saved.best;
			}
		} catch {
			// Local preview can run without durable save support.
		}
	}

	function t(key) {
		return TEXT[language][key] ?? TEXT.es[key] ?? key;
	}

	async function prepareAudio() {
		try {
			audioHandle = await sdk?.audio?.getContext?.();
			audioContext = audioHandle?.context || null;
		} catch {
			audioHandle = null;
			audioContext = null;
		}
	}

	async function unlockAudio() {
		try {
			if (!audioHandle) await prepareAudio();
			await audioHandle?.unlock?.();
			audioContext = audioHandle?.context || audioContext;
		} catch {
			// Audio is optional; gameplay must stay responsive without it.
		}
	}

	function playTone(frequency, duration = 0.08, type = "sine") {
		if (!audioContext || volume <= 0) return;
		const now = audioContext.currentTime;
		const oscillator = audioContext.createOscillator();
		const gain = audioContext.createGain();
		oscillator.type = type;
		oscillator.frequency.setValueAtTime(frequency, now);
		gain.gain.setValueAtTime(0.0001, now);
		gain.gain.exponentialRampToValueAtTime(Math.max(0.0001, volume * 0.05), now + 0.01);
		gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);
		oscillator.connect(gain).connect(audioContext.destination);
		oscillator.start(now);
		oscillator.stop(now + duration + 0.03);
	}

	function updatePauseText() {
		if (!pauseMenu) return;
		pauseTitle.textContent = t("pause");
		pauseMenu.querySelector(".volume-row span").textContent = t("volume");
		languageButton.textContent = t("language");
		pauseResumeButton.textContent = t("resume");
		pauseExitButton.textContent = t("exit");
		pauseButton?.setAttribute("aria-label", t("pause"));
		const swordButton = controls?.querySelector('[data-action="sword"]');
		const magicButton = controls?.querySelector('[data-action="magic"]');
		const dashButton = controls?.querySelector('[data-action="dash"]');
		if (swordButton) swordButton.textContent = language === "es" ? "Espada" : "Sword";
		if (magicButton) magicButton.textContent = language === "es" ? "Magia" : "Magic";
		if (dashButton) dashButton.textContent = language === "es" ? "Dash" : "Dash";
		if (game.mode !== "playing" && game.mode !== "paused") updateOverlay();
	}

	function setPauseVisible(visible) {
		if (pauseMenu) pauseMenu.hidden = !visible;
		if (pauseButton) pauseButton.hidden = game.mode === "loading" || game.mode === "asset-error" || game.mode === "ready" || game.mode === "lost" || game.mode === "won";
	}

	function togglePause() {
		if (game.mode === "playing") {
			game.mode = "paused";
			setPauseVisible(true);
			playTone(190, 0.05, "square");
		} else if (game.mode === "paused") {
			resumeFromPause();
		}
	}

	function resumeFromPause() {
		if (game.mode !== "paused") return;
		game.mode = "playing";
		setPauseVisible(false);
		playTone(330, 0.06, "triangle");
	}

	function exitToTitle() {
		resetRun("ready");
		setPauseVisible(false);
		updateOverlay();
	}

	function updateOverlay() {
		if (!overlay) return;
		overlay.hidden = game.mode === "playing";
		if (game.mode === "loading") {
			overlayTitle.textContent = "Eclipse del Abismo";
			overlayText.textContent = t("loading");
		} else if (game.mode === "asset-error") {
			overlayTitle.textContent = "La cueva no abrió";
			overlayText.textContent = assetError?.message || "Error de carga";
		} else if (game.mode === "ready") {
			overlayTitle.textContent = "Eclipse del Abismo";
			overlayText.textContent = t("start");
		} else if (game.mode === "lost") {
			overlayTitle.textContent = t("lost");
			overlayText.textContent = `${t("score")} ${game.score} · ${t("retry")}`;
		} else if (game.mode === "won") {
			overlayTitle.textContent = t("won");
			overlayText.textContent = `${t("score")} ${game.score} · ${t("again")}`;
		}
		setPauseVisible(false);
	}

	function loop(now = 0) {
		const dt = Math.min(0.033, Math.max(0, (now - lastTime) / 1000 || 0));
		lastTime = now;
		if (game.mode === "playing") update(dt);
		else game.time += dt;
		render();
		animationFrame = requestAnimationFrame(loop);
	}

	function update(dt) {
		game.time += dt;
		updateTimers(dt);
		updatePlayer(dt);
		updateEnemies(dt);
		updateBoss(dt);
		updateProjectiles(dt);
		updatePickups();
		updateEffects(dt);
		updateCamera(dt);
		if (game.player.hp <= 0) endRun("lost");
	}

	function updateTimers(dt) {
		const player = game.player;
		player.invuln = Math.max(0, player.invuln - dt);
		player.swordCooldown = Math.max(0, player.swordCooldown - dt);
		player.magicCooldown = Math.max(0, player.magicCooldown - dt);
		player.dashCooldown = Math.max(0, player.dashCooldown - dt);
		player.dashTimer = Math.max(0, player.dashTimer - dt);
		player.attackTimer = Math.max(0, player.attackTimer - dt);
		player.castTimer = Math.max(0, player.castTimer - dt);
		camera.shake = Math.max(0, camera.shake - dt);
		for (const enemy of game.enemies) enemy.hurt = Math.max(0, enemy.hurt - dt);
		for (const barrel of game.barrels) barrel.hitTimer = Math.max(0, (barrel.hitTimer || 0) - dt);
		game.boss.hurt = Math.max(0, game.boss.hurt - dt);
		if (game.messageTimer > 0) {
			game.messageTimer = Math.max(0, game.messageTimer - dt);
			if (game.messageTimer === 0) game.message = "";
		}
	}

	function updatePlayer(dt) {
		const player = game.player;
		const move = Number(input.right) - Number(input.left);
		if (player.dashTimer > 0) {
			player.vx = player.dashDir * config.dashSpeed;
			player.vy = Math.min(player.vy, 28);
			if (Math.floor(game.time * 60) % 3 === 0) addEffect("dash", player.x - player.dashDir * 16, player.y - 34, 0.16, player.dashDir);
		} else {
			player.vx = move * config.playerSpeed;
			if (move !== 0) player.dir = move;
		}

		if (input.jump && !input.jumpWasDown) {
			if (player.grounded) {
				player.vy = -448;
				player.grounded = false;
				addEffect("jump", player.x, player.y - 4, 0.25, player.dir);
				pulse(12);
				playTone(520, 0.05, "triangle");
			} else if (player.doubleJumpCharges > 0 && !player.slamActive) {
				player.doubleJumpCharges -= 1;
				player.vy = -430;
				player.canAirDash = true;
				addEffect("doubleJump", player.x, player.y - 30, 0.42, player.dir);
				setMessage(language === "es" ? "Doble salto" : "Double jump", 0.8);
				pulse(18);
				playTone(760, 0.08, "triangle");
			}
		}
		input.jumpWasDown = input.jump;

		player.x += player.vx * dt;
		player.x = clamp(player.x, 24, WORLD.width - 48);
		if (!game.bossRoomCleared && !game.bossRoomLocked && player.x > BOSS_ROOM.x + 38) {
			game.bossRoomLocked = true;
			game.boss.active = true;
			setMessage(t("sealed"), 1.2);
		}
		if (game.bossRoomLocked && !game.bossRoomCleared && player.x < BOSS_ROOM.x + 58) {
			player.x = BOSS_ROOM.x + 58;
			player.vx = Math.max(0, player.vx);
		}
		if (game.bossRoomCleared && rectsOverlap(playerRect(), portalRect())) {
			setMessage(t("portal"), 1.2);
			endRun("won");
		}

		const previousY = player.y;
		player.vy += (player.dashTimer > 0 ? 220 : 1080) * dt;
		player.vy = Math.min(player.vy, 720);
		player.y += player.vy * dt;
		player.grounded = false;
		let landedThisFrame = false;

		for (const platform of LEVEL.platforms) {
			const wasAbove = previousY <= platform.y + 2;
			const isFalling = player.vy >= 0;
			const overlapsX = player.x + player.w / 2 > platform.x && player.x - player.w / 2 < platform.x + platform.w;
			if (wasAbove && isFalling && overlapsX && player.y >= platform.y && player.y <= platform.y + 34) {
				player.y = platform.y;
				player.vy = 0;
				player.grounded = true;
				landedThisFrame = true;
				player.canAirDash = true;
				player.lastSafeX = player.x;
				player.lastSafeY = player.y;
			}
		}

		if (landedThisFrame && player.slamActive) {
			doSlamImpact(player.x, player.y);
		}

		if (player.y > WORLD.height + 80) {
			takePlayerDamage();
			player.slamActive = false;
			player.slamArmed = false;
			player.x = Math.max(LEVEL.start.x, player.lastSafeX - 40);
			player.y = Math.max(120, player.lastSafeY - 80);
			player.vx = 0;
			player.vy = 0;
		}
	}

	function updateEnemies(dt) {
		for (const enemy of game.enemies) {
			if (enemy.dead) continue;
			const stats = ENEMY_STATS[enemy.type];
			const seesPlayer = canSeePlayer(enemy);
			enemy.alert = seesPlayer ? 1.6 : Math.max(0, enemy.alert - dt);
			if (enemy.type === "bat") updateBatEnemy(enemy, stats, dt);
			else updateGroundEnemy(enemy, stats, dt);
			if (enemy.y > WORLD.height + 120) {
				enemy.dead = true;
				addEffect("burst", enemy.x, WORLD.height - 20, 0.45, enemy.dir);
			}

			if (rectsOverlap(playerRect(), enemyRect(enemy))) takePlayerDamage();
		}
	}

	function canSeePlayer(enemy) {
		const dx = game.player.x - enemy.x;
		const dy = Math.abs(game.player.y - enemy.y);
		return Math.abs(dx) < (enemy.type === "bat" ? 460 : 340) && dy < (enemy.type === "bat" ? 190 : 120);
	}

	function updateBatEnemy(enemy, stats, dt) {
		enemy.phase += dt * config.enemySpeedMultiplier;
		if (enemy.alert > 0) {
			const dx = game.player.x - enemy.x;
			const dy = game.player.y - 42 - enemy.y;
			enemy.dir = dx >= 0 ? 1 : -1;
			enemy.x += Math.sign(dx) * stats.speed * 1.45 * config.enemySpeedMultiplier * dt;
			enemy.y += clamp(dy, -1, 1) * stats.speed * 1.15 * config.enemySpeedMultiplier * dt;
		} else {
			enemy.x += enemy.dir * stats.speed * config.enemySpeedMultiplier * dt;
			if (enemy.x < enemy.minX || enemy.x > enemy.maxX) enemy.dir *= -1;
			enemy.y += Math.sin(game.time * 3.4 + enemy.phase) * 18 * dt;
		}
		enemy.x = clamp(enemy.x, enemy.minX - 90, enemy.maxX + 90);
		enemy.y = clamp(enemy.y, 240, 590);
	}

	function updateGroundEnemy(enemy, stats, dt) {
		enemy.jumpCooldown = Math.max(0, enemy.jumpCooldown - dt);
		const targetDir = game.player.x >= enemy.x ? 1 : -1;
		if (enemy.alert > 0) enemy.dir = targetDir;
		const speedMultiplier = enemy.alert > 0 ? 1.45 : 1;
		enemy.vx = enemy.dir * stats.speed * speedMultiplier * config.enemySpeedMultiplier;

		if (enemy.grounded && enemy.alert > 0 && enemy.jumpCooldown <= 0) {
			const playerAbove = game.player.y < enemy.y - 52 && Math.abs(game.player.x - enemy.x) < 190;
			const gapAhead = !hasPlatformUnder(enemy.x + enemy.dir * 44, enemy.y + 6);
			if (playerAbove || gapAhead) {
				enemy.vy = -330;
				enemy.grounded = false;
				enemy.jumpCooldown = 1.1;
			}
		}

		if (enemy.grounded && enemy.alert <= 0 && !hasPlatformUnder(enemy.x + enemy.dir * 34, enemy.y + 6)) enemy.dir *= -1;

		enemy.x += enemy.vx * dt;
		if (enemy.alert <= 0 && (enemy.x < enemy.minX || enemy.x > enemy.maxX)) {
			enemy.x = clamp(enemy.x, enemy.minX, enemy.maxX);
			enemy.dir *= -1;
		}

		const previousY = enemy.y;
		enemy.vy += 1080 * dt;
		enemy.vy = Math.min(enemy.vy, 760);
		enemy.y += enemy.vy * dt;
		enemy.grounded = false;
		for (const platform of LEVEL.platforms) {
			const wasAbove = previousY <= platform.y + 2;
			const overlapsX = enemy.x + enemy.w / 2 > platform.x && enemy.x - enemy.w / 2 < platform.x + platform.w;
			if (wasAbove && enemy.vy >= 0 && overlapsX && enemy.y >= platform.y && enemy.y <= platform.y + 36) {
				enemy.y = platform.y;
				enemy.vy = 0;
				enemy.grounded = true;
			}
		}
	}

	function hasPlatformUnder(x, y) {
		return LEVEL.platforms.some((platform) => x >= platform.x && x <= platform.x + platform.w && Math.abs(y - platform.y) < 42);
	}

	function updateBoss(dt) {
		const boss = game.boss;
		if (boss.dead) return;
		boss.active = boss.active || game.bossRoomLocked || game.player.x > BOSS_ROOM.x + 38 || boss.hp < boss.maxHp;
		if (!boss.active) return;

		const dx = game.player.x - boss.x;
		boss.dir = dx >= 0 ? 1 : -1;
		if (Math.abs(dx) > 118) {
			boss.x += Math.sign(dx) * 62 * config.enemySpeedMultiplier * dt;
			boss.x = clamp(boss.x, BOSS_ROOM.x + 180, BOSS_ROOM.x + BOSS_ROOM.w - 120);
		}

		boss.attackCooldown -= dt;
		if (boss.attackTimer > 0) {
			boss.attackTimer -= dt;
			const axeWindow = boss.attackTimer > 0.38 && boss.attackTimer < 0.68;
			const axeReach = {
				x: boss.x + (boss.dir < 0 ? -132 : 18),
				y: boss.y - 118,
				w: 116,
				h: 96,
			};
			if (axeWindow && rectsOverlap(playerRect(), axeReach)) takePlayerDamage();
		} else if (boss.attackCooldown <= 0 && Math.abs(dx) < 150 && Math.abs(game.player.y - boss.y) < 92) {
			boss.attackTimer = 0.9;
			boss.attackCooldown = 1.25;
			addEffect("warning", boss.x + boss.dir * 64, boss.y - 82, 0.35, boss.dir);
		}

		if (rectsOverlap(playerRect(), bossRect())) takePlayerDamage();
	}

	function updateProjectiles(dt) {
		for (const projectile of game.projectiles) {
			projectile.x += projectile.vx * dt;
			projectile.y += projectile.vy * dt;
			projectile.life -= dt;
			projectile.phase += dt;
			if (projectile.life <= 0 || projectile.x < -80 || projectile.x > WORLD.width + 80 || projectile.y < -80) projectile.dead = true;

			for (const enemy of game.enemies) {
				if (projectile.dead || enemy.dead) continue;
				if (rectsOverlap(projectileRect(projectile), enemyRect(enemy))) {
					hurtEnemy(enemy, projectile.type === "upfire" ? config.magicDamage + 1 : config.magicDamage, projectile.dir, "magic");
					projectile.dead = true;
				}
			}

			for (const barrel of game.barrels) {
				if (projectile.dead || barrel.broken) continue;
				if (rectsOverlap(projectileRect(projectile), barrelRect(barrel))) {
					hurtBarrel(barrel, 1, projectile.dir);
					projectile.dead = true;
				}
			}

			if (!projectile.dead && !game.boss.dead && rectsOverlap(projectileRect(projectile), bossRect())) {
				hurtBoss(projectile.type === "upfire" ? config.magicDamage + 1 : config.magicDamage, projectile.dir, "magic");
				projectile.dead = true;
			}
		}
		game.projectiles = game.projectiles.filter((projectile) => !projectile.dead);
	}

	function updatePickups() {
		const rect = playerRect();
		for (const pickup of game.pickups) {
			if (pickup.collected) continue;
			const box = { x: pickup.x - 18, y: pickup.y - 36, w: 36, h: 36 };
			if (!rectsOverlap(rect, box)) continue;
			pickup.collected = true;
			if (pickup.type === "health_potion") {
				game.player.hp = Math.min(PLAYER_MAX_HP, game.player.hp + 1);
				setMessage("+1 vida");
				addEffect("heal", pickup.x, pickup.y - 18, 0.55, 1);
			} else if (pickup.type === "armor") {
				game.player.armor = true;
				setMessage("Armadura lista");
				addEffect("armor", pickup.x, pickup.y - 18, 0.55, 1);
			} else if (pickup.type === "double_jump") {
				game.player.doubleJumpCharges = Math.min(3, game.player.doubleJumpCharges + 1);
				setMessage(language === "es" ? "+1 doble salto" : "+1 double jump");
				addEffect("doubleJump", pickup.x, pickup.y - 18, 0.55, 1);
			} else {
				game.score += 25;
				setMessage("+25");
				addEffect("spark", pickup.x, pickup.y - 18, 0.45, 1);
			}
			pulse(16);
		}
	}

	function updateEffects(dt) {
		for (const effect of game.effects) {
			effect.t += dt;
			effect.y += effect.vy * dt;
			effect.x += effect.vx * dt;
		}
		game.effects = game.effects.filter((effect) => effect.t < effect.duration);
	}

	function updateCamera(dt) {
		const target = clamp(game.player.x - viewWidth * 0.42, 0, Math.max(0, WORLD.width - viewWidth));
		camera.x += (target - camera.x) * Math.min(1, 9 * dt);
		camera.y = 56;
	}

	function tryDash() {
		const player = game.player;
		if (game.mode !== "playing" || player.dashCooldown > 0 || (!player.grounded && !player.canAirDash)) return;
		const move = Number(input.right) - Number(input.left);
		player.dashDir = move || player.dir || 1;
		player.dir = player.dashDir;
		player.dashTimer = 0.18;
		player.dashCooldown = 0.62;
		player.canAirDash = false;
		player.vy = Math.min(player.vy, 0);
		addEffect("dash", player.x - player.dashDir * 22, player.y - 36, 0.24, player.dashDir);
		camera.shake = Math.max(camera.shake, 0.035 * config.effectsIntensity);
		pulse(18);
	}

	function trySword() {
		if (game.mode !== "playing" || game.player.swordCooldown > 0) return;
		const player = game.player;
		const downSlash = input.down && !player.grounded;
		player.attackTimer = 0.28;
		player.attackKind = downSlash ? "down" : "side";
		player.swordCooldown = 0.42;
		const hitbox = swordRect(downSlash);
		let didHit = false;

		for (const enemy of game.enemies) {
			if (enemy.dead) continue;
			if (rectsOverlap(hitbox, enemyRect(enemy))) {
				hurtEnemy(enemy, config.swordDamage, player.dir, "sword");
				if (downSlash) pogoIfAerial(enemy.y - enemy.h * 0.45);
				didHit = true;
			}
		}

		for (const barrel of game.barrels) {
			if (barrel.broken) continue;
			if (rectsOverlap(hitbox, barrelRect(barrel))) {
				hurtBarrel(barrel, config.swordDamage, player.dir);
				if (downSlash) pogoIfAerial(barrel.y - 22);
				didHit = true;
			}
		}

		if (!game.boss.dead && rectsOverlap(hitbox, bossRect())) {
			hurtBoss(config.swordDamage, player.dir, "sword");
			if (downSlash) pogoIfAerial(game.boss.y - game.boss.h * 0.52);
			didHit = true;
		}

		addEffect(downSlash ? "downslash" : "slash", downSlash ? player.x : player.x + player.dir * 48, downSlash ? player.y - 8 : player.y - 42, 0.18, player.dir);
		if (didHit) {
			camera.shake = Math.max(camera.shake, 0.08 * config.effectsIntensity);
			pulse(24);
		}
	}

	function tryMagic() {
		if (game.mode !== "playing" || game.player.magicCooldown > 0) return;
		const player = game.player;
		player.magicCooldown = input.down && !player.grounded ? 0.82 : 0.58;
		player.castTimer = 0.3;
		if (input.down && !player.grounded) {
			player.slamActive = true;
			player.slamArmed = true;
			player.vy = 840;
			player.dashTimer = 0;
			addEffect("slamCharge", player.x, player.y - 22, 0.32, 1);
			setMessage(language === "es" ? "Descenso" : "Dive", 0.75);
			pulse(22);
			playTone(150, 0.12, "sawtooth");
			return;
		}

		if (input.up) {
			game.projectiles.push({
				type: "upfire",
				x: player.x,
				y: player.y - 62,
				vx: 0,
				vy: -520,
				dir: 1,
				life: 0.78,
				phase: 0,
				dead: false,
			});
			addEffect("upfireCast", player.x, player.y - 54, 0.24, 1);
			pulse(12);
			playTone(680, 0.09, "triangle");
			return;
		}

		game.projectiles.push({
			type: "bolt",
			x: player.x + player.dir * 28,
			y: player.y - 42,
			vx: player.dir * 500,
			vy: 0,
			dir: player.dir,
			life: 1.15,
			phase: 0,
			dead: false,
		});
		addEffect("cast", player.x + player.dir * 24, player.y - 45, 0.22, player.dir);
		pulse(10);
		playTone(560, 0.07, "sine");
	}

	function doSlamImpact(x, y) {
		const player = game.player;
		player.slamActive = false;
		player.slamArmed = false;
		player.vy = -120;
		addEffect("slamImpact", x, y - 6, 0.48, 1);
		camera.shake = Math.max(camera.shake, 0.18 * config.effectsIntensity);
		pulse(50);
		playTone(110, 0.12, "sawtooth");
		areaDamage({ x: x - 158, y: y - 118, w: 316, h: 132 }, config.magicDamage + 3, 1, "magic");
	}

	function areaDamage(area, amount, direction, source) {
		for (const enemy of game.enemies) {
			if (!enemy.dead && rectsOverlap(area, enemyRect(enemy))) hurtEnemy(enemy, amount, direction, source);
		}
		for (const barrel of game.barrels) {
			if (!barrel.broken && rectsOverlap(area, barrelRect(barrel))) hurtBarrel(barrel, amount, direction);
		}
		if (!game.boss.dead && rectsOverlap(area, bossRect())) hurtBoss(amount, direction, source);
	}

	function pogoIfAerial(targetY) {
		const player = game.player;
		if (!player.grounded && player.y < targetY + 36) {
			player.vy = -330;
			player.canAirDash = true;
			addEffect("jump", player.x, player.y - 10, 0.2, player.dir);
		}
	}

	function hurtEnemy(enemy, amount, direction, source) {
		enemy.hp -= amount;
		enemy.x += direction * (source === "sword" ? 18 : 8);
		enemy.hurt = 0.16;
		addEffect("hit", enemy.x, enemy.y - enemy.h * 0.55, 0.26, direction);
		if (enemy.hp <= 0) {
			enemy.dead = true;
			game.score += ENEMY_STATS[enemy.type].score;
			if (Math.random() <= config.enemyDropChance) {
				const loot = chooseEnemyLoot(enemy.type);
				if (loot) spawnPickup(loot, enemy.x, enemy.y - 12);
			}
			addEffect("burst", enemy.x, enemy.y - enemy.h * 0.55, 0.5, direction);
		}
	}

	function hurtBarrel(barrel, amount, direction) {
		barrel.hp -= amount;
		barrel.hitTimer = 0.18;
		addEffect("hit", barrel.x, barrel.y - 24, 0.22, direction);
		if (barrel.hp > 0) return;
		barrel.broken = true;
		game.score += 10;
		addEffect("barrel", barrel.x, barrel.y - 16, 0.42, direction);
		if (barrel.loot) {
			spawnPickup(barrel.loot, barrel.x, barrel.y - 8);
			setMessage(barrel.loot === "health_potion" ? "Poción" : barrel.loot === "armor" ? "Armadura" : barrel.loot === "double_jump" ? "Doble salto" : "+25");
		} else {
			setMessage("Vacío", 0.75);
		}
		camera.shake = Math.max(camera.shake, 0.05 * config.effectsIntensity);
		pulse(18);
	}

	function chooseBarrelLoot() {
		const roll = Math.random();
		if (roll < 0.34) return "health_potion";
		if (roll < 0.56) return "armor";
		if (roll < 0.7) return "double_jump";
		if (roll < 0.88) return "emerald";
		return null;
	}

	function chooseEnemyLoot(type) {
		const roll = Math.random();
		if (type !== "bat" && roll < 0.18) return "health_potion";
		if (type === "crawler" && roll < 0.3) return "armor";
		if (roll < 0.42) return "double_jump";
		if (roll < 0.78) return "emerald";
		return null;
	}

	function hurtBoss(amount, direction, source) {
		const boss = game.boss;
		if (boss.dead) return;
		boss.active = true;
		boss.hp -= amount;
		boss.x += direction * (source === "sword" ? 8 : 3);
		boss.hurt = 0.16;
		addEffect("hit", boss.x, boss.y - 88, 0.3, direction);
		camera.shake = Math.max(camera.shake, 0.06 * config.effectsIntensity);
		if (boss.hp <= 0) {
			boss.dead = true;
			game.bossRoomLocked = false;
			game.bossRoomCleared = true;
			game.score += 500;
			addEffect("burst", boss.x, boss.y - 88, 0.9, direction);
			addEffect("portalOpen", SECOND_FLOOR_PORTAL.x, SECOND_FLOOR_PORTAL.y - 78, 1.2, 1);
			setMessage(t("portal"), 2.2);
			playTone(880, 0.22, "triangle");
		}
	}

	function takePlayerDamage() {
		const player = game.player;
		if (player.invuln > 0 || game.mode !== "playing") return;
		if (player.armor) {
			player.armor = false;
			setMessage("Armadura rota");
			addEffect("armor", player.x, player.y - 38, 0.45, player.dir);
		} else {
			player.hp -= 1;
			setMessage("-1 vida");
		}
		player.invuln = 1.05;
		player.vy = Math.min(player.vy, -180);
		player.x -= player.dir * 34;
		camera.shake = Math.max(camera.shake, 0.14 * config.effectsIntensity);
		addEffect("hit", player.x, player.y - 42, 0.28, -player.dir);
		pulse(40);
	}

	function spawnPickup(type, x, y) {
		game.pickups.push({ type, x, y, collected: false, id: `drop-${game.time}-${type}` });
	}

	function addEffect(type, x, y, duration, dir) {
		game.effects.push({
			type,
			x,
			y,
			dir,
			duration,
			t: 0,
			vx: type === "burst" ? dir * 20 : 0,
			vy: type === "heal" || type === "armor" || type === "spark" ? -24 : 0,
		});
	}

	function setMessage(text, duration = 1.25) {
		game.message = text;
		game.messageTimer = duration;
	}

	function endRun(mode) {
		if (game.mode !== "playing") return;
		game.mode = mode;
		game.best = Math.max(game.best, game.score);
		updateOverlay();
		submitResult();
	}

	async function submitResult() {
		if (endedSubmitted) return;
		endedSubmitted = true;
		try {
			await sdk?.gameState?.save?.({ version: 1, best: game.best });
		} catch {
			// Best score remains visible for the current session even if storage fails.
		}
		if (!Number.isFinite(game.score)) return;
		try {
			await sdk?.leaderboard?.submit?.(game.score);
		} catch {
			// Leaderboards are submitted only when the host is available.
		}
	}

	function pulse(pattern) {
		try {
			if (sdk?.device?.haptics?.isSupported?.()) sdk.device.haptics.vibrate(pattern);
		} catch {
			// Haptics are optional feedback.
		}
	}

	function render() {
		if (!ctx) return;
		ctx.clearRect(0, 0, cssWidth, cssHeight);
		ctx.imageSmoothingEnabled = false;
		drawBackground();
		if (assetsReady) drawWorld();
		drawHud();
	}

	function drawBackground() {
		const gradient = ctx.createLinearGradient(0, 0, 0, cssHeight);
		gradient.addColorStop(0, "#130f2a");
		gradient.addColorStop(0.55, "#1b2448");
		gradient.addColorStop(1, "#0b1020");
		ctx.fillStyle = gradient;
		ctx.fillRect(0, 0, cssWidth, cssHeight);
		const bg = loaded.images.backdrop;
		if (bg) {
			ctx.globalAlpha = 0.86;
			drawImageCover(ctx, bg, 0, 0, cssWidth, cssHeight);
			ctx.globalAlpha = 1;
		}
		ctx.fillStyle = "rgba(4, 7, 18, 0.28)";
		ctx.fillRect(0, 0, cssWidth, cssHeight);
	}

	function drawWorld() {
		const shakeX = camera.shake > 0 ? (Math.sin(game.time * 90) * 3.2 * config.effectsIntensity) : 0;
		const shakeY = camera.shake > 0 ? (Math.cos(game.time * 77) * 2.2 * config.effectsIntensity) : 0;
		ctx.save();
		ctx.translate(shakeX, shakeY);
		ctx.scale(scale, scale);
		ctx.translate(-camera.x, -camera.y);

		drawDecorBehind();
		drawBossRoomFrame();
		for (const platform of LEVEL.platforms) drawPlatform(platform);
		drawBossGate();
		drawSecondFloorPortal();
		drawDecorFront();
		drawGuideNpc();
		for (const barrel of game.barrels) drawBarrel(barrel);
		for (const pickup of game.pickups) drawPickup(pickup);
		for (const projectile of game.projectiles) drawProjectile(projectile);
		for (const enemy of game.enemies) drawEnemy(enemy);
		drawBoss();
		drawPlayer();
		for (const effect of game.effects) drawEffect(effect);

		ctx.restore();
	}

	function drawDecorBehind() {
		ctx.fillStyle = "rgba(6, 9, 24, 0.46)";
		for (let x = 120; x < WORLD.width; x += 260) {
			const h = 120 + ((x * 7) % 90);
			drawCaveColumn(x, 620, 70, h);
		}
		for (const decor of LEVEL.decor.filter((item) => item.type === "stalactite")) {
			drawAtlasFrame("cave", decor.type, decor.x, decor.y, decor.w, decor.h);
		}
	}

	function drawDecorFront() {
		for (const decor of LEVEL.decor.filter((item) => item.type !== "stalactite")) {
			drawAtlasFrame("cave", decor.type, decor.x, decor.y - decor.h, decor.w, decor.h);
			if (decor.type === "crystal_cluster") drawGlow(decor.x + decor.w * 0.5, decor.y - decor.h * 0.45, decor.w * 0.8, "rgba(67, 255, 155, 0.22)");
		}
	}

	function drawGuideNpc() {
		const guideX = 170;
		const guideY = 620;
		drawAtlasFrame("guideFront", "guide_front", guideX - 27, guideY - 60, 54, 60);
		if (Math.abs(game.player.x - guideX) < 230 || game.time < 7 || game.mode === "ready") {
			drawSpeechBubble(guideX - 118, guideY - 180);
		}
	}

	function drawSpeechBubble(x, y) {
		const lines = TEXT[language].guide;
		const w = 246;
		const h = 112;
		ctx.save();
		ctx.fillStyle = "rgba(7, 10, 24, 0.88)";
		ctx.strokeStyle = "rgba(214, 236, 255, 0.86)";
		ctx.lineWidth = 2;
		roundRect(ctx, x, y, w, h, 8);
		ctx.fill();
		ctx.stroke();
		ctx.beginPath();
		ctx.moveTo(x + w * 0.45, y + h - 1);
		ctx.lineTo(x + w * 0.5, y + h + 18);
		ctx.lineTo(x + w * 0.58, y + h - 1);
		ctx.closePath();
		ctx.fill();
		ctx.stroke();
		ctx.fillStyle = "#eef7ff";
		ctx.font = "700 13px Inter, system-ui";
		for (let i = 0; i < lines.length; i += 1) ctx.fillText(lines[i], x + 14, y + 12 + i * 18);
		ctx.restore();
	}

	function drawBossRoomFrame() {
		ctx.save();
		ctx.fillStyle = "rgba(3, 5, 16, 0.36)";
		ctx.fillRect(BOSS_ROOM.x, BOSS_ROOM.y, BOSS_ROOM.w, BOSS_ROOM.h);
		ctx.strokeStyle = "rgba(78, 228, 255, 0.16)";
		ctx.lineWidth = 5;
		ctx.strokeRect(BOSS_ROOM.x + 8, BOSS_ROOM.y + 8, BOSS_ROOM.w - 16, BOSS_ROOM.h - 16);
		ctx.restore();
	}

	function drawBossGate() {
		const locked = game.bossRoomLocked && !game.bossRoomCleared;
		const x = BOSS_ROOM.x;
		const y = 214;
		const h = 406;
		ctx.save();
		ctx.globalAlpha = locked ? 1 : 0.34;
		drawGlow(x + 16, y + h * 0.5, locked ? 110 : 70, locked ? "rgba(55, 226, 255, 0.22)" : "rgba(55, 226, 255, 0.12)");
		ctx.strokeStyle = locked ? "#65e8ff" : "rgba(101, 232, 255, 0.55)";
		ctx.lineWidth = locked ? 5 : 3;
		ctx.beginPath();
		ctx.moveTo(x + 8, y);
		ctx.lineTo(x + 8, y + h);
		ctx.moveTo(x + 38, y + 26);
		ctx.lineTo(x + 38, y + h - 6);
		ctx.moveTo(x + 68, y + 78);
		ctx.lineTo(x + 68, y + h - 26);
		ctx.stroke();
		ctx.fillStyle = locked ? "rgba(77, 232, 255, 0.28)" : "rgba(77, 232, 255, 0.1)";
		ctx.fillRect(x, y, 76, h);
		ctx.restore();
	}

	function drawSecondFloorPortal() {
		const open = game.bossRoomCleared;
		const x = SECOND_FLOOR_PORTAL.x;
		const y = SECOND_FLOOR_PORTAL.y - SECOND_FLOOR_PORTAL.h;
		ctx.save();
		ctx.globalAlpha = open ? 1 : 0.34;
		drawGlow(x, y + 72, open ? 118 : 56, open ? "rgba(128, 77, 255, 0.22)" : "rgba(77, 232, 255, 0.08)");
		ctx.strokeStyle = open ? "#8df8ff" : "rgba(128, 175, 190, 0.45)";
		ctx.lineWidth = open ? 6 : 4;
		ctx.beginPath();
		ctx.ellipse(x, y + 72, 36, 66, 0, 0, Math.PI * 2);
		ctx.stroke();
		if (open) {
			const swirl = game.time * 3;
			for (let i = 0; i < 3; i += 1) {
				ctx.strokeStyle = i % 2 === 0 ? "rgba(119, 239, 255, 0.78)" : "rgba(167, 91, 255, 0.64)";
				ctx.lineWidth = 3;
				ctx.beginPath();
				ctx.ellipse(x, y + 72, 15 + i * 8, 44 - i * 6, swirl + i * 1.8, 0, Math.PI * 2);
				ctx.stroke();
			}
			ctx.fillStyle = "rgba(77, 232, 255, 0.2)";
			ctx.beginPath();
			ctx.ellipse(x, y + 72, 26, 54, 0, 0, Math.PI * 2);
			ctx.fill();
			ctx.fillStyle = "#dffcff";
			ctx.font = "700 12px Inter, system-ui";
			ctx.textAlign = "center";
			ctx.fillText(t("portal"), x, y - 18);
			ctx.textAlign = "start";
		} else {
			ctx.strokeStyle = "rgba(120, 175, 190, 0.55)";
			ctx.lineWidth = 3;
			ctx.beginPath();
			ctx.moveTo(x - 22, y + 48);
			ctx.lineTo(x + 22, y + 98);
			ctx.moveTo(x + 22, y + 48);
			ctx.lineTo(x - 22, y + 98);
			ctx.stroke();
		}
		ctx.restore();
	}

	function drawCaveColumn(x, baseY, w, h) {
		ctx.beginPath();
		ctx.moveTo(x - w * 0.5, baseY);
		ctx.lineTo(x - w * 0.25, baseY - h);
		ctx.lineTo(x + w * 0.2, baseY - h * 0.78);
		ctx.lineTo(x + w * 0.5, baseY);
		ctx.closePath();
		ctx.fill();
	}

	function drawPlatform(platform) {
		const topY = platform.y - 18;
		const height = platform.h + 30;
		const capW = Math.min(54, platform.w * 0.28);
		drawAtlasFrame("cave", "platform_left", platform.x - 6, topY, capW, height);
		let x = platform.x + capW - 8;
		const end = platform.x + platform.w - capW + 8;
		while (x < end) {
			const pieceW = Math.min(64, end - x);
			drawAtlasFrame("cave", "platform_center", x, topY, pieceW + 1, height - 6);
			x += pieceW;
		}
		drawAtlasFrame("cave", "platform_right", platform.x + platform.w - capW + 6, topY, capW, height);
	}

	function drawPickup(pickup) {
		if (pickup.collected) return;
		const bob = Math.sin(game.time * 4 + pickup.x * 0.02) * 4;
		const size = pickup.type === "emerald" ? 32 : pickup.type === "double_jump" ? 42 : 38;
		if (pickup.type === "emerald") drawGlow(pickup.x, pickup.y - 19 + bob, 42, "rgba(70, 255, 150, 0.2)");
		if (pickup.type === "double_jump") {
			drawGlow(pickup.x, pickup.y - 21 + bob, 54, "rgba(116, 232, 255, 0.22)");
			drawAtlasFrame("guideFront", "double_jump_charm", pickup.x - size / 2, pickup.y - size + bob, size, size);
		} else {
			drawAtlasFrame("pickups", pickup.type, pickup.x - size / 2, pickup.y - size + bob, size, size);
		}
	}

	function drawBarrel(barrel) {
		if (barrel.broken) return;
		const frame = barrel.hp <= 1 || barrel.hitTimer > 0 ? "barrel_cracked" : "barrel_intact";
		const jitter = barrel.hitTimer > 0 ? Math.sin(game.time * 90) * 2 : 0;
		drawAtlasFrame("barrels", frame, barrel.x - 23 + jitter, barrel.y - 44, 46, 44);
	}

	function drawEnemy(enemy) {
		if (enemy.dead) return;
		const stats = ENEMY_STATS[enemy.type];
		const alpha = enemy.hurt > 0 ? 0.65 : 1;
		drawAnchoredAnimation("enemies", stats.anim, enemy.x, enemy.y, stats.height, enemy.dir > 0, alpha);
		drawEnemyHealth(enemy, enemy.maxHp, enemy.hp, enemy.y - enemy.h - 12, enemy.w);
	}

	function drawBoss() {
		const boss = game.boss;
		if (boss.dead) return;
		let anim = "idle";
		if (boss.attackTimer > 0) anim = "axe_swing";
		else if (boss.hurt > 0) anim = "hurt";
		else if (boss.active && Math.abs(game.player.x - boss.x) > 118) anim = "walk";
		drawAnchoredAnimation("boss", anim, boss.x, boss.y, 154, boss.dir > 0, boss.hurt > 0 ? 0.75 : 1);
		if (boss.active) drawEnemyHealth(boss, boss.maxHp, boss.hp, boss.y - boss.h - 20, 132);
	}

	function drawPlayer() {
		const player = game.player;
		let anim = "idle";
		if (player.attackTimer > 0) anim = "sword";
		else if (player.castTimer > 0) anim = "cast";
		else if (!player.grounded) anim = "jump";
		else if (Math.abs(player.vx) > 1) anim = "walk";
		const flicker = player.invuln > 0 && Math.floor(game.time * 18) % 2 === 0;
		drawAnchoredAnimation("player", anim, player.x, player.y, 74, player.dir < 0, flicker ? 0.55 : 1);
		if (player.armor) {
			ctx.strokeStyle = "rgba(120, 225, 255, 0.72)";
			ctx.lineWidth = 2;
			ctx.beginPath();
			ctx.ellipse(player.x, player.y - 38, 25, 35, 0, 0, Math.PI * 2);
			ctx.stroke();
		}
	}

	function drawProjectile(projectile) {
		if (projectile.type === "upfire") {
			drawGlow(projectile.x, projectile.y, 84, "rgba(255, 128, 50, 0.3)");
			ctx.save();
			ctx.fillStyle = "rgba(255, 124, 39, 0.9)";
			ctx.beginPath();
			ctx.ellipse(projectile.x, projectile.y, 26, 42, 0, 0, Math.PI * 2);
			ctx.fill();
			ctx.fillStyle = "rgba(103, 241, 255, 0.9)";
			ctx.beginPath();
			ctx.ellipse(projectile.x, projectile.y + 2, 12, 22, 0, 0, Math.PI * 2);
			ctx.fill();
			ctx.strokeStyle = "rgba(255, 224, 127, 0.45)";
			ctx.lineWidth = 3;
			ctx.beginPath();
			ctx.ellipse(projectile.x, projectile.y, 42, 58, 0, 0, Math.PI * 2);
			ctx.stroke();
			ctx.restore();
		} else {
			drawGlow(projectile.x, projectile.y, 42, "rgba(91, 225, 255, 0.25)");
			drawAnchoredAnimation("effects", "magic_bolt", projectile.x, projectile.y + 12, 42, projectile.dir < 0, 1);
		}
	}

	function drawEffect(effect) {
		const p = effect.t / effect.duration;
		ctx.save();
		ctx.globalAlpha = Math.max(0, 1 - p);
		if (effect.type === "slash") {
			drawAnchoredAnimation("effects", "sword_slash", effect.x, effect.y + 20, 76, effect.dir < 0, 1 - p * 0.2);
		} else if (effect.type === "downslash") {
			ctx.save();
			ctx.translate(effect.x, effect.y + 28);
			ctx.rotate(Math.PI / 2);
			drawAnchoredAnimation("effects", "sword_slash", 0, 0, 72, false, 1 - p * 0.2);
			ctx.restore();
		} else if (effect.type === "hit" || effect.type === "burst") {
			drawAnchoredAnimation("effects", "hit_spark", effect.x, effect.y + 20, effect.type === "burst" ? 86 : 54, effect.dir < 0, 1);
		} else if (effect.type === "heal") {
			drawFloatingText("+", effect.x, effect.y, "#ff8bd4", 26);
			drawGlow(effect.x, effect.y, 62, "rgba(255, 99, 196, 0.22)");
		} else if (effect.type === "armor") {
			drawAtlasFrame("pickups", "armor", effect.x - 20, effect.y - 24, 40, 40);
		} else if (effect.type === "warning") {
			ctx.strokeStyle = "rgba(255, 84, 66, 0.78)";
			ctx.lineWidth = 4;
			ctx.beginPath();
			ctx.arc(effect.x, effect.y, 38 + p * 18, 0, Math.PI * 2);
			ctx.stroke();
		} else if (effect.type === "dash") {
			ctx.fillStyle = "rgba(63, 226, 255, 0.24)";
			ctx.beginPath();
			ctx.ellipse(effect.x - effect.dir * p * 34, effect.y, 46 * (1 - p), 15 * (1 - p * 0.4), 0, 0, Math.PI * 2);
			ctx.fill();
		} else if (effect.type === "barrel") {
			drawAtlasFrame("barrels", "barrel_fragments", effect.x - 36, effect.y - 38 - p * 16, 72, 52);
		} else if (effect.type === "doubleJump") {
			drawGlow(effect.x, effect.y, 58 * (1 - p * 0.35), "rgba(116, 232, 255, 0.26)");
			drawAtlasFrame("guideFront", "double_jump_charm", effect.x - 20, effect.y - 22 - p * 14, 40, 40);
		} else if (effect.type === "slamCharge") {
			ctx.fillStyle = "rgba(65, 238, 255, 0.34)";
			ctx.fillRect(effect.x - 8, effect.y - 18, 16, 44 + p * 28);
			drawGlow(effect.x, effect.y + 16, 54, "rgba(65, 238, 255, 0.18)");
		} else if (effect.type === "slamImpact") {
			ctx.strokeStyle = "rgba(65, 238, 255, 0.86)";
			ctx.lineWidth = 5 * (1 - p) + 1;
			ctx.beginPath();
			ctx.ellipse(effect.x, effect.y, 34 + p * 158, 12 + p * 28, 0, 0, Math.PI * 2);
			ctx.stroke();
			drawGlow(effect.x, effect.y - 36, 118 * (1 - p * 0.2), "rgba(65, 238, 255, 0.22)");
		} else if (effect.type === "upfireCast") {
			ctx.fillStyle = "rgba(255, 124, 39, 0.4)";
			ctx.beginPath();
			ctx.arc(effect.x, effect.y - p * 22, 26 * (1 - p * 0.4), 0, Math.PI * 2);
			ctx.fill();
		} else if (effect.type === "portalOpen") {
			ctx.strokeStyle = "rgba(137, 246, 255, 0.85)";
			ctx.lineWidth = 5 * (1 - p) + 1;
			ctx.beginPath();
			ctx.ellipse(effect.x, effect.y, 20 + p * 96, 44 + p * 82, 0, 0, Math.PI * 2);
			ctx.stroke();
			drawGlow(effect.x, effect.y, 130 * (1 - p * 0.35), "rgba(153, 87, 255, 0.24)");
		} else {
			drawFloatingText("✦", effect.x, effect.y, "#75ffc0", 22);
		}
		ctx.restore();
	}

	function drawHud() {
		if (!assetsReady) return;
		ctx.save();
		ctx.textBaseline = "top";
		ctx.font = "700 18px 'Pixelify Sans', system-ui";
		ctx.fillStyle = "rgba(7, 10, 24, 0.72)";
		roundRect(ctx, 12, 12, 186, 42, 12);
		ctx.fill();
		for (let i = 0; i < PLAYER_MAX_HP; i += 1) {
			ctx.globalAlpha = i < game.player.hp ? 1 : 0.26;
			drawAtlasFrameScreen("pickups", "heart", 21 + i * 33, 20, 28, 25);
		}
		ctx.globalAlpha = 1;
		if (game.player.armor) drawAtlasFrameScreen("pickups", "armor", 168, 18, 26, 26);
		if (game.player.doubleJumpCharges > 0) {
			drawAtlasFrameScreen("guideFront", "double_jump_icon", 18, 58, 30, 24);
			ctx.fillStyle = "#c8f8ff";
			ctx.font = "700 14px 'Pixelify Sans', system-ui";
			ctx.fillText(`×${game.player.doubleJumpCharges}`, 50, 62);
		}

		const scoreY = 62;
		ctx.fillStyle = "rgba(7, 10, 24, 0.72)";
		roundRect(ctx, cssWidth - 148, scoreY, 136, 42, 12);
		ctx.fill();
		drawAtlasFrameScreen("pickups", "emerald", cssWidth - 137, scoreY + 6, 25, 28);
		ctx.fillStyle = "#f5fbff";
		ctx.font = "700 18px 'Pixelify Sans', system-ui";
		ctx.fillText(String(game.score).padStart(4, "0"), cssWidth - 103, scoreY + 9);

		if (game.best > 0) {
			const bestY = game.player.doubleJumpCharges > 0 ? 88 : 62;
			ctx.fillStyle = "rgba(7, 10, 24, 0.55)";
			roundRect(ctx, 12, bestY, 104, 26, 9);
			ctx.fill();
			ctx.fillStyle = "#b7c8ff";
			ctx.font = "700 13px Inter, system-ui";
			ctx.fillText(`${t("best")} ${game.best}`, 24, bestY + 6);
		}

		if (game.boss.active && !game.boss.dead) drawBossHud();
		if (game.message && game.mode === "playing") {
			ctx.fillStyle = "rgba(7, 10, 24, 0.55)";
			roundRect(ctx, cssWidth * 0.5 - 62, 64, 124, 26, 9);
			ctx.fill();
			ctx.fillStyle = "#e9f8ff";
			ctx.font = "700 13px Inter, system-ui";
			ctx.textAlign = "center";
			ctx.fillText(game.message, cssWidth * 0.5, 70);
			ctx.textAlign = "start";
		}
		ctx.restore();
	}

	function drawBossHud() {
		const w = Math.min(280, cssWidth - 40);
		const x = cssWidth * 0.5 - w * 0.5;
		const y = 18;
		ctx.fillStyle = "rgba(7, 10, 24, 0.78)";
		roundRect(ctx, x, y, w, 24, 10);
		ctx.fill();
		ctx.fillStyle = "#2a1930";
		roundRect(ctx, x + 4, y + 4, w - 8, 16, 7);
		ctx.fill();
		ctx.fillStyle = "#d84743";
		roundRect(ctx, x + 4, y + 4, (w - 8) * clamp(game.boss.hp / game.boss.maxHp, 0, 1), 16, 7);
		ctx.fill();
		ctx.fillStyle = "#ffe6c7";
		ctx.font = "700 12px Inter, system-ui";
		ctx.fillText(t("boss"), x + 12, y + 5);
	}

	function drawEnemyHealth(entity, maxHp, hp, y, width) {
		if (hp >= maxHp) return;
		ctx.fillStyle = "rgba(3, 6, 15, 0.72)";
		ctx.fillRect(entity.x - width / 2, y, width, 6);
		ctx.fillStyle = entity.type === "boss" ? "#d84743" : "#75ffc0";
		ctx.fillRect(entity.x - width / 2, y, width * clamp(hp / maxHp, 0, 1), 6);
	}

	function drawFloatingText(text, x, y, color, size) {
		ctx.fillStyle = color;
		ctx.font = `700 ${size}px 'Pixelify Sans', system-ui`;
		ctx.textAlign = "center";
		ctx.fillText(text, x, y);
		ctx.textAlign = "start";
	}

	function drawGlow(x, y, radius, color) {
		const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
		gradient.addColorStop(0, color);
		gradient.addColorStop(1, "rgba(0,0,0,0)");
		ctx.fillStyle = gradient;
		ctx.beginPath();
		ctx.arc(x, y, radius, 0, Math.PI * 2);
		ctx.fill();
	}

	function drawAnchoredAnimation(sheetName, animationName, x, y, desiredHeight, flip = false, alpha = 1) {
		const image = loaded.images[sheetName];
		const sheet = loaded.frames[sheetName];
		const animation = sheet?.animations?.find((item) => item.name === animationName);
		if (!image || !animation) return;
		const frames = animation.frames;
		const frame = frames[Math.floor(game.time * 10) % frames.length];
		const frameScale = desiredHeight / frame.source.h;
		drawAnchoredFrame(image, frame, x, y, frameScale, flip, alpha);
	}

	function drawAnchoredFrame(image, frame, x, y, frameScale, flip, alpha) {
		const crop = frame.content || frame.source;
		ctx.save();
		ctx.globalAlpha = alpha;
		ctx.translate(x, y);
		if (flip) ctx.scale(-1, 1);
		ctx.drawImage(
			image,
			crop.x,
			crop.y,
			crop.w,
			crop.h,
			(crop.x - frame.anchor.x) * frameScale,
			(crop.y - frame.anchor.y) * frameScale,
			crop.w * frameScale,
			crop.h * frameScale,
		);
		ctx.restore();
	}

	function drawAtlasFrame(sheetName, frameName, x, y, w, h) {
		const image = loaded.images[sheetName];
		const frame = loaded.frames[sheetName]?.frames?.find((item) => item.name === frameName);
		if (!image || !frame) return;
		const crop = frame.content || frame.source;
		ctx.drawImage(image, crop.x, crop.y, crop.w, crop.h, x, y, w, h);
	}

	function drawAtlasFrameScreen(sheetName, frameName, x, y, w, h) {
		drawAtlasFrame(sheetName, frameName, x, y, w, h);
	}

	function drawImageCover(context, image, x, y, w, h) {
		const imageRatio = image.width / image.height;
		const targetRatio = w / h;
		let sx = 0;
		let sy = 0;
		let sw = image.width;
		let sh = image.height;
		if (imageRatio > targetRatio) {
			sw = image.height * targetRatio;
			sx = (image.width - sw) / 2;
		} else {
			sh = image.width / targetRatio;
			sy = (image.height - sh) / 2;
		}
		context.drawImage(image, sx, sy, sw, sh, x, y, w, h);
	}

	function playerRect() {
		const player = game.player;
		return { x: player.x - player.w / 2, y: player.y - player.h, w: player.w, h: player.h };
	}

	function enemyRect(enemy) {
		return { x: enemy.x - enemy.w / 2, y: enemy.y - enemy.h, w: enemy.w, h: enemy.h };
	}

	function bossRect() {
		const boss = game.boss;
		return { x: boss.x - boss.w / 2, y: boss.y - boss.h, w: boss.w, h: boss.h };
	}

	function barrelRect(barrel) {
		return { x: barrel.x - 22, y: barrel.y - 44, w: 44, h: 44 };
	}

	function portalRect() {
		return {
			x: SECOND_FLOOR_PORTAL.x - SECOND_FLOOR_PORTAL.w / 2,
			y: SECOND_FLOOR_PORTAL.y - SECOND_FLOOR_PORTAL.h,
			w: SECOND_FLOOR_PORTAL.w,
			h: SECOND_FLOOR_PORTAL.h,
		};
	}

	function projectileRect(projectile) {
		if (projectile.type === "upfire") return { x: projectile.x - 42, y: projectile.y - 58, w: 84, h: 116 };
		return { x: projectile.x - 17, y: projectile.y - 12, w: 34, h: 24 };
	}

	function swordRect(downSlash = false) {
		const player = game.player;
		if (downSlash) {
			return {
				x: player.x - 25,
				y: player.y - 8,
				w: 50,
				h: 70,
			};
		}
		return {
			x: player.x + (player.dir > 0 ? 10 : -82),
			y: player.y - 58,
			w: 72,
			h: 46,
		};
	}

	function rectsOverlap(a, b) {
		return a.x < b.x + b.w && a.x + a.w > b.x && a.y < b.y + b.h && a.y + a.h > b.y;
	}

	function clamp(value, min, max) {
		return Math.max(min, Math.min(max, value));
	}

	function roundRect(context, x, y, w, h, r) {
		const radius = Math.min(r, w / 2, h / 2);
		context.beginPath();
		context.moveTo(x + radius, y);
		context.arcTo(x + w, y, x + w, y + h, radius);
		context.arcTo(x + w, y + h, x, y + h, radius);
		context.arcTo(x, y + h, x, y, radius);
		context.arcTo(x, y, x + w, y, radius);
		context.closePath();
	}

	return {
		start() {
			applyTweaks();
			buildDom();
			resetRun("loading");
			loadBest();
			prepareAudio();
			preloadAssets();
			animationFrame = requestAnimationFrame(loop);
		},
		destroy() {
			cancelAnimationFrame(animationFrame);
			resizeObserver?.disconnect();
			audioHandle?.dispose?.();
			for (const unsubscribe of unsubscribes.splice(0)) unsubscribe();
			mount.replaceChildren();
		},
	};
}
