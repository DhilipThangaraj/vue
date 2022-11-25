<!--
1.A simple markdown editor.
-->

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
    <textarea class="input" :value="input" @input="update"></textarea>
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

<!-- 2.Fetching Data Example -->

<!-- <script>
const API_URL = `https://api.github.com/repos/vuejs/core/commits?per_page=3&sha=`;

export default {
  data() {
    return {
      branches: ["main", "v2-compat"],
      currentBranch: "main",
      commits: null,
    };
  },
  created() {
    //fetch on init
    this.fetchData();
  },
  watch: {
    currentBranch: "fetchData",
  },
  methods: {
    async fetchData() {
      const url = `${API_URL}${this.currentBranch}`;
      this.commits = await await (await fetch(url)).json();
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
  <h1>Latest vue core commits</h1>
  <template v-for="branch in branches">
    <input type="radio" :id="branch" :value="branch" v-model="currentBranch" />
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
