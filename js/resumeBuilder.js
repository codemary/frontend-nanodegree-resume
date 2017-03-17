// Object: BIO
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

function inName(name) {
  name = name.trim().split(" ");
  console.log(name);
  name[1] = name[1].toUpperCase();
  name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

  return name[0] + " " + name[1];
}

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

if (bio.skills.length > 0) {
  $("#header").append(HTMLskillsStart);

  var formattedSkills = HTMLskills.replace("%data%", bio.skills[0]);
  $("#skills").append(formattedSkills);
  formattedSkills = HTMLskills.replace("%data%", bio.skills[1]);
  $("#skills").append(formattedSkills);
  formattedSkills = HTMLskills.replace("%data%", bio.skills[2]);
  $("#skills").append(formattedSkills);
}

// Object: WORK
var work = {
  "jobs": [
    {
      "employer": "Presidium",
      "title": "Primary School Teacher",
      "location": "New Delhi",
      "dates": "March 2014 - October 2015",
      "description": "Taught Geography to class 5th and 6th students."
    }
  ]
}

function displayWork(){
for (var i = 0; i < work.jobs.length; i++) {
  $("#workExperience").append(HTMLworkStart);

  var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
  var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
  var formattedEmployerTitle = formattedEmployer + formattedTitle;
  $(".work-entry:last").append(formattedEmployerTitle);

  var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
  $(".work-entry:last").append(formattedLocation);
  var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
  $(".work-entry:last").append(formattedDates);
  var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
  $(".work-entry:last").append(formattedDescription);
}
}
displayWork();

// Object: PROJECTS
var projects = {
  "projects": [
    {
      "title": "My Portfolio",
      "dates": "January 2017",
      "description": "Made a responsive website using HTML5, CSS3 and Gulp.",
      "images": []
    }
  ]
}

projects.display = function() {
  for (project in projects.projects) {
    $("#projects").append(HTMLprojectStart);

    var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
    $(".project-entry:last").append(formattedProjectTitle);
    var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
    $(".project-entry:last").append(formattedProjectDates);
    var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
    $(".project-entry:last").append(formattedProjectDescription);

    if (projects.projects[project].images.length > 0) {
      for (image in projects.projects[project].images) {
        var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image])
        $(".project-entry:last").append(formattedProjectImage);
      }

    }
  }
}
projects.display();

// Object: EDUCATION
var education = {
  "colleges": [
    {
      "name": "Amity University",
      "location": "New Delhi",
      "degree": "Bachelor of Education",
      "years": "2013-2014"
    },
    {
      "name": "Jamia Millia Islamia",
      "location": "New Delhi",
      "degree": "M.A. Geography",
      "years": "2011-2013"
    },
    {
      "name": "Kamala Nehru College",
      "location": "New Delhi",
      "degree": "B.A. Honors Geography",
      "years": "2008-2011"
    }
  ],
  "onlineCourses": [
    {
      "title": "Nanodegree Front-End Web Development",
      "school": "Udacity",
      "years": "November 2016 - July 2017",
      "url": "https://in.udacity.com/course/front-end-web-developer-nanodegree--nd001/"
    }
  ]
}

$("#education").append(HTMLschoolStart);
for (var i = 0; i < education.colleges.length; i++) {
  var formattedCollegeName = HTMLschoolName.replace("%data%", education.colleges[i].name);
  $(".education-entry").append(formattedCollegeName);
  var formattedCollegeLocation = HTMLschoolLocation.replace("%data%", education.colleges[i].location);
  $(".education-entry").append(formattedCollegeLocation);
  var formattedCollegeDegree = HTMLschoolDegree.replace("%data%", education.colleges[i].degree);
  $(".education-entry").append(formattedCollegeDegree);
  var formattedCollegeDates = HTMLschoolDates.replace("%data%", education.colleges[i].years);
  $(".education-entry").append(formattedCollegeDates);
}

// online courses
$(".education-entry").append(HTMLonlineClasses);
var formattedOnlineCollegeTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[0].title);
$(".education-entry").append(formattedOnlineCollegeTitle);
var formattedOnlineCollegeSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[0].school);
$(".education-entry").append(formattedOnlineCollegeSchool);
var formattedOnlineCollegeDates = HTMLonlineDates.replace("%data%", education.onlineCourses[0].years);
$(".education-entry").append(formattedOnlineCollegeDates);
var formattedOnlineCollegeUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[0].url);
$(".education-entry").append(formattedOnlineCollegeUrl);

// Click Locations
$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;
  logClicks(x,y);
});

// Internationaliz the name
$("#main").append(internationalizeButton);

// Add a map
$("#mapDiv").append(googleMap);

// footer contacts
$("#footerContacts").append(formattedMobile);
$("#footerContacts").append(formattedEmail);
$("#footerContacts").append(formattedGithub);
$("#footerContacts").append(formattedLocation);
