<template>
  <li
    :style="finished"
    class="task"
    @click="()=> setFinished(task.name)"
  >
    <span
      class="close"
      :styled="isFInished"
    >x</span>
    <p>{{task.name}}</p>
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
      if (this.task.finished) {
        return {
          color: '#DDD',
          borderLeft: '12px solid #0a8f08',
          backgroundColor: '#4caf50',
          textDecoration: 'line-through'
        }

      }
      return {
        backgroundColor: '#f44336',
        borderLeft: '12px solid #b73229'
      }
    },
    isFinished () {
      if (this.task.finished) {
        return { backgroundColor: '#0a8f08', }

      }

      return {
        backgroundColor: '#b73229 !important',
      }
    }
  }
}
</script>

<style>
.task {
  box-sizing: border;
  padding: 10px;
  display: flex;
  border-radius: 8px;
  width: 350px;
  height: 150px;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  font-size: 2rem;
  font-weight: 300;
  cursor: pointer;
  user-select: none;
  position: relative;
}

.close {
  position: absolute;
  right: 5px;
  top: 1px;
  font-size: 0.9rem;
  font-weight: 600;
  height: 20px;
  width: 20px;
  border-radius: 10px;
}
</style>