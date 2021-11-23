<template>
  <form @submit.prevent="submitData">
    <div>
      <input type="text" placeholder="Title" v-model="enteredTitle"/>
    </div>
    <div>
      <input type="text" placeholder="Description" v-model="enteredDescription"/>
    </div>
    <div class="add">
      <button>Add Book</button>
    </div>
  </form>
</template>

<script>
export default {
  emits: ['add-book'],
  data() {
    return{
      enteredTitle: "",
      enteredDescription: ""
    };
  },
  methods: {
    submitData() {
      this.$emit(
        "add-book",
        this.enteredTitle,
        this.enteredDescription,

        this.enteredTitle = "",
        this.enteredDescription = "",
      );
    },
  },
};
</script>

<style scoped>
form {
  margin: 2rem auto;
  max-width: 40rem;
  padding: 1rem;
  border-radius: 12px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  border-left: 3px solid #0E2EE1;
}

form div {
  margin: 1rem 0;
}

input {
  padding: 0.6rem;
  width: 100%;
}
label {
  font-weight: bold;
  margin-right: 1rem;
  width: 7rem;
  display: inline-block;
  color: #777;
  font-size: 15px;
  padding: 10px 0;
}
::placeholder {
  font-style: italic;
  letter-spacing:1px
}
.add {
  display: flex;
  justify-content: flex-end;
}
</style>