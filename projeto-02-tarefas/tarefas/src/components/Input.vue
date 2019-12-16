<template>
  <div class="input">
    <form
      action=""
      @submit.prevent="(data) => onSubmit(data.target.task.value)"
    >
      <input
        type="text"
        placeholder="Nova tarefa?"
        name="task"
        id="task"
      />
      <button type="submit">+</button>
    </form>
  </div>
</template>

<script>
export default {
  props: {
    onSubmit: {
      type: Function,
      required: true
    }
  }
}
</script>

<style>
.input {
  border: 1px solid;
  border-radius: 5px;
  width: 400px;
}
.input form input {
  display: flex;
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  background: none;
  height: 30px;
  padding: 2px 8px;
  margin: 0px;
  font-size: 1.1rem;
  border: 0px;
}

.input form {
  background: none;
  display: flex;
}

.input form button {
  background-color: rgb(120, 124, 175);
  font-weight: bold;
  font-size: 1.5rem;
  border: 0;
  height: 38px;
  width: 38px;
  border-left: none;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}
</style>