import { defineComponent } from 'vue'

// named exports referencing variable declaration: ok
const Bar = defineComponent({
  render() {
    return <div>Test</div>
  }
})
export default Bar
