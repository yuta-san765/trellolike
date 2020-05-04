<template>
  <div class="board">
      {{ board }}
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: mapState(['board']),
};
</script>
<style lang="scss"></style>
