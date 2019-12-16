<template>
  <ul class="taskList">
    <slot />
  </ul>
</template>

<script>
export default {
}
</script>

<style>
.taskList {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  list-style: none;
}
.taskList li {
  margin: 20px;
}
</style>