<template lang="pug">
.segment-collection(v-observe-visibility="{ callback: visibilityChanged }")
  template(v-if="isRendered", v-for="segment in segments")
    segment(v-bind:segment="segment", v-bind:path="path")
</template>

<script>
import segment from './segment.vue';

export default {
  name: 'segment-collection',
  components: {
    segment,
  },
  props: ['segments', 'path'],
  data() {
    return {
      isRendered: false,
    };
  },
  methods: {
    visibilityChanged(isVisible) {
      if (isVisible) {
        this.isRendered = true;
      }
    },
  },
};
</script>
