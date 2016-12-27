//java script module
var formattedName = HTMLheaderName.replace("#data", name);

var role = "Web Developer";
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);

$("#header").append(formattedName);

var bio = {
  "name" : "John Doe",
  "role": "Web Developerr",
  "contacts": {
    "mobile": "650-555-5555",
    "email": "john@example.com",
    "github": "johndoe",
    "twitter": "@johndoe",
    "location": "Sanfrancisco"
  },
  "welcomeMessage": "lorem ipsum dolor sit amet ect ect ect.",
  "skills": [
    "awsomness", "delivering things", "cryogenic sleep", "saving the universe"
  ],
  "nioPic": "images/fry.jpg"

}

var education = {
  "schools": [
    {
      "name": "Nova Southeastern University",
      "city": "Fort Lauderdale, Fl",
      "degrees": "Masters",
      "majors" ["CS"],
      "dates": 2003,
      "url": "http://example.com"
    }
  ],
  "onlineCourses": [
    {
      "title": "JavaScript Crash Course",
      "school" : "udacity",
      "dates": 2014,
      "url": "http://www.udacity.com/course/ud804"
    }
  ]
}

var work = {
  "jobs": [
    {
      "employer": "Planet Express",
      "title": "Delivery Boy",
      "dates": "Januarya 3000 - Future",
      "description": "Who moved my cheese sheesy feet cauliflower cheese. Queso teliggio when the cheese comes out everybody happy airdale riccota cheese and wine paneer"

    },
    {
    "employer": "Panucci's Pizza",
    "title": "delivery boy",
    "dates": "1998-december 31, 1999"
    "description": " who moved...."
   }
  ]
}

var projects = {
  "projects": [
    {
      "title": "Sample Project 1",
      "dates": "2014",
      "dsecription": "who moved my cheese...",
      "images": [
        "img1",
        "img",
      ]
    }
  ]
}

function displayWork() {

for (job in work.jobs) {
  // create new div for work expirience
  $("#workExpirience").append(HTMLworkStart);
  //concat emloyer and title
  var formattedemployer = HTML workEmployer.replace("%data%", work.jobs[job].employer);
  var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
  var formattedEmployer + formattedTitle;
  $(".work-entry: last").append(formattedEmployerTitle);

  var formattedDates = HTMLworkdates.replace("%data%", work.jobs[job].dates);
  $(".work-entry: last").append(formattedDates);

  var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].de)
  $(".work-entry: last").append(formattedDescription);
}
}

projects.display = function() {
  for (project in projects.projects) {
    $("#projects").append(HTMLproject);

    var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
    $(".project-entry: last").append(formattedTitle);

    var formattedDates = HTMLprojectDates.replace("%data%", project.projects[project].
    dates);
    $(".project-entry: last").append(formattedDates);

    var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
    $(".project-entry: last").append(formattedDescription);

    if (projects.projects[project].images.length > 0) {
      for (image in projects.projects[project].images) {
        var fomattedImage = HTMLprojectImage.replace("%ddata%", projects.projects[projects] .image[image]);
        $(".project-entry: last").append(formattedImage);
      }
    }
  }
}
