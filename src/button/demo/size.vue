<template>
  <div class="container">
    <Button size="small">小</Button>
    <Button>中</Button>
    <Button size="large">大</Button>
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
