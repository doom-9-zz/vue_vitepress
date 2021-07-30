import { defineComponent, PropType, toRef } from 'vue'
import './index.css'

export default defineComponent({
  props: {
    type: {
      type: String as PropType<'default' | 'warning'>,
      default: 'default'
    },
    size: {
      type: String as PropType<'small' | 'medium' | 'large'>,
      default: 'medium'
    }
  },
  setup: props => {
    return {
      type: toRef(props, 'type')
    }
  },
  render() {
    const { $slots } = this

    return (
      <div
        class={{
          zButton: true,
          [`zButton_${this.type}`]: true,
          [`zButton_${this.size}`]: true
        }}
        aria-label="button"
      >
        {$slots.default && $slots.default()}
      </div>
    )
  }
})
