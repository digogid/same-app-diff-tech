<template>
  <section>
    <button @click="goBack">Go Back</button>
    <h2>{{book.title}}</h2>
    <p>{{book.authors.join(', ')}}</p>
    <img :src="book.imageLinks.thumbnail" alt />
    <p v-html="book.description"></p>
  </section>
</template>

<script>
import httpClient from "axios";

export default {
  name: "detail",
  data() {
    return {
      id: this.$route.params.id,
      book: {
        authors: [],
        imageLinks: {}
      }
    };
  },
  async created() {
    const { data } = await httpClient.get(
      `https://www.googleapis.com/books/v1/volumes/${this.id}`
    );
    this.book = { ...data.volumeInfo };
  },
  methods: {
    goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push("/");
    }
  }
};
</script>

<style scoped>
img {
  max-width: 120px;
}
</style>