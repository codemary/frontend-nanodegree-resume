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

// Object: WORK, dot notation
var work = {
  "job": [
    {
      "employer": "Presidium",
      "title": "Primary School Teacher",
      "location": "New Delhi",
      "dates": "March 2014 - October 2015",
      "description": "Taught Geography to class 5th and 6th students."
    }
  ]
}

$("#workExperience").append(HTMLworkStart);
var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.job[0].employer);
$(".work-entry").append(formattedWorkEmployer);
var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.job[0].title);
$(".work-entry").append(formattedWorkTitle);
var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.job[0].location);
$(".work-entry").append(formattedWorkLocation);
var formattedWorkDates = HTMLworkDates.replace("%data%", work.job[0].dates);
$(".work-entry").append(formattedWorkDates);
var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.job[0].description);
$(".work-entry").append(formattedWorkDescription);

// Object: PROJECTS
var projects = {
  "project": [
    {
      "title": "My Portfolio",
      "dates": "January 2017",
      "description": "Made a responsive website using HTML5, CSS3 and Gulp."
    }
  ]
}

$("#projects").append(HTMLprojectStart);
var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.project[0].title);
$(".project-entry").append(formattedProjectTitle);
var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.project[0].dates);
$(".project-entry").append(formattedProjectDates);
var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.project[0].description);
$(".project-entry").append(formattedProjectDescription);

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
