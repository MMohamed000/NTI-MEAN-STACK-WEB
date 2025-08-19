import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StudentDetailsComponentComponent } from "../student-details-component/student-details-component.component";
import { ActivatedRoute } from '@angular/router';
import { StudentCardComponentComponent } from "../student-card-component/student-card-component.component";


@Component({
  selector: 'app-students-list-component',
  standalone: true,
  imports: [CommonModule, FormsModule, StudentCardComponentComponent],
  templateUrl: './students-list-component.component.html',
  styleUrl: './students-list-component.component.css'
})
export class StudentsListComponentComponent {
  studentsInfo:any[]=[];
  constructor(){
  this.studentsInfo = [ 
    { 
      id: "2025001", 
      name: "Ahmed Hassan", 
      age: 20, 
      major: "Computer Science",
      courses: ["Algorithms", "Data Structures", "Databases", "Operating Systems", "Web Development"]
    },
    { 
      id: "2025002", 
      name: "Mohamed Ali", 
      age: 22, 
      major: "Mechanical Engineering",
      courses: ["Thermodynamics", "Fluid Mechanics", "Materials Science", "Robotics", "Machine Design"]
    },
    { 
      id: "2025003", 
      name: "Sara Mahmoud", 
      age: 19, 
      major: "Mathematics",
      courses: ["Linear Algebra", "Calculus", "Probability", "Number Theory", "Topology"]
    },
    { 
      id: "2025004", 
      name: "Omar Youssef", 
      age: 21, 
      major: "Electrical Engineering",
      courses: ["Circuit Analysis", "Electromagnetics", "Digital Systems", "Control Systems", "Power Electronics"]
    },
    { 
      id: "2025005", 
      name: "Nour Adel", 
      age: 20, 
      major: "Biology",
      courses: ["Genetics", "Cell Biology", "Ecology", "Molecular Biology", "Biochemistry"]
    },
    { 
      id: "2025006", 
      name: "Khaled Mostafa", 
      age: 23, 
      major: "Civil Engineering",
      courses: ["Structural Analysis", "Geotechnical Engineering", "Transportation Engineering", "Hydrology", "Construction Management"]
    },
    { 
      id: "2025007", 
      name: "Mona Ibrahim", 
      age: 18, 
      major: "Economics",
      courses: ["Microeconomics", "Macroeconomics", "Econometrics", "International Trade", "Development Economics"]
    },
    { 
      id: "2025008", 
      name: "Hany Farouk", 
      age: 21, 
      major: "Physics",
      courses: ["Quantum Mechanics", "Classical Mechanics", "Thermal Physics", "Nuclear Physics", "Astrophysics"]
    },
    { 
      id: "2025009", 
      name: "Laila Sherif", 
      age: 19, 
      major: "Chemistry",
      courses: ["Organic Chemistry", "Inorganic Chemistry", "Physical Chemistry", "Analytical Chemistry", "Biochemistry"]
    },
    { 
      id: "2025010", 
      name: "Youssef Gamal", 
      age: 22, 
      major: "Political Science",
      courses: ["Comparative Politics", "Political Theory", "International Relations", "Public Policy", "Constitutional Law"]
    },
    { 
      id: "2025011", 
      name: "Salma Fathy", 
      age: 20, 
      major: "Psychology",
      courses: ["Cognitive Psychology", "Social Psychology", "Developmental Psychology", "Clinical Psychology", "Neuroscience"]
    },
    { 
      id: "2025012", 
      name: "Tamer Nabil", 
      age: 24, 
      major: "Information Technology",
      courses: ["Networking", "Cybersecurity", "Cloud Computing", "Database Systems", "Software Engineering"]
    },
    { 
      id: "2025013", 
      name: "Dina Hossam", 
      age: 21, 
      major: "English Literature",
      courses: ["Shakespeare", "Poetry", "Modern Literature", "Literary Theory", "World Literature"]
    },
    { 
      id: "2025014", 
      name: "Karim Reda", 
      age: 22, 
      major: "Business Administration",
      courses: ["Marketing", "Finance", "Organizational Behavior", "Business Strategy", "Entrepreneurship"]
    },
    { 
      id: "2025015", 
      name: "Huda Magdy", 
      age: 20, 
      major: "Nursing",
      courses: ["Anatomy", "Physiology", "Pharmacology", "Clinical Practice", "Health Assessment"]
    },
    { 
      id: "2025016", 
      name: "Mostafa Adel", 
      age: 23, 
      major: "Accounting",
      courses: ["Financial Accounting", "Managerial Accounting", "Auditing", "Taxation", "Corporate Finance"]
    },
    { 
      id: "2025017", 
      name: "Rania Samir", 
      age: 19, 
      major: "Art History",
      courses: ["Renaissance Art", "Modern Art", "Asian Art", "Museum Studies", "Art Criticism"]
    },
    { 
      id: "2025018", 
      name: "Mahmoud Lotfy", 
      age: 21, 
      major: "Environmental Science",
      courses: ["Ecology", "Climate Change", "Environmental Policy", "Sustainability", "Conservation Biology"]
    },
    { 
      id: "2025019", 
      name: "Fatma Ezzat", 
      age: 22, 
      major: "Philosophy",
      courses: ["Ethics", "Logic", "Metaphysics", "Epistemology", "Philosophy of Mind"]
    },
    { 
      id: "2025020", 
      name: "Aya Tarek", 
      age: 20, 
      major: "Sociology",
      courses: ["Social Theory", "Research Methods", "Criminology", "Urban Sociology", "Cultural Studies"]
    }
  ];

  }

}
