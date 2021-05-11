const app = Vue.createApp({
  data() {
    return {
      courseGoaA: "finished the couser and learn Vue !",
      courseGoaB: "master vue  and create amazing goal ",
      vueLink: "https://vuejs.org",
    };
  },

  methods: {
    ouputGoal() {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        return this.courseGoaA;
      } else {
        return this.courseGoaB;
      }
    },
  },
});

app.mount("#user-goal");
