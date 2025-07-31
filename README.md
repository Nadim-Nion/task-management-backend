# Task Management Backend

This is the backend server of a **Task Management Web Application** built with **Node.js, Express.js, and MongoDB**. It handles user authentication, secure API endpoints, task management logic, and various security measures.

> This project is a part of a full MERN Stack application that allows users to manage tasks and features a spinning wheel to pick a random task.

---

## Features

- User authentication with JWT
- Password encryption using bcrypt
- Task creation, update, and deletion APIs
- Input validation and sanitization
- Secure headers with Helmet
- Centralized error handling
- CORS configuration
- Well-structured and scalable folder structure

---

## project Resources

- Backend Repository: [Github](https://github.com/Nadim-Nion/task-management-backend)
- Live Deployment URL: [Vercel](https://your-live-site-link.com)

---

## Project Structure

```
├── dist/
│ ├── app/
│ │ └── app.js
│ └── server.js
├── node_modules/
├── src/
│ ├── app/
│ │ ├── config/
│ │ │ └── index.ts
│ │ ├── errors/
│ │ ├── interface/
│ │ └── middlewares/
│ │ ├── auth.ts
│ │ ├── globalErrorHandler.ts
│ │ ├── notFound.ts
│ │ └── validateRequest.ts
│ ├── modules/
│ │ ├── task/
│ │ │ ├── task.constant.ts
│ │ │ ├── task.controller.ts
│ │ │ ├── task.interface.ts
│ │ │ ├── task.model.ts
│ │ │ ├── task.route.ts
│ │ │ ├── task.service.ts
│ │ │ └── task.validation.ts
│ │ └── user/
│ │ ├── user.controller.ts
│ │ ├── user.interface.ts
│ │ ├── user.model.ts
│ │ ├── user.route.ts
│ │ ├── user.service.ts
│ │ ├── user.utils.ts
│ │ └── user.validation.ts
│ ├── routes/
│ │ └── index.ts
│ ├── utils/
│ │ ├── catchAsync.ts
│ │ └── sendResponse.ts
│ ├── app.ts
│ └── server.ts
├── .env
├── .gitignore
├── .prettierignore
├── .prettierrc
├── eslint.config.mts
├── package.json
├── package-lock.json
├── tsconfig.json
└── README.md
```

---

## Tech Stack

**Frontend:**

- React.js
- Vite
- Tailwind CSS
- DaisyUI

**Backend:**

- Node.js
- Express.js
- MongoDB + Mongoose

**Security & Utility:**

- bcrypt
- jsonwebtoken
- express-validator
- dotenv
- Helmet
- CORS

---

## Security Measures

- Password encryption with `bcrypt`
- JWT for route protection
- Secure headers using `helmet`
- Input sanitization using `express-validator`
- CORS properly configured
- Centralized error handler

---

## 🛠️ Installation & Setup

> **Note:** Use Node.js v18+ and MongoDB installed or use MongoDB Atlas.

### Backend

```bash
git clone https://github.com/Nadim-Nion/task-management-backend.git
cd task-manager
npm install
cp .env.example .env
# Add your variables to .env
npm run dev
```

---

### Figma Design

- Primary Design: [Figma](https://www.figma.com/design/5iMEaU0uMrI5AWsAxHfkba/MERN--Test?node-id=1001-46&p=f&t=VL824us44DQjf8Id-0)

---

### Author

Hi, I am **Nadim Mahmud Nion**. I have recently concluded my graduation from the department of Computer Science and Engineering (CSE) at **Daffodil International University (DIU)**. I have been learning **MERN Stack Web Development** since 2022.

I am skilled in the following technologies:

- React
- Express.js
- TypeScript
- Mongoose
- Postman
- MongoDB Compass
- NoSQLBooster
- Node.js
- MongoDB Atlas
- JWT
- Stripe
- Vite
- React Router
- Firebase (Authentication & Hosting)
- Vercel
- JavaScript
- Advanced JavaScript
- Daisy UI
- Bootstrap
- Tailwind
- HTML5
- CSS3
- Media Query

I have built multiple projects using these skills. You are invited to visit my [GitHub profile](https://github.com/Nadim-Nion) to explore my work — and don’t forget to ⭐ star the projects you like!

> Developed by Nadim Mahmud Nion 💻
