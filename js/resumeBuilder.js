var formattedName = HTMLheaderName.replace("%data%", "Mariam Fatima");

var role = "Front-End Web Developer";
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
