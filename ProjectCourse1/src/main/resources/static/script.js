const BASE_URL = "https://your-app.onrender.com";  // Replace with your actual Render backend URL

const courses = [
    { id: 1, name: "Java", price: getRandomPrice(), img: "images/java.png" },
    { id: 2, name: "Python", price: getRandomPrice(), img: "images/python.png" },
    { id: 3, name: "C++", price: getRandomPrice(), img: "images/cpp.png" },
    { id: 4, name: "Js", price: getRandomPrice(), img: "images/js.png" },
    { id: 5, name: "C#", price: getRandomPrice(), img: "images/cp.png" },
    { id: 6, name: "SQL", price: getRandomPrice(), img: "images/sql.png" },
    { id: 7, name: "Swift", price: getRandomPrice(), img: "images/swift.png" },
    { id: 8, name: "Kotlin", price: getRandomPrice(), img: "images/kotlin.png" },
    { id: 9, name: "PHP", price: getRandomPrice(), img: "images/php.png" }
];

function getRandomPrice() {
    return Math.floor(Math.random() * 5000) + 1000;
}

// Load courses dynamically in student panel
document.addEventListener("DOMContentLoaded", function() {
    const courseContainer = document.getElementById("courses");
    if (courseContainer) {
        courses.forEach(course => {
            const courseCard = document.createElement("div");
            courseCard.classList.add("course-card");
            courseCard.innerHTML = `
                <img src="${course.img}" alt="${course.name}">
                <h3>${course.name}</h3>
                <p>Price: ₹${course.price}</p>
                <button onclick="viewCourse(${course.id})">View Course</button>
            `;
            courseContainer.appendChild(courseCard);
        });
    }

    // Load enrolled students in admin panel
    const studentList = document.getElementById("student-list");
    if (studentList) {
        loadStudents();
    }

    // Load course details in course.html
    const params = new URLSearchParams(window.location.search);
    const courseId = params.get("id");
    if (courseId) {
        const course = courses.find(c => c.id == courseId);
        if (course) {
            document.getElementById("course-img").src = course.img;
            document.getElementById("course-name").textContent = course.name;
            document.getElementById("course-price").textContent = "Price: ₹" + course.price;
        }
    }
});

// Navigate to course page
function viewCourse(id) {
    window.location.href = `course.html?id=${id}`;
}

// Enroll student
function enroll() {
    const studentName = document.getElementById("student-name").value;
    const courseName = document.getElementById("course-name").textContent;
    const studentEmail = document.getElementById("student-email").value;

    if (studentName.trim() === "") {
        alert("Please enter your name");
        return;
    }
    if (studentEmail.trim() === "") {
        alert("Please enter your email");
        return;
    }

    const studentData = { studentName, courseName, studentEmail };

    fetch(`${BASE_URL}/Course/Create`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(studentData)
    })
    .then(response => response.json())
    .then(data => {
        alert("Enrollment Successful!");
        window.location.href = "index.html";
    })
    .catch(error => console.error("Error:", error));
}

// Load all students
function loadStudents() {
    fetch(`${BASE_URL}/Course/GetAll`)
        .then(response => response.json())
        .then(data => {
            const studentList = document.getElementById("student-list");
            studentList.innerHTML = "";
            data.forEach(student => {
                const row = `
                  <tr>
                    <td>${student.courseId}</td>
                    <td>${student.studentName}</td>
                    <td>${student.courseName}</td>
                    <td>${student.studentEmail}</td>
                    <td><button class="btn-on" onclick="deleteStudent(${student.courseId})">Delete</button></td>
                  </tr>`;
                studentList.innerHTML += row;
            });
        })
        .catch(error => console.error("Error:", error));
}

// Delete student
function deleteStudent(courseId) {
    fetch(`${BASE_URL}/Course/Delete/${courseId}`, { method: "DELETE" })
        .then(() => {
            alert("Deleted");
            loadStudents();
        })
        .catch(error => console.error("Error:", error));
}

function navigateToHome() {
    window.location.href = "home.html";
}
function logout() {
    window.location.href = "home.html";
}
function search() {
    const lin = document.getElementById("sear-ch").value;
    courses.forEach(cours => {
        if (cours.name === lin) {
            window.location.href = `course.html?id=${cours.id}`;
        }
    });
}
function trigger() {
    window.location.href = "add.html";
}
function change() {
    if (document.body.style.background === "black") {
        document.body.style.background = "white";
        document.body.style.color = "black";
    } else {
        document.body.style.background = "black";
        document.body.style.color = "white";
    }
}
function add() {
    window.location.href = "home.html";
}
function c() {
    const courseNameInput = document.getElementById("course-name");
    if (courseNameInput) {
        const coursename = courseNameInput.value.trim();
        if (coursename === "") {
            alert("Please enter a valid course name.");
            return;
        }

        const newCourse = {
            id: courses.length + 1,
            name: coursename,
            price: getRandomPrice(),
            img: "images/default.png"
        };

        courses.push(newCourse);
        console.log("Updated courses array:", courses);
        displayCourses();
    } else {
        console.error("Element with ID 'new-course-name' not found!");
    }
}

function displayCourses() {
    const courseContainer = document.getElementById("courses");

    if (courseContainer) {
        window.location.href = "home.html";
        courseContainer.innerHTML = "";

        courses.forEach(course => {
            const courseCard = document.createElement("div");
            courseCard.classList.add("course-card");
            courseCard.innerHTML = `
                <img src="${course.img}" alt="${course.name}">
                <h3>${course.name}</h3>
                <p>Price: ₹${course.price}</p>
                <button onclick="viewCourse(${course.id})">View Course</button>
            `;
            courseContainer.appendChild(courseCard);
        });

        console.log("Courses displayed successfully!");
    } else {
        console.error("Element with ID 'courses' not found!");
    }
}
