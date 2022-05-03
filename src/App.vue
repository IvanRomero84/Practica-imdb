<template>
  <div id="app">
    <b-navbar toggleable type="dark" variant="dark">
      <b-button variant="dark" class="backButon" @click="cancel">
      <b-icon icon="arrow-left" aria-hidden="true"/>
      </b-button>
      <b-navbar-brand href="#">
        {{title}}
      </b-navbar-brand>
        <b-dropdown variant="dark" right>
        <b-dropdown-item variant="dark" @click="setLocale('es-es')">Es-es</b-dropdown-item>
        <b-dropdown-divider></b-dropdown-divider>
        <b-dropdown-item variant="dark" @click="setLocale('en-us')">En-us</b-dropdown-item>
      </b-dropdown>
      <b-navbar-toggle target="navbar-toggle-collapse">
        <template #default="{ expanded }">
          <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
          <b-icon v-else icon="chevron-bar-down"></b-icon>
        </template>
      </b-navbar-toggle>

      <b-collapse id="navbar-toggle-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="#" @click="setTitle(i18n.movies)">
            <router-link class="links" to="/movies">{{i18n.movies}}</router-link>
            </b-nav-item>
          <b-nav-item href="#" @click="setTitle(i18n.actors)">
            <router-link class="links" to="/actors">{{i18n.actors}}</router-link>
            </b-nav-item>
          <b-nav-item href="#" @click="setTitle(i18n.companies)">
            <router-link class="links" to="/companies">{{i18n.companies}}</router-link>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  data() {
    const i18n = {
      actors: this.$t('generic.actors'),
      companies: this.$t('generic.companies'),
      movies: this.$t('generic.movies'),
    };
    return {
      title: i18n.movies.toUpperCase(),
      locale: 'en-us',
      i18n,
    };
  },
  mounted() {
    // this.setTitle();
  },
  methods: {
    cancel() {
      this.$router.back();
    },
    setLocale(locale) {
      this.$i18n.locale = locale;
      console.log(this.$i18n.locale);
    },
    setTitle(title) {
      this.title = title.toUpperCase();
    },
  },
};
</script>

<style lang="stylus">
.backButton{
  color: white;
}
.navbar{
  padding: 0 20px;
}
.links{
  color: white;
  text-decoration: none;
}
#app
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  color #2c3e50
  background: #686e74;
</style>
