//java script does not work

//please fix


var bio = {
	"name" : "web developer",
	"contacts": {
		"mobile": "650-555-5555"
		"email": "john@example.com",
		"github": "joen doe",
		"twitter": "@johndoe",
		"location": "San Francisco"
		},
		"welcomeMessage": "lorem ipsum dolor sit amet ect ect ect.",
		"skills": [
		"awsomeness", "delivering things", "cryogenic sleep", 
		"saving the universe"
		],
		"bioPic": "images/fry.jpg"
	}

var education = {
	"schools": [
	{
		"name": "Nova Southeastern University",
		"city": "Fort Lauderdale, Fl",
		"degree": "Masters",
		"majors":["cs"],
		"datse": 2013,
		"url": "http://example.com"
	},
	{
		"name": "Eckerd College",
		"city": "Saint Petersberg, FL",
		"degree": "BA",
		"majors": ["CS"]
		"dates" : 2003,
		"url": "http://example.com"
	}

	],
	"onlineCourses": [
	{ 
		"title": "JavaScript Crash Course",
		"school" : "Udacity",
		"dates" : 2014,
		"url": "http://www.udacity.com/course/ud804"

	 }
  ]
}


var work = {
	"jobs": [
	{
		"employer": "planet express",
		"title": "Delivery Boy",
		"dates": "January 3000 - Future",
		"description": "who moved my cheese cheesy feet cauliflower chesse, Queso taleggio when the cheese comes out everybodies happy airdale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss chesse cake. hard cheese blue castello hall parmeson say cheese stinking bishop jarlsberg."
	},
	{
		"employer": "Panucci's Pizza", 
		"title": "Delivery",
		"dates": "1998 - December 31, 1999",
		"description": "who moved my cheesy cheese cauliflower cheese. Queso taleggio when the cheese comes out everbodies happy airdale riccota cheese and wine paneer cambert de normandy. Swiss mozzarella cheese slices feta fromage frais airdale swiss cheesecake. AHrd cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."

	}	
]
		
}


var projects = {
	"projects": [
		{
			"title:" "Sample Project 1",
			"dates": "2014",
			"description": "who moved my chethe cheese cheesey fett cauliflower cheese, Queso taleggio when the cheese come out of everbodies happy airdale riccotta cheese and wine appeer cambert de normandie. swiss mozzarella cheese sclices feta fromage fraits airdale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlseberg."
					"images ": [
				"https://lh3.ggpht.com/23-sq0p0GqF06YX3BwIYPYXLX_Ma_clLXySKEHlphqlxr2l-PPbC80U8SjDi96KTWbNjkfY2Pdq_6yFK9A=s300#w=1757&h=1080",
			"https://lh3.ggpht.com/23-sq0p0GqF06YX3BwIYPIXLX_Ma_clLXySKEHlphqlx2l-PPbC80U8SjDi96KTWbNjKfY2Pdq_gyFK9A=s300#w=1757&h=1080"


			]
		}
	]
}



if(bio.skill.length > 0) {

	$("#header").append(HTMLskillsStart);

	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0])
	
	$("#skills").append(formattedSkill); 
	formattedSkill = HTMLskills.replace("data%", bio.skills[1]);
	$("#skills").append(formattedSkill); 
	formattedSkill = HTMLskills.replace("data%", bio.skills[2]);
	$("#skills").append(formattedSkill); 
	formattedSkill = HTMLskills.replace("data%", bio.skills[3]);
	$("#skills").append(formattedSkill);





}
function displayWork()
for (job in work.jobs) {
	// create new div for work in expirience
	$("#workExpirience").append(HTMLworkStart);
	// concat employer and title
	var formatted employer = HTMLworkerEmployer.replace("%data%, work.jobs[job].employe");
	var formatted title = HTMLworkTitle.replace("%data, work.jobs[job].title");
	var formattedemployerTitle = formattedEmployer + formattedTitle;
	$(".work-entry: last").append(formattedEmployerTitle);

	var formattedDates = HTMLworkDates.replace("%data%, work.jobs[job].dates");
	$(".work-entry:last").append(formmateddates);

	var formattedDescription = HTMLworkDescription.replace("%data", work.jobs[job] description);

	$(".work-entry:last").append(formattedDescription);

}

}


function displayWork() {
	for (job in work.jobs) {

	}
}

displayWork();


$(document).click(function(loc){
	var x = loc.pageX
	var y = loc.pagey

	logclicks(x,y);
});