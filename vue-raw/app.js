const app = Vue.createApp({
  data() {
    return {
      firstName: "Dhilip",
      lastName: "Kumar",
      email: "dkcandoit@gmail.com",
      gender: "Male",
      picture: "https://randomuser.me/api/portraits/med/men/25.jpg",
    };
  },
});

app.mount("#app");
