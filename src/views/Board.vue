<template>
  <div class="board">
    <div class="column" v-for="(column, $columnIndex) in board.columns" :key="$columnIndex">
      <div class="column__name">
        {{ column.name }}
      </div>
      <div class="task" v-for="(task, $taskIndex) in column.tasks" :key="$taskIndex">
        <span class="task__name">
          {{ task.name }}
        </span>
        <p v-if="task.description" class="task__description">
          {{task.description}}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: mapState(['board']),
};
</script>
<style lang="scss">
.board {
  padding: 16px;
  display: flex;
  align-items: flex-start;
  overflow: scroll;
}
.column {
  width: 250px;
  padding: 8px;
  margin: 0 8px;
  background-color: #ddd;
  border-radius: 5px;
  box-shadow: 0 0 5px;
  &__name {
    display: flex;
    font-weight: bold;
    margin-bottom: 4px;
  }
}
.task {
  width: 100%;
  margin-bottom: 4px;
  background-color: #eee;
  border-radius: 5px;
  border-bottom: 1px solid #a2a2a2;
  &__name {
    display: flex;
    font-weight: bold;
  }
}
</style>
