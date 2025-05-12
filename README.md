# 📚 Library Management System (LMS)

This is a full-stack **Library Management System** built using **ReactJS (Frontend)** and **Spring Boot (Backend)**. It allows admin users to manage books, issue them to students, and maintain records efficiently.

---

## 🚀 Features

### ✅ Frontend (ReactJS + Tailwind CSS)
- Admin Dashboard UI
- Display of Book Cards
- **Issue Book** button on each book card
- **Form pop-up** to issue a book with book details auto-filled
- Combined **Add / Update Book** modal
- Responsive layout with clean Tailwind UI
- **React Router** for navigation
- **Axios** for API communication
- **Session management** using LocalStorage (planned/optional)

### ✅ Backend (Spring Boot)
- REST APIs for:
  - Add / Update / Delete / Get Books
  - Issue / Return Book operations
- **Spring Data JPA** for database interactions
- **MySQL** database used
- **Email Notification**: On successful book issue, an email is sent to the concerned user with book details.

---

## 📧 Email Notification on Book Issue

When a book is issued, the system automatically sends an email to the registered user with:
- Book title
- Issue date
- Due date
- Issued by (admin info)

> ✅ This feature uses Spring Boot's `JavaMailSender` for email functionality.

---

## 🛠️ Tech Stack

| Layer       | Technology     |
|-------------|----------------|
| Frontend    | ReactJS, Tailwind CSS, Axios |
| Backend     | Spring Boot, Spring Data JPA |
| Database    | MySQL          |
| Email       | JavaMailSender |
| Tools       | Postman, VS Code, IntelliJ |

---

## 🧪 How to Run This Project

### ✅ Backend (Spring Boot)
1. Required Tools:
   - JDK 17+
   - Maven
   - MySQL Server
2. Setup:
   - Clone the repo
   - Update `application.properties` with your MySQL credentials
   - Run `mvn clean install` then `mvn spring-boot:run`

### ✅ Frontend (React)
1. Required Tools:
   - Node.js (v16+)
2. Setup:
   ```bash
   cd frontend
   npm install
   npm start
