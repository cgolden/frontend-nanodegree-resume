var bio = {
	"logopic" : "images/image001.gif",
	"name" : "Chemika R. Golden",
	"role" : "Web Developer",
	"contacts" : {
		"mobile" : "773-450-8036",
		"email" : "chemika.golden@gmail.com",
		"github" : "cgolden",
		"twitter" : "@ChemGolden",
		"location" : "Homewood, IL"
	},
	"welcomeMessage" : "Technology is one of the most recognized tools used to enhance life.  16+ years of career experience in this field has taught me that it's not about whether it can be done, but how to get it done.  Creativity is essential.  As an IT professional, I understand that along with creativity, adaptability and flexibility are vital to my ongoing ability to solve complex problems.  This interactive resume gives an overview of my back-end software development experience and creative, front-end development.  Welcome!",
	"skills" : ["HTML", "CSS","Javascript", "jQuery", "C", "C++", "PL/SQL", "SQL", "SQL*Plus",
				"Unix Shell Scripting", "Oracle Financials", "Oracle Developer Suite", "Six Sigma Green Belt Certified"],
	"biopic" : "images/mypic.jpg"
};



var education = {
	"schools" : [
		{
			"name" : "Depaul University",
			"location" : "Chicago, IL",
			"degree" : "Master of Business Administration",
			"majors" : "Finance",
			"dates" : "June 2004",
			"url" : "www.depaul.edu"
		},
		{
			"name" : "Iowa State University",
			"location" : "Ames, IA",
			"degree" : "Bachelor of Science",
			"majors" : "Management Information Systems",
			"dates" : "December 1997",
			"url" : "www.iastate.edu"
		}
	],
	"onlineCourses" : [
				{
			"title" : "Intro to HTML and CSS",
			"school" : "Udacity",
			"date" : "2014",
			"url" : "https://www.udacity.com/course/ud304"
		},
		{
			"title" : "How to Use Git and GitHub",
			"school" : "Udacity",
			"date" : "2014",
			"url" : "https://www.udacity.com/course/ud775"
		},
		{
			"title" : "JavaScript Basics",
			"school" : "Udacity",
			"date" : "2014",
			"url" : "https://www.udacity.com/course/ud804"
		},
		{
			"title" : "Intro to jQuery",
			"school" : "Udacity",
			"date" : "2014",
			"url" : "https://www.udacity.com/course/ud245"
		}
	]
};

var work = {
	"jobs" : [
		{
			"title" : "Professional Applications Developer",
			"employer" : "AT&T Services, Inc.",
			"dates" : "February 2000 - Present",
			"location" : "Dallas, TX",
			"description" : "Provided Oracle application design, development, and production support across enterprise financial business areas including Project Accounting, Fixed Assets, General Ledger, and Accounts Payable.  Enhanced existing applications and developed bolt-on applications critical to corporate expansion into new markets, while assuring regulatory compliance in a complex financial environment.  Managed and delivered over $10 million of business benefit enhancements to internal financial services clients domestic and international."
		},
		{
			"title" : "Systems Engineer",
			"employer" : "EDS Corporation",
			"dates" : "March 1998 - February 2000",
			"location" : "Troy, MI",
			"description" : "Designed, developed, and implemented deliverables to facilitate HR/Payroll benefits administration and federal regulatory reporting.  Utilized system life cycle methodologies to enhance existing processes on client server and mainframe platforms."
		}
	]
};

var projects = {
	"projects" : [
		{
			"title" : "Amazing Project One",
			"dates" : "2015",
			"description" : "As I progress through the Udacity Front End Developer Nanodegree, I will add projects.  These will include appropriate visuals.  For now, placeholder images have been added.",
			"images" : ["images/abstract-q-c-350-150-10.jpg", "images/abstract-q-c-350-150-8.jpg"]
		},
		{
			"title" : "It Just Keeps Getting Better Project Two",
			"dates" : "2015",
			"description" : "As I progress through the Udacity Front End Developer Nanodegree, I will add projects.  These will include appropriate visuals.  For now, placeholder images have been added.",
			"images" : ["images/abstract-q-c-350-150-5.jpg", "images/technics-q-c-350-150-9.jpg"]
		}
	]
};

