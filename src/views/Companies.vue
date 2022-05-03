<template>
  <div>
    <Card
    v-for="companie in this.$store.state.companiesList"
    :name="companie.name"
    :key="companie.id"
    />
  </div>
</template>

<script>
import Card from '@/components/Card.vue';

export default {
  name: 'Estudios',
  components: {
    Card,
  },
  data() {
    return {
    };
  },
  mounted() {
    this.$store.dispatch('getCompanies');
  },
};
</script>
