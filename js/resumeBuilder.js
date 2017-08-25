// TODO: Set up information show up when you click pins in the map. See line 174 in helper.js as well as Google Maps API documentation
// TODO: configure code on helper.js there is a todo item.
// TODO: use JSHint to check javascript code




/*
This is empty on purpose! Your code to build the resume will go here.
 */
//OBJECTS STORING BIO INFORMATION EDUCATION AND WORK HISTORY
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
    var formattedSkills = HTMLskills.replace("%data%", bio.skills[1]);
    $("#skills").append(formattedSkills);

    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts["mobile"]);
    $("#topContacts").append(formattedMobile);

    var formattedEmail = HTMLemail.replace("%data%", bio.contacts["email"]);
    $("#topContacts").append(formattedEmail);

    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts["twitter"]);
    $("#topContacts").append(formattedTwitter);

    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts["github"]);
    $("#topContacts").append(formattedGithub);

    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts["location"]);
    $("#topContacts").append(formattedLocation);
  }
}
bio.display();

//**********************************************


var education = { //FIXME it displays the containers but says "undefined for all of them"
  "schools": [{
  "name": "Rosedale Bible College",
  "location": "Rosedale, Ohio",
  "degree": "AA",
  "majors": ["Pastoral Studies"],
  "dates": "2005–2007",
  "url": "www.rosedale.edu"
}, {
  "name": "Grace College",
  "location": "Winona Lake",
  "degree": "BA",
  "majors": ["English", " Biblical Studies"],
  "dates": "2009–2012",
  "url": "www.grace.edu"
},{"name": "Udacity", //TODO Move this to the top of the order
"location": "Goshen",
"degree": "Front End Developer Nano-Degree",
"majors": ["JavaScript", " HTML", " CSS"],
"dates": "2017",
"url": "www.udacity.com"}],
"onlineCourses": [{ //TODO: need all the courses listed
  "title": "$", //TODO need title for each course.
  "school": "Udacity",//TODO: enter freecodecamp into this
  "dates": "2017",
  "url": "www.udacity.com"
}],
"display": function() {

  for (school in education.schools) {
      $("#education").append(HTMLschoolStart);//FIXME needs to be moved to title the courses rather than be all the way at the end.
      var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
      $(".education-entry:last").append(formattedSchoolName);

      var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
      $(".education-entry:last").append(formattedSchoolDegree);

      var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
      $(".education-entry:last").append(formattedSchoolDates);

      var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
      $(".education-entry:last").append(formattedSchoolLocation);

      var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
      $(".education-entry:last").append(formattedSchoolMajor);

       //TODO: the "onlineCourses" array also needs a round of functions"
      
  }//end of education loop

  for (course in education.onlineCourses) {
    $("#education").append(HTMLonlineClasses);

    var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title)
    $(".education-entry:last").append(formattedTitle);
    var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school)
    $(".education-entry:last").append(formattedSchool);
    var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates)
    $(".education-entry:last").append(formattedDates);
    var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url)
    $(".education-entry:last").append(formattedURL);
   

  }//end of online courses loop

  }//end of display function
}

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
    "location": "Goshen, Indiana",

  }],

  "display": function() {

    for (job in work.jobs) {
      $("#workExperience").append(HTMLworkStart);

      var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
      var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
      var formattedEmployerTitle = formattedEmployer + formattedTitle;

      $(".work-entry:last").append(formattedEmployerTitle);


      var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
      $(".work-entry:last").append(formattedWorkDates);

      var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
      $(".work-entry:last").append(formattedWorkDescription);

      var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
      $(".work-entry:last").append(formattedWorkLocation);


    }
  }



}

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
    "images": ["images/fry.jpg"]
  }],

  "display": function() {

    for (project in projects.projects) {

      $("#projects").append(HTMLprojectStart);

      var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
      $(".project-entry:last").append(formattedTitle);

      var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
      $(".project-entry:last").append(formattedDates);

      var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
      $(".project-entry:last").append(formattedDescription);

      if (projects.projects[project].images.length > 0) {
        for (image in projects.projects[project].images) {
          var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
          $(".project-entry:last").append(formattedImage);


        }
      }
    }

  }
}

projects.display();

// TODO: Display locations on mapDiv

$("#mapDiv").append(googleMap);




//**********************************************



//INTERNATIONALIZES HEADER NAME TO Jason ROPP
// $("#main").append(internationalizeButton);
//
// function inName(oldName) {
//   var finalName = ""
//
//   var holder = oldName.split(" ");
//   for (var i = 0; i < holder.length; i++) {
//
//
//     if (i === 0) {
//
//       nameChange = holder[i].toString().charAt(0).toUpperCase() + holder[i].toString().slice(1).toLowerCase() + " ";
//     } else if (i === 1) {
//
//       nameChange = holder[i].toString().toUpperCase();
//     }
//     finalName += nameChange;
//
//
//   }
//
//   // Don't delete this line!
//   return finalName;
// }
//**********************************************









// ITTERATES THROUGH JOB DESCRIPTION ARRAYS AND RETURNS THE LOCATION OF EACH JOB

// function locationizer(work) {
//   var locationArray = [];
//
//
//   for (job in work.jobs) {
//     var newLocation = work.jobs[job].location;
//     locationArray.push(newLocation);
//   }
//
//   return locationArray;
// }
//
// locationizer();
//



//*********NOT NECESSARY: GRABS CLICK LOCATINS AND LOGS THEM***************
// var clickLocations = [];
//
//
//
// $(document).click(function(loc) {
//   var x = loc.pageX;
//   var y = loc.pageY;
//   logClicks(x, y);
// });


//***************************************************

/*"school": "Udacity",
"location": "Goshen",
"degree": "Front End Developer Nano-Degree",
"majors": ["JavaScript", "HTML", "CSS"],
"dates": 2017,
"url": "www.udacity.com"*/