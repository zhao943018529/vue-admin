<script>
import * as _ from 'lodash';

export default {
  name: 'MenuList',
  props: {},
  methods: {
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
      { class: 'menu-container' },
      _.map(scopedSlots, (item, index) => this.renderChild(h, item, index)),
    );
  },
};
</script>
