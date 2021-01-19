let app = new Vue({
  el: "#root",
  data: {
    logo: "assets/img/logo.png",
    contacts: [
      {
        phone: [
          font: "fas fa-phone-alt",
          text: "+1(305) 1234-5678",

        ],
        email: [
          font: "fas fa-envelope",
          text: "hello@example.com",

        ],
        facebook: [
          font: "fab fa-facebook-f",
          text: "",

        ],
        twitter: [
          font: "fab fa-twitter",
          text: "",

        ],
        linkedin: [
          font: "fab fa-linkedin-in",
          text: "",
        ]
      }
    ]

  },
  methods: {

  }
});