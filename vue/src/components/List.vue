<template>
  <div class="container">
    <input type="text" v-model="term">
    <button @click="search">Search</button>
    <section class="cards-container">
      <p v-if="empty === true">There's no item to show</p>
      <router-link :to="{ name: 'details', params: { id: book.id } }" class="card" v-else v-for="book in books" v-bind:key="book.id">
        <h4>{{ book.title }}</h4>
        <img :src="book.imageLinks.thumbnail">
      </router-link>
    </section>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "list",
  data() {
    return {
      books: [],
      term: '',
      empty: true
    };
  },
  methods: {
    async search() {
      if (!this.term) return;
      const { data } = await axios.get( `https://www.googleapis.com/books/v1/volumes?q=${this.term}`);
      this.books = data.items.map(book => ({ id: book.id, ...book.volumeInfo }));
      this.empty = false;
    }
  }
};
</script>

<style scoped>
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.container {
  text-align: center;
}

.cards-container {
  display: flex;
  grid-template-rows: 1fr 1fr 1fr;
  justify-content: center;
  align-items: stretch;
  flex-wrap: wrap;
  grid-row-gap: 10px;
  grid-column-gap: 10px;
}

.card {
  box-shadow: 2px 3px rgba(0, 0, 0, 0.2);
  padding: 5px;
  width: 30%;
  min-height: 100px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 5px;
}
</style>