bio.display = function () {
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	$("#header").prepend(formattedRole);

	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	$("#header").prepend(formattedName);

	var formattedLogo = HTMLlogoPic.replace("%data%", bio.logopic);
	$("#header").prepend(formattedLogo);

	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile); 
	$("#topContacts").append(formattedMobile);
	formattedMobile = formattedMobile.replace("dark-text", "light-footer"); 
	$("#footerContacts").append(formattedMobile);

	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	$("#topContacts").append(formattedEmail); 
	formattedEmail = formattedEmail.replace("dark-text", "light-footer"); 
	$("#footerContacts").append(formattedEmail);

	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	$("#topContacts").append(formattedGithub);
	formattedGithub = formattedGithub.replace("dark-text", "light-footer"); 
	$("#footerContacts").append(formattedGithub);

	var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
	$("#topContacts").append(formattedTwitter);
	formattedTwitter = formattedTwitter.replace("dark-text", "light-footer"); 
	$("#footerContacts").append(formattedTwitter);

	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	$("#topContacts").append(formattedLocation);
	formattedLocation = formattedLocation.replace("dark-text", "light-footer"); 
	$("#footerContacts").append(formattedLocation);

	var formattedWelcome = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
	$("#header").append(formattedWelcome);

	var formattedBiopic = HTMLbioPic.replace("%data%", bio.biopic);
	$("#header").append(formattedBiopic);

	if (bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);

		for (var skill in bio.skills) {
			if (bio.skills.hasOwnProperty(skill)) {
				var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
				$("#skills").append(formattedSkill);
			}
		}
	}
};

bio.display();


work.display = function () {
	for (var job in work.jobs) {
		if (work.jobs.hasOwnProperty(job)) {
			$("#workExperience").append(HTMLworkStart);

			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
			var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
			var formattedEmployerTitle = formattedEmployer + formattedTitle;
			$(".work-entry:last").append(formattedEmployerTitle);

			var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
			$(".work-entry:last").append(formattedWorkLocation);

			var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
			$(".work-entry:last").append(formattedWorkDates);

			var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
			$(".work-entry:last").append(formattedWorkDescription);
			}
		}
};

work.display();

$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;

	logClicks(x,y);
});

projects.display = function () {
	for (var proj in projects.projects) {
		if (projects.projects.hasOwnProperty(proj)) {
			$("#projects").append(HTMLprojectStart);

			var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[proj].title);
			$(".project-entry:last").append(formattedProjectTitle);

			var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[proj].dates);
			$(".project-entry:last").append(formattedProjectDates);

			var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[proj].description);
			$(".project-entry:last").append(formattedProjectDescription);

			if (projects.projects[proj].images.length > 0) {
				for (var image in projects.projects[proj].images) {
					if (projects.projects[proj].images.hasOwnProperty(image)) {
						var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[proj].images[image]);
						$(".project-entry:last").append(formattedImage);
					}
				}
			}
		}
	}
};

projects.display();

education.display = function () {
	for (var school in education.schools) {
		if (education.schools.hasOwnProperty(school)) {
			$("#education").append(HTMLschoolStart);

			var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
			var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
			var formattedNameDegree = formattedSchoolName + formattedSchoolDegree;
			$(".education-entry:last").append(formattedNameDegree);

			var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
			$(".education-entry:last").append(formattedSchoolDates);

			var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
			$(".education-entry:last").append(formattedSchoolLocation);

			var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
			$(".education-entry:last").append(formattedSchoolMajor);
		}
	}

	$(".education-entry:last").append(HTMLonlineClasses);

	for (var course in education.onlineCourses) {
		if (education.onlineCourses.hasOwnProperty(course)) {
			var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
			var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
			var formattedTitleSchool = formattedOnlineTitle + formattedOnlineSchool;
			$(".education-entry:last").append(formattedTitleSchool);

			var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].date);
			$(".education-entry:last").append(formattedOnlineDates);

			var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
			$(".education-entry:last").append(formattedOnlineURL);
		}
	}
};

education.display();

$("#mapDiv").append(googleMap);