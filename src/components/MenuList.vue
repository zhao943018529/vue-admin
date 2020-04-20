<script>
import * as _ from 'lodash';

export default {
  name: 'MenuList',
  props: {
    collapse: Function,
    deepContains: Function,
  },
  methods: {
    handleMouseLeave(evt) {
      const relatedTarget = evt.relatedTarget;
      if (!this.deepContains(relatedTarget)) {
        this.collapse();
      }
    },
    contains(target) {
      return this.$el.contains(target);
    },
    renderChild(h, item) {
      return h('li', { class: 'menu-item' }, item());
    },
  },
  render(h) {
    const scopedSlots = this.$scopedSlots;
    return h(
      'ul',
      { class: 'menu-container', on: { mouseleave: this.handleMouseLeave } },
      _.map(scopedSlots, (item, index) => this.renderChild(h, item, index)),
    );
  },
};
</script>
