const expect = chai.expect;

const testContacts = [
  [
    {
      id: 1,
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz",
      picture: "https://via.placeholder.com/150/FF0000/FFFFFF?Text=LG",
      address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Green Vale",
        zipcode: "92998-3874",
        geo: {
          lat: "-37.3159",
          lng: "81.1496",
        },
      },
      phone: "1-770-736-8031 x56442",
      website: "hildegard.org",
      company: {
        name: "Romaguera-Crona",
        catchPhrase: "Multi-layered client-server neural-net",
        bs: "harness real-time e-markets",
      },
    },
    {
      id: 2,
      name: "Ervin Howell",
      email: "Shanna@melissa.tv",
      picture: "https://via.placeholder.com/150/FF0000/FFFFFF?Text=EH",
      address: {
        street: "Victor Plains",
        suite: "Suite 879",
        city: "Blue Vale",
        zipcode: "90566-7771",
        geo: {
          lat: "-43.9509",
          lng: "-34.4618",
        },
      },
      phone: "010-692-6593 x09125",
      website: "anastasia.net",
      company: {
        name: "Deckow-Crist",
        catchPhrase: "Proactive didactic contingency",
        bs: "synergize scalable supply-chains",
      },
    },
    {
      id: 3,
      name: "Clementine Bauch",
      email: "Nathan@yesenia.net",
      picture: "https://via.placeholder.com/150/FF0000/FFFFFF?Text=CB",
      address: {
        street: "Douglas Extension",
        suite: "Suite 847",
        city: "Green Vale",
        zipcode: "59590-4157",
        geo: {
          lat: "-68.6102",
          lng: "-47.0653",
        },
      },
      phone: "1-463-123-4447",
      website: "ramiro.info",
      company: {
        name: "Romaguera-Jacobson",
        catchPhrase: "Face to face bifurcated interface",
        bs: "e-enable strategic applications",
      },
    },
    {
      id: 4,
      name: "Patricia Lebsack",
      email: "Julianne.OConner@kory.org",
      picture: "https://via.placeholder.com/150/FF0000/FFFFFF?Text=PL",
      address: {
        street: "Hoeger Mall",
        suite: "Apt. 692",
        city: "South Vale",
        zipcode: "53919-4257",
        geo: {
          lat: "29.4572",
          lng: "-164.2990",
        },
      },
      phone: "493-170-9623 x156",
      website: "kale.biz",
      company: {
        name: "Robel-Corkery",
        catchPhrase: "Multi-tiered zero tolerance productivity",
        bs: "transition cutting-edge web services",
      },
    },
    {
      id: 5,
      name: "Chelsey Dietrich",
      email: "Lucio_Hettinger@annie.ca",
      picture: "https://via.placeholder.com/150/FF0000/FFFFFF?Text=CD",
      address: {
        street: "Skiles Walks",
        suite: "Suite 351",
        city: "North Vale",
        zipcode: "33263",
        geo: {
          lat: "-31.8129",
          lng: "62.5342",
        },
      },
      phone: "(254)954-1289",
      website: "demarco.info",
      company: {
        name: "Keebler LLC",
        catchPhrase: "User-centric fault-tolerant solution",
        bs: "revolutionize end-to-end systems",
      },
    },
    {
      id: 6,
      name: "Mrs. Dennis Schulist",
      email: "Karley_Dach@jasper.info",
      picture: "https://via.placeholder.com/150/FF0000/FFFFFF?Text=DS",
      address: {
        street: "Norberto Crossing",
        suite: "Apt. 950",
        city: "South Vale",
        zipcode: "23505-1337",
        geo: {
          lat: "-71.4197",
          lng: "71.7478",
        },
      },
      phone: "1-477-935-8478 x6430",
      website: "ola.org",
      company: {
        name: "Considine-Lockman",
        catchPhrase: "Synchronised bottom-line interface",
        bs: "e-enable innovative applications",
      },
    },
    {
      id: 7,
      name: "Kurtis Weissnat",
      email: "Telly.Hoeger@billy.biz",
      picture: "https://via.placeholder.com/150/FF0000/FFFFFF?Text=KW",
      address: {
        street: "Rex Trail",
        suite: "Suite 280",
        city: "Blue Vale",
        zipcode: "58804-1099",
        geo: {
          lat: "24.8918",
          lng: "21.8984",
        },
      },
      phone: "210.067.6132",
      website: "elvis.io",
      company: {
        name: "Johns Group",
        catchPhrase: "Configurable multimedia task-force",
        bs: "generate enterprise e-tailers",
      },
    },
    {
      id: 8,
      name: "Nicholas Runolfsdottir V",
      email: "Sherwood@rosamond.me",
      picture: "https://via.placeholder.com/150/FF0000/FFFFFF?Text=NR",
      address: {
        street: "Ellsworth Summit",
        suite: "Suite 729",
        city: "Green Vale",
        zipcode: "45169",
        geo: {
          lat: "-14.3990",
          lng: "-120.7677",
        },
      },
      phone: "586.493.6943 x140",
      website: "jacynthe.com",
      company: {
        name: "Abernathy Group",
        catchPhrase: "Implemented secondary concept",
        bs: "e-enable extensible e-tailers",
      },
    },
    {
      id: 9,
      name: "Glenna Reichert",
      email: "Chaim_McDermott@dana.io",
      picture: "https://via.placeholder.com/150/FF0000/FFFFFF?Text=GR",
      address: {
        street: "Dayna Park",
        suite: "Suite 449",
        city: "South vale",
        zipcode: "76495-3109",
        geo: {
          lat: "24.6463",
          lng: "-168.8889",
        },
      },
      phone: "(775)976-6794 x41206",
      website: "conrad.com",
      company: {
        name: "Yost and Sons",
        catchPhrase: "Switchable contextually-based project",
        bs: "aggregate real-time technologies",
      },
    },
    {
      id: 10,
      name: "Clementina DuBuque",
      email: "Rey.Padberg@karina.biz",
      picture: "https://via.placeholder.com/150/FF0000/FFFFFF?Text=CD",
      address: {
        street: "Kattie Turnpike",
        suite: "Suite 198",
        city: "Blue Vale",
        zipcode: "31428-2261",
        geo: {
          lat: "-38.2386",
          lng: "57.2232",
        },
      },
      phone: "024-648-3804",
      website: "ambrose.net",
      company: {
        name: "Hoeger LLC",
        catchPhrase: "Centralized empowering task-force",
        bs: "target end-to-end models",
      },
    },
  ],
];

