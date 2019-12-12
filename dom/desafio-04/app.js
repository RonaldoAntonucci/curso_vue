new Vue({
	el: '#desafio',
	data: {
		toggleEffect: '',
		class1: 'class1',
		class2: 'class2',
		class3: "red"
	},
	methods: {
		iniciarEfeito () {
			setInterval(() => {
				this.toggleEffect = this.toggleEffect === 'encolher' ? 'destaque' : 'encolher';
			}, 1000)
		},

		iniciarProgresso () {

		}
	},
})
