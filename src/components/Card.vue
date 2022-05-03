<template>
<div :class="selectedMovie ? 'card': 'card-selected'" @click="clickMovie">
  <b-card
    :title="name"
    :img-src="image"
    :img-alt="image"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2"
  >
    <b-card-text
    class="generos"
    v-for="genre in this.genres"
    :key="genre.id"
    >
      <span>#{{genre}} </span>
    </b-card-text>
  </b-card>
</div>
</template>

<script>
export default {
  name: 'Card',
  components: {},
  props: {
    name: String,
    image: String,
    genres: Array,
    movie: Object,
    selected: Boolean,
  },
  data() {
    return {
      selectedMovie: true,
    };
  },
  methods: {
    clickMovie() {
      this.$router.push({
        name: 'DetailMovie',
        params: {
          movie: this.movie,
        },
      });
    },
  },
};
</script>

<style>
.generos{
  display:inline;
};
.card{
  background: rgb(216, 211, 211);
}
.card-selected{
  border: 1px solid #000;
  /* margin: 2% 4%; */
}
</style>
