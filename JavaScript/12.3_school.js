"use strict";

const school = {
  teachers: [
    {
      id: 1,
      name: "Pinchas",
      subjects: ["chemistry", "biology", "physics"],
      students: [],
      capacityLeft: 3,
    },
    {
      id: 2,
      name: "Williams",
      subjects: ["history", "ethics"],
      students: [],
      capacityLeft: 2,
    },
  ],
  students: [
    {
      id: 10,
      name: "Jennifer",
      age: 20,
    },
    {
      id: 11,
      name: "Howard",
      age: 23,
    },
    {
      id: 12,
      name: "Old-Timmy",
      age: 86,
    },
    {
      id: 13,
      name: "Houston",
      age: 21,
    },
  ],
  findPerson: (type, id) => school[type].find((person) => person.id === id),

  assignStudent: (id, subject) => {
    let assignedStudent = school["students"].find((student) => student.id === id);
    let teacher = school["teachers"].find((person) => person["subjects"].find((sub) => sub === subject));
    if (teacher["capacityLeft"] > 0) {
      teacher["students"].push(assignedStudent);
      teacher["capacityLeft"]--;
    } else console.log("Sorry, no available teachers left");
  },
  assignTeachersSubject: (id, sub) => {
    let teacher = school["teachers"].find((person) => person.id === id);
    let subjectChecker = teacher["subjects"].find((subject) => sub === subject);
    if (subjectChecker === undefined) {
      teacher["subjects"].push(sub);
    }
  },
};

console.log(school.findPerson("students", 10));
school.assignStudent(12, "ethics");
school.assignTeachersSubject(1, "sports");
console.log(school);

console.log(school["teachers"][0]);

console.log(school["teachers"][0]["subjects"].find((sub) => sub === "sports"));
