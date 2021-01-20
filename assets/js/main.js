let app = new Vue({
  el: "#root",
  data: {
    logo: 'assets/img/logo.png',
    contacts: [
      {
        name: "phone",
        font: "fas fa-phone-alt",
        text: "+1(305) 1234-5678",
      },
      {
        name: "email",
        font: "fas fa-envelope",
        text: "hello@example.com",
      },
      {
        name: "facebook",
        font: "fab fa-facebook-f",
      },
      {
        name: "twitter",
        font: "fab fa-twitter",
      },
      {
        name: "linkedin",
        font: "fab fa-linkedin-in",
      }
    ],

  },
  methods: {

  }
});