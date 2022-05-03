<template>
  <div class="card">
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group id="input-group-1" :label="`${i18n.title}:`" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="form.title"
          type="text"
          :placeholder="i18n.titlePlaceholder"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-1" :label="`${i18n.image}:`" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="form.poster"
          type="text"
          :placeholder="i18n.yearPlaceholder"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" :label="`${i18n.year}:`" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.year"
          type="number"
          :placeholder="i18n.imagePlaceholder"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" :label="`${i18n.duration}:`" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.duration"
          type="number"
          :placeholder="i18n.durationPlaceholder"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" :label="`${i18n.score}:`" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.imdbRating"
          type="number"
          :placeholder="i18n.scorePlaceholder"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" :label="`${i18n.genres}:`" label-for="input-3">
        <b-form-select id="input-3" v-model="form.genre" :options="genres">
        </b-form-select>
      </b-form-group>
      <b-button v-if="!editable" type="submit" variant="primary">{{i18n.submit}}</b-button>
      <b-button v-else type="submit" variant="success">Edit</b-button>
      <b-button type="reset" class="buttons" variant="secondary">{{i18n.reset}}</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  name: 'newMovie',
  props: {
    movie: {
      type: Object,
    },
    editable: {
      type: Boolean,
    },
  },
  data() {
    const i18n = {
      actors: this.$t('generic.actors'),
      duration: this.$t('generic.duration'),
      durationPlaceholder: this.$t('generic.durationPlaceholder'),
      genres: this.$t('generic.genres'),
      image: this.$t('generic.image'),
      imagePlaceholder: this.$t('generic.imagePlaceholder'),
      reset: this.$t('generic.reset'),
      score: this.$t('generic.score'),
      scorePlaceholder: this.$t('generic.scorePlaceholder'),
      submit: this.$t('generic.submit'),
      title: this.$t('generic.title'),
      titlePlaceholder: this.$t('generic.titlePlaceholder'),
      year: this.$t('generic.year'),
      yearPlaceholder: this.$t('generic.yearPlaceholder'),
    };
    return {
      i18n,
      form: {
        title: '',
        year: '',
        poster: '',
        actors: [],
        duration: '',
        genre: [],
        id: '',
        imdbRating: '',
      },
      genres: [
        { text: 'Select One', value: null },
        ['Comedy'],
        ['Adventure'],
        ['Musical'],
        ['Romance'],
        ['Horror'],
        ['Thriller'],
        ['War'],
        ['Drama'],
        ['Sci-Fi'],
      ],
      show: true,
    };
  },
  mounted() {
    this.editMovie();
  },
  methods: {
    editMovie() {
      if (this.movie) {
        this.form.title = this.movie.title;
        this.form.year = this.movie.year;
        this.form.poster = this.movie.poster;
        this.form.duration = this.movie.duration;
        this.form.imdbRating = this.movie.imdbRating;
        this.form.actors = this.movie.actors;
        this.form.genre = this.movie.genre;
      }
    },
    async onSubmit(event) {
      event.preventDefault();
      const url = 'http://localhost:3000/movies';
      if (this.movie) {
        try {
          const response = await fetch(`${url}/${this.movie.id}`, {
            method: 'PUT',
            body: JSON.stringify(this.form),
            headers: {
              'Content-Type': 'application/json',
            },
          });
          console.log('Success:', response);
        } catch (err) {
          console.log(err);
        } finally {
          this.$router.go(-2);
        }
      } else {
        try {
          const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(this.form),
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
      }
    },
    onReset(event) {
      event.preventDefault();
      this.form.title = '';
      this.form.year = '';
      this.form.poster = '';
      this.form.actors = [];
      this.form.duration = '';
      this.form.genre = [];
      this.form.id = '';
      this.form.imdbRating = '';
      (this.show = false);
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};
</script>

<style>
.card{
  margin: 2% 2%;
}
.buttons{
  margin: 0 1%;
}
</style>
