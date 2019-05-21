
module.exports = function(app){
  const people = require("../people.json");
  const hakkinda = require("../hakkinda.json");
  const contact = require("../contact.json");
  /*app.get('/', function (req, res) {
    res.render('index', { title: 'Hey', message: 'Hello there! This is the main page' })
  
  })*/
  app.get("/", (req, res) => {
    res.render("index", {
      title: "Homepage",
      header:"Araba Kiralama",
      people: people.profiles
    });
  });


  app.get("/about", function (req, res) {
    res.render("about", { 
      title: "Hey", 
      text: hakkinda.lines
    });
  });


  app.get('/resources', function (req, res) {
    res.render('resources', { title: 'Hey', message: 'Araç Kiralama Firmaları' })
  });

  app.get("/contact", function (req, res) {
    res.render("contact", { 
      title: "Hey", 
      text: contact.lines
    });
  });
};
