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

<!-- 7. A Simple markdown editor -->

<!-- <script>
import { marked } from "marked";
import { debounce } from "lodash-es";

export default {
  data: () => ({
    input: "# hello",
  }),
  computed: {
    output() {
      return marked(this.input);
    },
  },
  methods: {
    update: debounce(function (e) {
      this.input = e.target.value;
    }, 100),
  },
};
</script>
<template>
  <div class="editor">
    <textarea class="input" :value="input" @input="update"> </textarea>
    <div class="output" v-html="output"></div>
  </div>
</template>
<style>
body {
  margin: 0;
}

.editor {
  height: 100vh;
  display: flex;
}

.input,
.output {
  overflow: auto;
  width: 50%;
  height: 100%;
  box-sizing: border-box;
  padding: 0 20px;
}

.input {
  border: none;
  border-right: 1px solid #ccc;
  resize: none;
  outline: none;
  background-color: #f6f6f6;
  font-size: 14px;
  font-family: "Monaco", courier, monospace;
  padding: 20px;
}

code {
  color: #f66;
}
</style> -->

<!-- computed and methods difference -->

<!-- <script>
export default {
  data: () => ({
    counterComputed: 0,
    counterMethod: 0,
  }),
  computed: {
    printTextComputed: function () {
      console.log("counter printed from computed:", this.counterComputed);
    },
  },
  methods: {
    printTextMethod: function () {
      console.log("counter printed from method:", this.counterMethod);
    },
  },
};
</script>
<template>
  <button @click="counterComputed++">computed button</button>
  <p>{{ counterComputed }}</p>
  <br />
  <button @click="counterMethod++">method button</button>
  <p>{{ counterMethod }}</p>
  <br />
  {{ printTextMethod() }}
  {{ printTextComputed }}
</template> -->

<!-- 8. Fetch Data -->

<!-- <script>
const API_URL = `https://api.github.com/repos/vuejs/core/commits?per_page=3&sha=`;

export default {
  data: () => ({
    branches: ["main", "v2-compat"],
    currentBranch: "main",
    commits: null,
  }),

  created() {
    // fetch on init
    console.log("==================created");
    this.fetchData();
  },

  watch: {
    // re-fetch whenever currentBranch changes
    currentBranch: "fetchData",
  },

  methods: {
    async fetchData() {
      const url = `${API_URL}${this.currentBranch}`;
      this.commits = await (await fetch(url)).json();
    },
    truncate(v) {
      const newline = v.indexOf("\n");
      return newline > 0 ? v.slice(0, newline) : v;
    },
    formatDate(v) {
      return v.replace(/T|Z/g, " ");
    },
  },
};
</script>

<template>
  <h1>Latest Vue Core Commits</h1>
  <template v-for="branch in branches">
    <input
      type="radio"
      :id="branch"
      :value="branch"
      name="branch"
      v-model="currentBranch"
    />
    <label :for="branch">{{ branch }}</label>
  </template>
  <p>vuejs/vue@{{ currentBranch }}</p>
  <ul>
    <li v-for="{ html_url, sha, author, commit } in commits">
      <a :href="html_url" target="_blank" class="commit">{{
        sha.slice(0, 7)
      }}</a>
      - <span class="message">{{ truncate(commit.message) }}</span
      ><br />
      by
      <span class="author">
        <a :href="author.html_url" target="_blank">{{ commit.author.name }}</a>
      </span>
      at <span class="date">{{ formatDate(commit.author.date) }}</span>
    </li>
  </ul>
</template>

<style>
a {
  text-decoration: none;
  color: #42b883;
}
li {
  line-height: 1.5em;
  margin-bottom: 20px;
}
.author,
.date {
  font-weight: bold;
}
</style> -->