describe("Render Pattern", function () {
  after(function () {
    render();
  });

  describe("renderContact()", function () {
    const dom = document.createElement("div");
    const contact = contacts[Math.floor(Math.random() * contacts.length)];

    before(function () {
      dom.innerHTML = renderContact(contact);
    });

    after(function () {});

    it('should create element with class "name" for name', function () {
      expect(dom.querySelector(".name").innerHTML).to.contain(contact.name);
    });

    it("should create div element for name", function () {
      expect(dom.querySelector(".name").tagName).to.equal("DIV");
    });

    it('should have class "big" for name', function () {
      expect(dom.querySelector(".name").classList.contains("big")).to.be(true);
    });

    it("should include a delete button", function () {
      const button = dom.querySelector(".deleteBtn");
      expect(button).to.not.be.null;
      expect(button.innerHTML).to.equal("X");
    });

    it('should create div with class "phone" for phone', function () {
      expect(dom.querySelector(".phone").innerHTML).to.contain(contact.phone);
      expect(dom.querySelector(".phone").tagName).to.equal("DIV");
    });

    it('should create div with class "email" for email', function () {
      expect(dom.querySelector(".email").innerHTML).to.equal(contact.email);
      expect(dom.querySelector(".email").tagName).to.equal("DIV");
    });

    it('should create div with class "website" for website', function () {
      expect(dom.querySelector(".website").innerHTML).to.equal(contact.website);
      expect(dom.querySelector(".website").tagName).to.equal("DIV");
    });
  });

  describe("loadCities()", function () {
    let temp;
    beforeEach(function () {
      temp = [...contacts];
      contacts.splice(0, contacts.length, ...testContacts);
    });

    afterEach(function () {
      contacts.splice(0, contacts.length, ...temp);
    });

    it("should add 0 cities when contact list is empty", function () {
      contacts.splice(0);
      loadCities();
      const options = document.querySelectorAll("#filterOptions > option");
      expect(options.length).to.equal(1);
    });

    it("should load all cities from contact list", function () {
      loadCities();
      const options = document.querySelectorAll("#filterOptions > option");
      expect(options.length).to.equal(5);
    });

    it("should leave the default in place", function () {
      loadCities();
      const option = document.querySelector("#filterOptions > option");
      expect(option.innerHTML).to.contain("Select City");
    });
  });

  describe("render()", function () {
    describe("when contacts is empty", function () {
      let temp;
      beforeEach(function () {
        temp = [...contacts];
        contacts.splice(0);
      });

      afterEach(function () {
        contacts.splice(0, contacts.length, ...temp);
      });

      it("should display nothing when contact list is empty", function () {
        render(contacts);
        const cards = document.querySelectorAll(".card");
        expect(cards.length).to.equal(0);
      });
    });

    describe("when contact list is not empty", function () {
      let temp;
      beforeEach(function () {
        temp = [...testContacts, ...testContacts];
      });

      afterEach(function () {
        temp = null;
      });

      it("should display all contacts in list", function () {
        render(temp);
        const cards = document.querySelectorAll(".card");
        expect(cards.length).to.equal(temp.length);
      });
    });
  });

  describe("filterByCity()", function () {
    describe("when array is empty", function () {
      let temp;
      beforeEach(function () {
        temp = [...contacts];
        contacts.splice(0);
      });

      afterEach(function () {
        contacts.splice(0, contacts.length, ...temp);
      });

      it("should result in empty array when contact list is empty ", function () {
        expect(filterByCity("Blue Vale")).to.deep.equal([]);
      });
    });

    describe("when contact list is not empty", function () {
      let temp;
      beforeEach(function () {
        temp = [...contacts];
      });

      afterEach(function () {
        contacts.splice(0, contacts.length, ...temp);
        document.querySelector("#filterOptions").value = "0";
      });
      it("should filter contacts by city", function () {
        const filtered = filterByCity("Blue Vale");
        expect(filtered.length).to.equal(3);
      });

      it("should be able to select the city to filter", function () {
        const selector = document.querySelector("#filterOptions");
        selector.value = "Blue Vale";
        const event = new window.Event("change");
        selector.dispatchEvent(event);
        expect(document.querySelectorAll(".card").length).to.equal(3);
      });
    });
  });

  describe("deleteContact()", function () {
    let temp;
    beforeEach(function () {
      temp = [...contacts];
      contacts.splice(0, contacts.length, ...testContacts);
    });

    afterEach(function () {
      contacts.splice(0, contacts.length, ...temp);
    });

    it("should delete nothing when contact list is empty", function () {
      contacts.splice(0);
      deleteContact("1");

      expect(contacts.length).to.equal(0);
    });

    it("should delete nothing if id not found", function () {
      deleteContact("11");
      expect(contacts.length).to.equal(10);
    });

    it("should delete a contact", function () {
      deleteContact("1");
      expect(contacts.length).to.equal(9);
    });
  });
});
