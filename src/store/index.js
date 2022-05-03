import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    moviesList: [],
    actorsList: [],
    companiesList: [],
  },
  mutations: {
    setMovies(state, payload) {
      state.moviesList = payload;
    },
    setActors(state, payload) {
      state.actorsList = payload;
    },
    setCompanies(state, payload) {
      state.companiesList = payload;
    },
  },
  actions: {
    async getMovies({ commit }) {
      try {
        const response = await fetch('http://localhost:3000/movies');
        const data = await response.json();
        data.forEach((element) => {
          Vue.set(element, 'selected', false);
        });
        commit('setMovies', data);
      } catch (err) {
        console.log(err);
      }
    },
    async getActors({ commit }) {
      try {
        const response = await fetch('http://localhost:3000/actors');
        const data = await response.json();
        commit('setActors', data);
      } catch (err) {
        console.log(err);
      }
    },
    async getCompanies({ commit }) {
      try {
        const response = await fetch('http://localhost:3000/companies');
        const data = await response.json();
        commit('setCompanies', data);
      } catch (err) {
        console.log(err);
      }
    },
  },
  modules: {
  },
});
