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
    menu: [
      {name: "HOME"},
      {name: "ABOUT"},
      {name: "PROCESS"},
      {name: "TESTIMONIALS"},
      {name: "ABOUT"}
    ],
    cards: [
      {
        img: "assets/img/Human.png",
        title: "Human Capital",
        paragraph: "Humanizing business: Harness the power of technlogy to improve the way people work."
      },
      {
        img: "assets/img/Core.png",
        title: "Core Business",
        paragraph: "It takes innovative approaches to transform, modernize, and run existing platforms."
      },
      {
        img: "assets/img/Performance.png",
        title: "Performance",
        paragraph: "Achieving maximum impact and value from investments in finance and supply chain."
      }
    ],
        otherContacts: [
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
        name: "andress",
        font: "fas fa-map-marker-alt",
        text: "Main Avenue, 987",
      },
    ]

  },
  methods: {

  }
});