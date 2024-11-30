# Library Management System API

## 📖 Project Overview  
The **Library Management System API** is a robust backend solution designed to manage a library’s operations effectively. It includes CRUD functionalities for books and members, borrowing and returning books, overdue tracking, and error handling mechanisms.

---

## 🌐 Live URL  
Check out the live API deployment here: [Live API URL](https://sql-backend-seven.vercel.app/) *
---

## 🛠️ Technology Stack & Packages  
### **Backend Technologies**
- **Node.js**: JavaScript runtime for building scalable backend services.
- **Express.js**: Lightweight framework for creating RESTful APIs.
- **TypeScript**: Strongly typed programming language for safer code.
- **Prisma**: Database ORM for seamless database interactions.
- **PostgreSQL**: Relational database for storing and managing library data.

### **Packages**
- **Zod**: Schema validation for request and response data.
- **Dotenv**: Manage environment variables securely.
- **Nodemon**: Development tool for automatic server restarts.
- **Cors**: Middleware for handling cross-origin resource sharing.

---

## 📝 Setup Instructions  


Clone the repository:
Install dependencies:
Environment Variables:
Run the application:

## 🚀 Key Features & Functionality  

### **1. Book Management**
- **Create Books**: Add new books to the library with details such as title, genre, published year, total copies, and available copies.  
- **View All Books**: Retrieve a list of all books in the library with their details.  
- **View Book by ID**: Fetch the details of a specific book using its unique `bookId`.  
- **Update Book**: Modify existing book records, including title, genre, year, and copy counts.  
- **Delete Book**: Remove a book from the library by its unique `bookId`.

### **2. Member Management**
- **Create Members**: Add new library members with details like name, email, phone, and membership date.  
- **View All Members**: Retrieve a list of all registered members.  
- **View Member by ID**: Fetch the details of a specific member using their `memberId`.  
- **Update Member**: Edit member details such as name, email, and phone number.  
- **Delete Member**: Remove a member's record from the library by their `memberId`.

### **3. Borrow & Return Books**
- **Borrow a Book**: Allows members to borrow a book, decreasing the `availableCopies` count for the borrowed book.  
- **Return a Book**: Handles book returns, updating the `availableCopies` count accordingly.  
- **Borrowing Rules**: Prevents borrowing if no copies are available and tracks each borrow with a unique `borrowId`.  

### **4. Overdue Tracking**
- **Overdue Borrow List**: Identifies books not returned within the 14-day borrowing period.  
- **Overdue Reports**: Displays a list of overdue books with details such as book title, borrower name, and overdue days.



