<template>
  <div class="container">
    <Button>hello</Button>
    <Button type="warning">world</Button>
  </div>
</template>

<script lang="ts">
import { Button } from 'vue_vitepress'

export default {
  components: { Button },
  setup() {
    return {}
  }
}
</script>

<style scoped>
.container {
  display: flex;
}
</style>
