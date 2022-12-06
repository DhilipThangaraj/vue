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

<!-- 4. Conditional and loops -->

<!-- <script>
export default {
  data() {
    return {
      show: true,
      list: [1, 2, 3],
    };
  },
};
</script>
<template>
  <button @click="show = !show">Show List</button>
  <button @click="list.push(list.length + 1)">Push Number</button>
  <button @click="list.pop()">Pop Number</button>
  <button @click="list.reverse()">Reverse List</button>

  <ul v-if="show && list.length">
    <li v-for="item of list">{{ item }}</li>
  </ul>

  <p v-else-if="list.length">List is not empty.However its hidden</p>

  <p v-else>List is empty.</p>
</template>
<style>
button {
  margin: 10px;
  border: 1px solid;
  border-radius: 2px;
}
</style> -->

<!-- 5.Form Binding -->
<!-- <script>
export default {
  data() {
    return {
      text: "Edit me",
      checked: true,
      checkedNames:["Jack"],
      picked:"one",
      selected:"A",
      multiSelected: ['A']
    };
  },
};
</script>
<template>
  <h2>Text Input</h2>
  <input v-model="text" />
  <h2>Single Check Box</h2>
  <input type="checkbox" id="checkbox" v-model="checked" />
  <label for="checkbox">Checked : {{ checked }}</label>
 
  <h2>Multi Check Box</h2>
  <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
  <label for="jack">Jack</label>
  <input type="checkbox" id="john" value="John" v-model="checkedNames">
  <label for="john">John</label>
  <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
  <label for="mike">Mike</label>
  <p>Checked names: <pre>{{ checkedNames }}</pre></p>
  <h2>Radio</h2>
  <input type="radio" id="one" value="One" v-model="picked"/>
  <label for="one">One</label>
  <br/>
  <input type="radio" id="two" value="Two" v-model="picked"/>
  <label for="one">Two</label>
  <br/>
  <input type="radio" id="three" value="Three" v-model="picked"/>
  <label for="one">Three</label>
  <br/>
  <span>Picked: {{ picked }}</span>
  <h2>Select</h2>
  <select v-model="selected">
   <option disabled value="">
    Please select one
   </option>
    <option>A</option>
    <option>B</option>
    <option>C</option>
    <span>Selected: {{ selected }}</span>
  </select>
  <h2>Multi Select</h2>
  <select v-model="multiSelected" multiple style="width:100px">
    <option>A</option>
    <option>B</option>
    <option>C</option>
  </select>
  <span>Selected: {{ multiSelected }}</span>
</template>
<style></style> -->

<!-- 6.simple component -->
<!-- <script>
import TodoItemVue from "./components/TodoItem.vue";

export default {
  components: {
    TodoItemVue,
  },
  data() {
    return {
      groceryList: [
        { id: 0, text: "Vegetables" },
        { id: 1, text: "Cheese" },
        { id: 2, text: "Whatever else humans are supposed to eat" },
      ],
    };
  },
};
</script>

<template>
  <ol>
    <TodoItemVue v-for="item in groceryList" :todo="item" :key="item.id">
    </TodoItemVue>
  </ol>
</template>

<style></style> -->
