const filterHidden = document.getElementsByClassName("filter-container");
const test = document.getElementsByClassName("test");

var app = new Vue({
  el: "#app",
  data: {},

  data() {
    return {
      categorie: ["soepen", "pannenkoeken", "hamburgers"],
      menu: [
        {
          id: 1,
          categorie: "soepen",
          name: "Soep van de dag",
        },

        {
          id: 2,
          categorie: "soepen",
          name: "Groenten soep",
        },

        {
          id: 3,
          categorie: "soepen",
          name: "Tomaten soep",
        },

        {
          id: 4,
          categorie: "soepen",
          name: "Kippen soep",
        },

        {
          id: 5,
          categorie: "Pannenkoeken",
          name: "Naturel",
        },

        {
          id: 6,
          categorie: "Pannenkoeken",
          name: "Kaas en spek",
        },

        {
          id: 7,
          categorie: "Pannenkoeken",
          name: "Boeren pannekoek",
        },

        {
          id: 8,
          categorie: "Pannenkoeken",
          name: "Hawaii",
        },

        {
          id: 9,
          categorie: "Pannekoeken",
          name: "Pannenkoek met roodfruit",
        },

        {
          id: 10,
          categorie: "hamburgers",
          name: "Classic hamburger",
        },

        {
          id: 11,
          categorie: "hamburgers",
          name: "Hamburger met bacon",
        },

        {
          id: 12,
          categorie: "hamburgers",
          name: "Vega hamburger",
        },
      ],
    };
  },

  methods: {
    read(data) {
      //alert(data);
      var msg = new SpeechSynthesisUtterance(data);
      window.speechSynthesis.speak(msg);
    },
  },
});
