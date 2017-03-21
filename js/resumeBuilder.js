// Object: BIO
var bio = {
    "name": "Mariam Fatima",
    "role": "Front-End Web Developer",
    "contacts": {
        "mobile": "8373989626",
        "email": "mariamfatima.co@gmail.com",
        "github": "codemary",
        "location": "Bangalore",
    },
    "pictureURL": "images/profile_pic.jpg",
    "welcomeMessage": "hello!",
    "skills": ["html5", "css3", "javascript", "jquery", "photoshop"]
};

bio.display = function() {

    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

    var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
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
        bio.skills.forEach(function(skill) {
            var formattedSkills = HTMLskills.replace("%data%", skill);
            $("#skills").append(formattedSkills);
        });
    }

    // footer contacts
    $("#footer-contacts").append(formattedMobile);
    $("#footer-contacts").append(formattedEmail);
    $("#footer-contacts").append(formattedGithub);
    $("#footer-contacts").append(formattedLocation);
};

bio.display();

// Object: WORK
var work = {
    "jobs": [{
        "employer": "Presidium",
        "title": "Primary School Teacher",
        "location": "New Delhi",
        "dates": "March 2014 - October 2015",
        "description": "Taught Geography to class 5th and 6th students."
    }]
};

work.display = function() {
    $("#workExperience").append(HTMLworkStart);
    work.jobs.forEach(function(job) {
        var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);

        var formattedLocation = HTMLworkLocation.replace("%data%", job.location);
        $(".work-entry:last").append(formattedLocation);
        var formattedDates = HTMLworkDates.replace("%data%", job.dates);
        $(".work-entry:last").append(formattedDates);
        var formattedDescription = HTMLworkDescription.replace("%data%", job.description);
        $(".work-entry:last").append(formattedDescription);
    });
};
work.display();

// Object: PROJECTS
var projects = {
    "projects": [{
        "title": "My Portfolio",
        "dates": "January 2017",
        "description": "Made a responsive website using HTML5, CSS3 and Gulp.",
        "images": ["Images/portfolio_project.png"]
    }, ]
};

projects.display = function() {
    $("#projects").append(HTMLprojectStart);
    projects.projects.forEach(function(project) {
        var formattedProjectTitle = HTMLprojectTitle.replace("%data%", project.title);
        $(".project-entry:last").append(formattedProjectTitle);
        var formattedProjectDates = HTMLprojectDates.replace("%data%", project.dates);
        $(".project-entry:last").append(formattedProjectDates);
        var formattedProjectDescription = HTMLprojectDescription.replace("%data%", project.description);
        $(".project-entry:last").append(formattedProjectDescription);

        if (project.images.length > 0) {
            project.images.forEach(function(image) {
                var formattedProjectImage = HTMLprojectImage.replace("%data%", image);
                $(".project-entry:last").append(formattedProjectImage);
            });
        }
    });
};
projects.display();

// Object: EDUCATION
var education = {
    "schools": [{
            "name": "Amity University",
            "location": "New Delhi",
            "degree": "B.Ed.",
            "majors": "Child Development",
            "years": "2013-2014"
        },
        {
            "name": "Jamia Millia Islamia",
            "location": "New Delhi",
            "degree": "Masters",
            "majors": "Geography",
            "years": "2011-2013"
        },
        {
            "name": "Kamala Nehru College",
            "location": "New Delhi",
            "degree": "B.A.",
            "majors": "Geography",
            "years": "2008-2011"
        }
    ],
    "onlineCourses": [{
        "title": "Nanodegree Front-End Web Development",
        "school": "Udacity",
        "years": "November 2016 - July 2017",
        "url": "https://in.udacity.com/course/front-end-web-developer-nanodegree--nd001/"
    }]
};

education.display = function() {
    $("#education").append(HTMLschoolStart);
    education.schools.forEach(function(school) {
        var formattedCollegeName = HTMLschoolName.replace("%data%", school.name);
        var formattedCollegeDegree = HTMLschoolDegree.replace("%data%", school.degree);
        $(".education-entry").append(formattedCollegeName + formattedCollegeDegree);
        var formattedCollegeDates = HTMLschoolDates.replace("%data%", school.years);
        $(".education-entry").append(formattedCollegeDates);
        var formattedCollegeLocation = HTMLschoolLocation.replace("%data%", school.location);
        $(".education-entry").append(formattedCollegeLocation);
        var formattedCollegeMajors = HTMLschoolMajor.replace("%data%", school.majors);
        $(".education-entry").append(formattedCollegeMajors);


    });
    // online courses
    $(".education-entry").append(HTMLonlineClasses);
    education.onlineCourses.forEach(function(onlineCourse) {
        var formattedOnlineCollegeTitle = HTMLonlineTitle.replace("%data%", onlineCourse.title);
        var formattedOnlineschoolschool = HTMLonlineSchool.replace("%data%", onlineCourse.school);
        $(".education-entry").append(formattedOnlineCollegeTitle + formattedOnlineschoolschool);
        var formattedOnlineCollegeDates = HTMLonlineDates.replace("%data%", onlineCourse.years);
        $(".education-entry").append(formattedOnlineCollegeDates);
        var formattedOnlineCollegeUrl = HTMLonlineURL.replace("%data%", onlineCourse.url);
        $(".education-entry").append(formattedOnlineCollegeUrl);
    });
};
education.display();

// Click Locations
$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;
    logClicks(x, y);
});

// Internationaliz the name
function inName(name) {
    name = name.trim().split(" ");
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();

    return name[0] + " " + name[1];
}
$("#main").append(internationalizeButton);

// Add a map
$("#mapDiv").append(googleMap);
