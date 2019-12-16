<template>
  <div class="content">
    <h1>Tarefas</h1>
    <div class="bar">
      <div :style="progressBar"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    progress: {
      type: Number,
      required: true
    }
  },
  computed: {
    progressBar () {
      return {
        width: this.progress + '%',
        height: '100%',
        borderRadius: '5px',
        backgroundColor: this.progress < 30 ? 'red' : 'green',
        margin: '0px',
        padding: '0px',
      }
    }
  }
}
</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
}

.content > h1 {
  font-size: 2.5rem;
}

.content > div {
  margin: 20px 10px;
}
.bar {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0px;
  width: 80%;
  height: 30px;
  border-radius: 5px;
  border: 1px solid white;
}
</style>