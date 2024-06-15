// Define the options of our application
const FlashWord = {
  data() {
    return {
      wordA: "hola",
      wordB: "hello",
      answer: "",
      correct: null,
      showFeedback: false,
      haserror: false,
      categories: ["verbs"],
      level: "easy",
      textContent: "",
      firstname: "",
      lastname: "",
      fullname: "",

      // Array example
      spanishWords: ["hola", "adios", "uno", "dos"],

      // Object example
      word: { a: "hola", b: "hello" },

      // Array of objects example
      words: [
        { wordA: "hola", wordB: "hello" },
        { wordA: "adios", wordB: "goodbye" },
        { wordA: "uno", wordB: "one" },
        { wordA: "dos", wordB: "two" },
      ],
    };
  },
  computed: {
    fullName() {
      return this.firstname + " " + this.lastname;
    },
    shortSw() {
      return this.spanishWords.filter((word) => word.length <= 3);
    },
  },
  watch: {
    firstname() {
      this.fullname = this.firstname + " " + this.lastname;
    },
    lastname() {
      this.fullname = this.firstname + " " + this.lastname;
    },
  },
  methods: {
    checkAnswer() {
      // Note how data properties are accessed via `this`
      if (this.answer == "") {
        this.haserror = true;
        return;
      }
      this.haserror = false;
      this.correct = this.answer == this.wordB;
      this.showFeedback = true;
      this.align = "width: 50px; height: 50px";

      if (this.correct) {
        this.image = "correct";
        this.imageAlt = "Correct check mark";
      } else {
        this.image = "incorrect";
        this.imageAlt = "InCorrect check mark";
      }
    },
    getfullName() {
      return this.firstname + " " + this.lastname;
    },
  },
};

// Create a new Vue instance using our options
const app = Vue.createApp(FlashWord).mount("#app");
