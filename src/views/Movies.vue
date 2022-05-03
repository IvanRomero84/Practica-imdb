<template>
  <div>
    <b-container fluid>
      <b-row>
        <b-col>
          <Card
            v-for="movie in this.$store.state.moviesList"
            :image="movie.poster"
            :name="movie.title"
            :genres="movie.genre"
            :key="movie.id"
            :selected="movie.selected"
            :movie="movie"
          />
        </b-col>
      </b-row>
    </b-container>
  <b-button pill variant="warning" class="addButton" @click="addMovie">+</b-button>
  </div>
</template>

<script>
import Card from '@/components/Card.vue';

export default {
  name: 'Movies',
  components: {
    Card,
  },
  data() {
    return {
    };
  },
  mounted() {
    this.$store.dispatch('getMovies');
  },
  methods: {
    addMovie() {
      this.$router.push({
        name: 'NewMovie',
      });
    },
  },
};
</script>

<style>
.card{
  margin: 2% 4%;
  text-align: center;
}
.addButton{
  position: fixed;
  width: 16%;
  font-size: 2em;
  color: white;
  bottom: 40px;
  right: 40px;
}
</style>
