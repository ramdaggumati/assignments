//question1: create your own resume data in json format, and for this json
const resumeData = {
    "name": "Ram Daggumati",
    "age": 28,
    "email": "example@gmail.com",
    "phone": "1234567890",
    "address": "United Kingdom",
    "education": [
        {
            "degree": "Masters",
            "major": "Computer Science",
            "university": "University of XYZ",
            "year": 2022
        },
        {
            "degree": "Bachelors",
            "major": "Computer Science",
            "university": "University Xyz",
            "year": 2018
        }
    ],
    "experience": [
        {
            "title": "Software Engineer",
            "company": "Tech Solutions Inc.",
            "location": "City A",
            "start_date": new Date("2022-01-01"),
            "end_date": new Date("Present"),
            "responsibilities": [
                "Developed scalable web applications using Angular and Node.js",
                "Collaborated with cross-functional teams to deliver high-quality software solutions",
                "Participated in code reviews and provided constructive feedback"
            ]
        }
    ]
};

//  question2: for the above json,iterate over all loops(for,for in,for of,forEach)

//forloop:

for (let key in resumeData) {
  console.log(key + ": " + resumeData[key]);
}

//forinloop:
for (let key in resumeData) {
    if (resumeData.hasOwnProperty(key)) {
      console.log(key + ": " + resumeData[key]);
    }
  }

//forof loop:
for (let education of resumeData.education) {
    console.log("Degree: " + education.degree);
    console.log("University: " + education.university);
    console.log("Year: " + education.year);
  }
  
//foreach loop:
resumeData.experience.forEach(experience => {
    console.log("Title: " + experience.title);
    console.log("Company: " + experience.company);
    console.log("Location: " + experience.location);
  });
  