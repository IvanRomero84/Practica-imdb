<template>
  <div>
    <Card
    v-for="actor in this.$store.state.actorsList"
    :image="actor.img"
    :name="`${actor.first_name} ${actor.last_name}`"
    :key="actor.id"
    />
  </div>
</template>

<script>
import Card from '@/components/Card.vue';

export default {
  name: 'Actors',
  components: {
    Card,
  },
  data() {
    return {
    };
  },
  mounted() {
    this.$store.dispatch('getActors');
  },
};
</script>
