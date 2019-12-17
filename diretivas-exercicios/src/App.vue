<template>
  <div id="app">
    <h1>Diretivas</h1>
    <hr>
    <p v-text="'Usando diretiva v-text'"></p>
    <p v-html="'Usando diretiva <strong>HTML</strong>'"></p>
    <hr>
    <p v-destaque:fundo.atrasar="'lightblue'">Usando diretiva personalizada</p>

    <!-- <p v-teste:argumento.mod1.mod2.mod3="'valor'"></p> -->
  </div>
</template>

<script>
export default {
  directives: {
    destaque: {
      bind (el, binding, vnode) {
        //el.style.backgroundColor = "lightgreen"

        let atraso = 0;
        if (binding.modifiers['atrasar']) atraso = 3000;

        setTimeout(() => {
          if (binding.arg === 'fundo') {
            el.style.background = binding.value
          } else {
            el.style.color = binding.value
          }
        }, atraso)
      }
    }
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  font-size: 2.5rem;
}
</style>
