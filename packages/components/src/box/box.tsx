import { defineComponent } from 'vue';
import { prefixName } from '../theme/index';

export const Box = defineComponent({
  props: {
    class: String
  },
  setup(props, { slots }) {
    return () => {
      return (
        <div class={`${prefixName}-box ${props.class || ''}`}>
          <div>{slots?.default?.()}</div>
          <div>{slots?.label?.()}</div>
        </div>
      );
    };
  }
});
