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
<!-- 
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
</style> -->

<!-- 3.Attribute binding -->
<!--
Here we are reactively binding element attributes / properties to the state.
The :title syntax is short for v-bind:title.
-->

<!-- <script>
export default {
  data() {
    return {
      message: "Hello World!",
      isRed: true,
      color: "yellow",
    };
  },
  methods: {
    toggleRed() {
      this.isRed = !this.isRed;
    },
    toggleColor() {
      this.color = this.color === "green" ? "blue" : "green";
    },
  },
};
</script>

<template>
  <p>
    <span :title="message">
      Hover your mouse over me for a few seconds to see my dynamically bound
      title!
    </span>
  </p>


  <p :class="{ red: isRed }" @click="toggleRed">
    This should be red... but click me to toggle it.
  </p>

  <p :style="{ color }" @click="toggleColor">
    This should be green, and should toggle between green and blue on click.
  </p>
</template>

<style>
.red {
  color: red;
}
</style> -->
