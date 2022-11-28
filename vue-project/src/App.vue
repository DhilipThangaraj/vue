<!-- Basic -->
<!-- 1.Hello World -->

<!-- <script>
export default {
  data() {
    return {
      message: "Hello World!",
    };
  },
};
</script>

<template>
  <h1>{{ message }}</h1>
</template>

<style></style> -->

<!--
2.This example demonstrates handling user input with the v-on directive.
-->

<script>
export default {
  data() {
    return {
      message: "Hello World!",
    };
  },
  methods: {
    reverseMessage() {
      this.message = this.message.split("").reverse().join("");
    },
  },
  notify() {
    alert("navigation was prevented");
  },
};
</script>

<template>
  <h1>{{ message }}</h1>
  <br />
  <button @click="reverseMessage">Reverse The String</button>
  <br />
  <button @click="() => (message += '!')">Append "!"</button>
  <br />
  <a href="https://vuejs.org" @click.prevent="notify">
    A link with e.preventDefault()
  </a>
</template>

<style>
button,
a {
  display: block;
  margin-bottom: 1em;
}
</style>
