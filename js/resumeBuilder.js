var bio = {
  "name" : "Mariam Fatima",
  "role" : "Front-End Web Developer",
  "contacts" : {
    "mobile" : "8373989626",
    "email" : "mariamfatima.co@gmail.com",
    "github" : "codemary",
    "location" : "Bangalore",
  },
  "pictureURL" : "images/fry.jpg",
  "welcomeMessage" : "Hi!",
  "skills" : ["HTML5", "CSS3", "JavaScript"]
};

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
var formattedSkills = HTMLskillsStart.replace("%data%", bio.skills);
var formattedImage = HTMLbioPic.replace("%data%", bio.pictureURL);

// contacts
$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedGithub);
$("#topContacts").append(formattedLocation);

$("#header").append(formattedImage);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(formattedWelcomeMessage);

// skills
$("#header").append(formattedSkills);
for (var i = 0; i < bio.skills.length; i++) {
  var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
  $("#skills").append(formattedSkill);
}
