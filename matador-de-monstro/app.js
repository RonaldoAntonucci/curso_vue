new Vue({
	el: '#desafio',
	data: {
		pLife: 100,
		mLife: 100,
		logs: [],
		panel: {
			width: '100%',
			backgroundColor: '#bbb',
			display: 'flex',
			flex: 1,
			justifyContent: 'space-around',
		},
		creature: {
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			justifyContent: 'center',
			padding: '30px 0',
			width: '100%',
			margin: '0 100px',
		},
		bar: {
			width: '100%',
			height: '30px',
			borderRadius: '5px',
			marginBottom: '10px',
			display: 'flex',
			flexDirection: 'row',
			border: 'solid 1px'
		},
		actions: {
			width: '100%',
			height: '150px',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			backgroundColor: '#ddd'
		},
		button: {
			fontSize: '1.3rem',
			fontWeight: 'bold',
			padding: '8px',
			margin: '0 10px',
			borderRadius: '5px'
		},
		log: {
			display: 'flex',
			flexDirection: 'column',
			width: '100%',
			alignItems: 'center',
			justifyContent: 'flex-start',
			color: 'white',
		},
		logRow: {
			display: 'flex',
			flexDirection: 'column',
			margin: '5px 0',
			width: '100%',
			textAlign: 'center',
			fontWeight: 'bold',
		},
		logContent: {
			padding: '10px',
			borderRadius: '5px'
		},
		final: {
			width: '100%',
			height: '150px',
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			justifyContent: 'center',
		},
		blue: {
			backgroundColor: 'blue',
			color: 'white'
		},
		red: {
			backgroundColor: 'red',
			color: 'white',
		},
		green: {
			backgroundColor: 'green',
			color: 'white'
		},
		grey: {
			backgroundColor: 'grey',
			color: 'black'
		},
		orange: {
			backgroundColor: 'orange',
			color: 'black'
		}
	},
	computed: {
		damage () {
			return {
				display: 'flex',
				flex: 1,
				backgroundColor: 'grey'
			}
		},
		playerLife () {
			return {
				backgroundColor: this.pLife > 30 ? 'green' : 'red',
				width: this.pLife + '%'
			}
		},
		monsterLife () {
			return {
				backgroundColor: this.mLife > 30 ? 'green' : 'red',
				width: this.mLife + '%'
			}
		},
		gameOver () {
			return (this.mLife > 0 && this.pLife > 0) ? false : this.pLife > 0 ? 'Você ganhou!' : 'Você perdeu!';
		},
	},
	methods: {
		getRandomInt (min, max) {
			min = Math.ceil(min);
			max = Math.floor(max);
			return Math.floor(Math.random() * (max - min + 1)) + min;
		},
		ataque () {
			const monsterAttack = this.getRandomInt(8, 12);
			const playerAttack = this.getRandomInt(6, 9);
			const newPLife = this.pLife - monsterAttack
			const newMLife = this.mLife - playerAttack
			this.pLife = newPLife >= 0 ? newPLife : 0;
			this.mLife = newMLife >= 0 ? newMLife : 0;
			this.logs.push(`JOGADOR ATINGIU MONSTRO COM ${playerAttack}.`)
			this.logs.push(`MONSTRO ATINGIU JOGADOR COM ${monsterAttack}.`)
		},
		ataEspecial () {
			const monsterAttack = this.getRandomInt(6, 9);
			const playerAttack = this.getRandomInt(8, 12);
			const newPLife = this.pLife - monsterAttack
			const newMLife = this.mLife - playerAttack
			this.pLife = newPLife >= 0 ? newPLife : 0;
			this.mLife = newMLife >= 0 ? newMLife : 0;
			this.logs.push(`JOGADOR ATINGIU MONSTRO COM ${playerAttack}.`)
			this.logs.push(`MONSTRO ATINGIU JOGADOR COM ${monsterAttack}.`)
		},
		curar () {
			const monsterAttack = this.getRandomInt(7, 12);
			const cura = this.getRandomInt(5, 13);
			const newPLife = this.pLife - monsterAttack + cura
			this.pLife = newPLife > 100 ? 100 : newPLife < 0 ? 0 : newPLife;
			this.logs.push(`JOGADOR CUROU ${cura}.`)
			this.logs.push(`MONSTRO ATINGIU JOGADOR COM ${monsterAttack}.`)
		},
		sair () {
			this.pLife = 0;
		},
		newGame () {
			this.pLife = 100
			this.mLife = 100
			this.gameOver = null
			this.logs = []
		}
	}
});
