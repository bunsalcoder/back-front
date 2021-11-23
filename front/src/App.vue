<template>
  <section>
    <header>
      <h1>My books</h1>
    </header>
    <book-form @add-book="AddNewBook"></book-form>
    <ul>
      <book-card
      v-for="book in books"
      :key="book.id"
      :id="book.id"
      :title="book.title"
      :description="book.description"
      @deleteBook="deleteBook"></book-card>
    </ul>
  </section>
</template>

<script>
import BookForm from './components/BookForm.vue';
import axios from 'axios';

const BASE_REST_API_URL = "http://localhost:8000";

export default {
  components: { BookForm },
  data() {
    return {
      books: [
        {
          id: 1,
          title: "Book 1",
          description: "Description 1",
        },
        {
          id: 2,
          title: "Book 2",
          description: "Description 2",
        },
      ],
    };
  },
  methods: {
    deleteBook(bookId) {
      axios.delete(BASE_REST_API_URL + '/api/books/' + bookId)
        .then(() => {
          this.books = this.books.filter((book) => book.id !== bookId);
      });
    },
    AddNewBook(title, description) {
      const newBook = {
          title: title,
          description: description,
      };
      axios.post(BASE_REST_API_URL + "/api/books", newBook)
        .then((response) => {
          this.books.unshift(response.data.book);
        });
    }
  },
  mounted() {
    axios.get(BASE_REST_API_URL + '/api/books')
      .then((response) => {
        this.books = response.data;
      });
  },
};
</script>

<style>
:root {
  --main-color: #3a2dfc;
}

* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem auto;
  border-radius: 10px;
  padding: 1rem;
  background-color: var(--main-color);
  color: white;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

button {
  cursor: pointer;
  border: 1px solid var(--main-color);
  background-color: var(--main-color);
  color: white;
  padding: 0.5rem 1rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}

button:hover,
button:active {
  box-shadow: 1px 2px 6px rgba(0, 0, 0, 0.26);
}
</style>