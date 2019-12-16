<template>
  <div id="app">
    <div id="appContainer">
      <ProgressBar :progress="progress" />
      <Input :onSubmit="(data) => tasks.push({name: data, finished: false})" />
      <Tasks>
        <Task
          v-for="task in tasks"
          :task="task"
          :key="task.name"
          :setFinished="setFinished"
        />
      </Tasks>
    </div>
  </div>
</template>

<script>
import ProgressBar from './components/ProgressBar.vue'
import Input from './components/Input.vue'
import Tasks from './components/Tasks.vue'
import Task from './components/Task.vue'
export default {
  components: { ProgressBar, Input, Tasks, Task },
  data () {
    return {
      tasks: []
    }
  },
  computed: {
    progress () {
      const total = this.tasks.length;
      if (total === 0) return 100;
      const finished = this.tasks.filter(t => t.finished).length;
      if (finished === 0) return 0;

      console.log(finished)

      return 100 / (total / finished)

    }

  },
  methods: {
    setFinished (d) {
      const task = this.tasks.find(t => t.name === d)
      task.finished = true;
    }
  }
}
</script>

<style>
body {
  font-family: "Lato", sans-serif;
  background: linear-gradient(to right, rgb(22, 34, 42), rgb(58, 96, 115));
  color: #fff;
}

#app {
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

#app > h1 {
  margin-bottom: 5px;
  font-weight: 300;
  font-size: 3rem;
}

#app > div {
  margin: 0;
  padding: 0;
}

#appContainer {
  width: 1200px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
