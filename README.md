# 🎉 Events App

A beautifully designed public mobile app that allows users to RSVP to upcoming events, receive notifications, and enjoy seamless navigation — powered by a JSON-based Node.js backend.

---

## 🚀 Features

### 📱 Mobile App

- ✔️ Browse and explore events with images  
- 📋 RSVP to events with a guest count  
- 🔔 Push notifications for upcoming events  
- 🔗 Deep linking support (e.g. `myapp://event/123`)  

### 🛠 Backend API

- REST API endpoints for event operations  
- User authentication via `/login`  
- JSON file-based persistence  

---

## 📱 Screens

- 🏠 EventsScreen  
- 🗓 EventDetailsScreen  
- 🔔 NotificationsScreen  
- 🚀 OnBoardingScreen  
- 🔑 SignInScreen  
- 💧 SplashScreen  

---

## 🧩 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET    | `/events` | Fetch all events |
| GET    | `/events/:id` | Fetch event by ID |
| POST   | `/events/:id/rsvp` | RSVP to an event |
| PATCH  | `/events/:id/rsvp` | Update RSVP |
| DELETE | `/events/:id/rsvp` | Cancel RSVP |
| POST   | `/login` | User login |

---

## 🔧 Environment

Environment variables can be stored in a `.env` file.  
Example variables:
```
PORT=3000
BASE_URL=http://localhost:3000
```

---

## 🛠 Installation & Usage

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/Events-App.git

# Install dependencies
cd Events-App/frontend
npm install

cd ../backend
npm install

# Run backend
npm run dev

# Run mobile app
npm run android    # for Android
npm run ios        # for iOS
```

---

## 🧱 Tech Stack

### Frontend
- React Native  
- Redux Toolkit  
- TypeScript  
- React Navigation  

### Backend
- Node.js  
- Express  
- TypeScript  
- tsx (live reload)

---

## 🖼️ App Screenshots

![App Screenshot](Simulator Screenshot - iPhone 14 - 2025-05-11 at 15.06.37.png)
![App Screenshot](Simulator Screenshot - iPhone 14 - 2025-05-11 at 15.06.38.png)
![App Screenshot](Simulator Screenshot - iPhone 14 - 2025-05-11 at 15.06.40.png)
![App Screenshot](Simulator Screenshot - iPhone 16 Pro Max - 2025-05-11 at 15.01.41.png)
![App Screenshot](Simulator Screenshot - iPhone 16 Pro Max - 2025-05-11 at 15.01.43.png)
![App Screenshot](Simulator Screenshot - iPhone 16 Pro Max - 2025-05-11 at 15.02.01.png)
![App Screenshot](Simulator Screenshot - iPhone 16 Pro Max - 2025-05-11 at 15.02.07.png)
![App Screenshot](Simulator Screenshot - iPhone 16 Pro Max - 2025-05-11 at 15.02.16.png)

---

## 📄 License

This project is licensed under the **MIT License**.

---

## ⭐ GitHub

[View Repository →](https://github.com/YOUR_USERNAME/Events-App)
