<template>
  <div>
  <b-container fluid>
    <b-row>
    <b-col>
      <h4>{{movie.title}}</h4>
    </b-col>
  </b-row>
  <b-row>
    <b-col>
      <b-img :src="movie.poster" fluid-grow alt="Fluid-grow image"></b-img>
    </b-col>
  </b-row>

  <b-row>
    <b-col>
      <label for="input-small">{{i18n.score}}</label>
      <b-form-input id="input-small" type="number" disabled v-model="movie.imdbRating" size="sm"/>
    </b-col>
    <b-col>
      <label for="input-small">{{i18n.duration}}</label>
      <b-form-input id="input-small" type="number" disabled v-model="movie.duration" size="sm" />
    </b-col>
  </b-row>

  <b-row>
    <b-col>
      <label for="input-default">{{i18n.actors}}</label>
      <b-form-input id="input-default" type="text" :value="arrayToString(movie.actors)" disabled/>
    </b-col>
  </b-row>

    <b-row>
    <b-col>
      <label for="input-default">{{i18n.year}}</label>
      <b-form-input id="input-default" type="number" v-model="movie.year" disabled/>
    </b-col>
  </b-row>

  <b-row>
    <b-col>
      <label for="input-default">{{i18n.genres}}</label>
      <b-form-input id="input-default" type="text" :value="arrayToString(movie.genre)" disabled/>
    </b-col>
  </b-row>
  <div class="editButton">
    <b-button pill variant="success" @click="editMovie">
      <b-icon icon="pencil-fill" aria-hidden="true"></b-icon>
    </b-button>
  </div>
  <div class="deleteButton">
    <b-button pill variant="danger" @click="deleteMovie">
      <b-icon icon="trash-fill" aria-hidden="true"></b-icon>
    </b-button>
  </div>
</b-container>
  </div>
</template>

<script>

export default {
  name: 'DetailMovie',
  props: {
    movie: {
      type: Object,
      required: true,
    },
  },
  components: {
  },
  data() {
    const i18n = {
      actors: this.$t('generic.actors'),
      duration: this.$t('generic.duration'),
      genres: this.$t('generic.genres'),
      score: this.$t('generic.score'),
      year: this.$t('generic.year'),
    };
    return {
      i18n,
    };
  },
  methods: {
    arrayToString(arr) {
      return (arr.length) ? `#${arr.join(' ')} ` : '';
    },
    async deleteMovie(event) {
      event.preventDefault();
      const url = 'http://localhost:3000/movies';
      try {
        const response = await fetch(`${url}/${this.movie.id}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        console.log('Success:', response);
      } catch (err) {
        console.log(err);
      } finally {
        this.$router.back();
      }
    },
    editMovie() {
      this.$router.push({
        name: 'NewMovie',
        params: {
          movie: this.movie,
          editable: true,
        },
      });
    },
  },
};
</script>

<style>
.editButton{
  position: fixed;
  width: 16%;
  height: 16%;
  bottom: 20px;
  right: 60px;
}
.deleteButton{
  position: fixed;
  width: 16%;
  height: 16%;
  bottom: 20px;
  right: 5px;
}
h4{
  text-align: center;
  color: white;
  margin: 5px 0
}
</style>
