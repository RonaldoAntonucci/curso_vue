new Vue({
	el: '#desafio',
	data: {
		pLife: 100,
		mLife: 100,
		logs: [{
			jogador: 'JOGADOR ATINGIU MONSTRO COM 9.',
			monstro: 'MONSTRO ATINGIU JOGADOR COM 12.'
		}],
		panel: {
			width: '100%',
			backgroundColor: '#ddd',
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
			backgroundColor: 'green',
			width: '100%',
			height: '150px',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center'
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
			justifyContent: 'flex-start'
		},
		logRow: {
			display: 'flex',
			flexDirection: 'column'
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
				backgroundColor: 'red',
				width: this.pLife + '%'
			}
		},
		monsterLife () {
			return {
				backgroundColor: 'red',
				width: this.mLife + '%'
			}
		}
	},
	methods: {
		ataque () {
			const monsterAttack = Math.random(8, 12);
			const playerAttack = Math.random(6, 9);
			this.pLife -= monsterAttack;
			this.mLife -= playerAttack;
			this.logs.push[{
				jogador: 'JOGADOR ATINGIU MONSTRO COM 9.',
				monstro: 'MONSTRO ATINGIU JOGADOR COM 12.'
			}]
			console.log(this.logs)
		}
	}
});
