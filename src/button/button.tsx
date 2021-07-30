import { defineComponent, PropType, toRef } from 'vue'
import './index.css'

export default defineComponent({
  props: {
    type: {
      type: String as PropType<'default' | 'warning'>,
      default: 'default'
    }
  },
  setup: props => {
    return {
      type: toRef(props, 'type')
    }
  },
  render() {
    const { $slots } = this
    console.log(this.type)

    return (
      <div class={{ myButton: true, [`myButton_${this.type}`]: true }}>
        {$slots.default && $slots.default()}
      </div>
    )
  }
})
