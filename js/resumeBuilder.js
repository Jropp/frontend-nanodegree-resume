var bio = {
    "name": "Jason Ropp",
    "role": "JavaScript Programmer",
    "contacts": {
        "mobile": "541-619-4586",
        "email": "jasonropp@jasonropp.com",
        "github": "@jropp",
        "twitter": "@jason__ropp",
        "location": "Goshen, IN"
    },
    "welcomeMessage": "Hey there amigos!",
    "skills": ["JavaScript", "Effective Writing", "Creativity"],
    "image": "images/me.jpg",
    "display": function() {
        var formattedBioPic = HTMLbioPic.replace("%data%", bio.image);
        $("#header").append(formattedBioPic);
        var formattedHeaderName = HTMLheaderName.replace("%data%", bio.name);
        $("#header").append(formattedHeaderName);
        if (bio.skills.length > 0) {
            $("#header").append(HTMLskillsStart);
        }
        var formattedSkills = HTMLskills.replace("%data%", bio.skills[0]);
        $("#skills").append(formattedSkills);
        var formattedfooterSkills = HTMLskills.replace("%data%", bio.skills[1]);
        $("#skills").append(formattedfooterSkills);
        var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        $("#topContacts").append(formattedMobile);
        var formattedfooterMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        $("#footerContacts").append(formattedfooterMobile);
        var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
        $("#topContacts").append(formattedEmail);
        var formattedfooterEmail = HTMLemail.replace("%data%", bio.contacts.email);
        $("#footerContacts").append(formattedfooterEmail);
        var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
        $("#topContacts").append(formattedTwitter);
        var formattedfooterTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
        $("#footerContacts").append(formattedfooterTwitter);
        var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
        $("#topContacts").append(formattedGithub);
        var formattedfooterGithub = HTMLgithub.replace("%data%", bio.contacts.github);
        $("#footerContacts").append(formattedfooterGithub);
        var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
        $("#topContacts").append(formattedLocation);
        var formattedfooterLocation = HTMLlocation.replace("%data%", bio.contacts.location);
        $("#footerContacts").append(formattedfooterLocation);
    }
};
bio.display();
var education = {
    "schools": [{
        "name": "Rosedale Bible College",
        "location": "Rosedale, Ohio",
        "degree": "AA",
        "majors": ["Pastoral Studies"],
        "dates": "2005–2007",
        "url": "www.rosedale.edu"
    }, {
        "name": "Grace College",
        "location": "Winona Lake, IN",
        "degree": "BA",
        "majors": ["English", " Biblical Studies"],
        "dates": "2009–2012",
        "url": "www.grace.edu"
    }],
    "onlineCourses": [{
        "title": "Frontend Nanodegree",
        "school": "Udacity",
        "dates": "2017",
        "url": "www.udacity.com"
    }],
    "display": function() {
        education.schools.forEach(function(school) {
            $("#education").append(HTMLschoolStart);
            var formattedSchoolName = HTMLschoolName.replace("%data%", school.name).replace("#", "https://" + school.url);
            $(".education-entry:last").append(formattedSchoolName);
            var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", school.degree);
            $(".education-entry:last").append(formattedSchoolDegree);
            var formattedSchoolDates = HTMLschoolDates.replace("%data%", school.dates);
            $(".education-entry:last").append(formattedSchoolDates);
            var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", school.location);
            $(".education-entry:last").append(formattedSchoolLocation);
            var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", school.majors);
            $(".education-entry:last").append(formattedSchoolMajor);
        });
        $("#education").append(HTMLonlineClasses);
        education.onlineCourses.forEach(function(course) {
            $("#education").append(HTMLschoolStart);
            var formattedTitle = HTMLonlineTitle.replace("%data%", course.title).replace("#", "https://" + course.url);
            $(".education-entry:last").append(formattedTitle);
            var formattedSchool = HTMLonlineSchool.replace("%data%", course.school);
            $(".education-entry:last").append(formattedSchool);
            var formattedDates = HTMLonlineDates.replace("%data%", course.dates);
            $(".education-entry:last").append(formattedDates);
            var formattedURL = HTMLonlineURL.replace("%data%", course.url).replace("#", "https://" + course.url);
            $(".education-entry:last").append(formattedURL);
        });
    }
};
education.display();
var work = {
    "jobs": [{
        "title": "Guitar Teacher",
        "employer": "Self-Employed",
        "dates": "2009-2017",
        "description": "Gave 8,000+ lessons to 150+ different students. I built my business almost entirely by word of mouth.",
        "location": "Goshen, Indiana"
    }, {
        "title": "Espresso Bar Catering Manager",
        "employer": "The Electric Brew",
        "dates": "2014-2016",
        "description": "I ran the espresso bar catering as my own business. I set up and made drinks at events, organized other employees for events and marketed the business. I was also in charge of keeping track of inventory, income and expense.",
        "location": "Goshen, Indiana"
    }, {
        "title": "Coffee Roaster",
        "employer": "The Electric Brew",
        "dates": "2010-2015",
        "description": "Roasted 10,000lbs per year of coffee for The Electric Brew",
        "location": "Goshen, Indiana"
    }],
    "display": function() {
        work.jobs.forEach(function(job) {
            $("#workExperience").append(HTMLworkStart);
            var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
            var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
            var formattedEmployerTitle = formattedEmployer + formattedTitle;
            $(".work-entry:last").append(formattedEmployerTitle);
            var formattedWorkDates = HTMLworkDates.replace("%data%", job.dates);
            $(".work-entry:last").append(formattedWorkDates);
            var formattedWorkDescription = HTMLworkDescription.replace("%data%", job.description);
            $(".work-entry:last").append(formattedWorkDescription);
            var formattedWorkLocation = HTMLworkLocation.replace("%data%", job.location);
            $(".work-entry:last").append(formattedWorkLocation);
        });
    }
};
work.display();
var projects = {
    "projects": [{
        "title": "Project 1",
        "dates": "2017",
        "description": "This is a placeholder for the project that will be",
        "images": ["images/fry.jpg"]
    }, {
        "title": "Project 2",
        "dates": "2017",
        "description": "This is a placeholder for the project that will be",
        "images": ["images/fry.jpg"]
    }, {
        "title": "yelling contest",
        "dates": "2017",
        "description": "This is a placeholder for the project that will be",
        "images": ["images/fry.jpg"], //FIXME:when I take this out things go wacko in Lint
    }],
    "display": function() {
        projects.projects.forEach(function(project) {
            $("#projects").append(HTMLprojectStart);
            var formattedTitle = HTMLprojectTitle.replace("%data%", project.title);
            $(".project-entry:last").append(formattedTitle);
            var formattedDates = HTMLprojectDates.replace("%data%", project.dates);
            $(".project-entry:last").append(formattedDates);
            var formattedDescription = HTMLprojectDescription.replace("%data%", project.description);
            $(".project-entry:last").append(formattedDescription);
            if (project.images.length > 0) {
                project.images.forEach(function(image) {
                    var formattedImage = HTMLprojectImage.replace("%data%", image);
                    $(".project-entry:last").append(formattedImage);
                });
            }
        });
    }
};
projects.display();
$("#mapDiv").append(googleMap);