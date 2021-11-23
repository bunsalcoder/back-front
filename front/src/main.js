import { createApp } from "vue";

import App from "./App.vue";
import BookCard from "./components/BookCard.vue";
import BookForm from "./components/BookForm.vue";

const app = createApp(App);
app.component("book-card", BookCard);
app.component("book-form", BookForm);

app.mount("#app");
