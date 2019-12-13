<template>
  <div id="app">
    {{titulo}}
    <button @click="titulo += '#'">Botao</button>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      titulo: 'Teste Data usando VueJs!!'
    }
  }
}
</script>

<style >
#app {
  background-color: chocolate;
}
</style>