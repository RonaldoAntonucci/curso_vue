<template>
  <li
    :style="finished"
    class="task"
    @click="()=> setFinished(task.name)"
  >
    <h1>{{task.name}}</h1>
  </li>
</template>

<script>
export default {
  props: {
    task: {
      type: Object,
      required: true
    },
    setFinished: {
      type: Function,
      required: true
    },
  },
  computed: {
    finished () {
      return {
        backgroundColor: this.task.finished ? 'green' : 'red'
      }
    }
  }
}
</script>

<style>
.task {
  display: flex;
  border-radius: 5px;
  width: 250px;
  height: 150px;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.task h1 {
  font-size: 25px;
  max-width: 200px;
}
</style>