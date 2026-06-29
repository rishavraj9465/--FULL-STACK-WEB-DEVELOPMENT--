<div align="center">

# 🏠 Atithi Yatra



[![Live Demo](https://img.shields.io/badge/🚀_Live_Demo-Atithi_Yatra-6366f1?style=for-the-badge)](https://atithi-yatra.onrender.com/listings)
[![GitHub](https://img.shields.io/badge/GitHub-rishavraj9465-181717?style=for-the-badge&logo=github)](https://github.com/rishavraj9465/Atithi-Yatra)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org)
[![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://mongodb.com)
[![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com)

</div>

---

##  Overview

**Atithi Yatra** is a full-stack Airbnb-inspired accommodation platform where users can discover, list, and review stays across the world. Built with the MEN stack (MongoDB, Express, Node.js) and deployed live on Render with cloud storage via Cloudinary.

> 🔗 **Live at:** [https://atithi-yatra.onrender.com/listings](https://atithi-yatra.onrender.com/listings)

---

##  Features

-  **User Authentication** — Secure signup, login & logout using Passport.js
-  **Listings CRUD** — Create, read, update and delete property listings
-  **Image Upload** — Cloud-based image storage via Cloudinary + Multer
-  **Reviews & Ratings** — Leave star ratings and comments on listings
-  **Category Filter** — Browse by Trending, Mountains, Castles, Farms, Arctic & more
-  **Authorization** — Only listing owners can edit or delete their listings
-  **Flash Messages** — Real-time success/error notifications
-  **Tax Toggle** — Show total price including 18% GST

---

##  Tech Stack

| Layer | Technology |
|---|---|
| Frontend | EJS, Bootstrap 5, CSS3 |
| Backend | Node.js, Express.js |
| Database | MongoDB Atlas |
| Auth | Passport.js, passport-local-mongoose |
| Storage | Cloudinary, Multer |
| Maps | MapTiler API |
| Sessions | express-session, connect-mongo |
| Deployment | Render |

---

##  Project Structure

```
Atithi-Yatra/
├── controllers/
│   ├── listing.js
│   ├── review.js
│   └── user.js
├── models/
│   ├── listing.js
│   ├── review.js
│   └── user.js
├── routes/
│   ├── listing.js
│   ├── review.js
│   └── user.js
├── views/
│   ├── layouts/
│   │   └── boilerplate.ejs
│   ├── includes/
│   │   ├── navbar.ejs
│   │   ├── footer.ejs
│   │   └── flash.ejs
│   └── listings/
│       ├── index.ejs
│       ├── show.ejs
│       ├── new.ejs
│       └── edit.ejs
├── public/
│   ├── css/
│   └── js/
├── init/
│   ├── data.js
│   └── index.js
├── middleware.js
├── cloudConfig.js
├── app.js
└── .env
```

---

##  Getting Started

### Prerequisites

- Node.js v18+
- MongoDB Atlas account
- Cloudinary account
- MapTiler API key

### Installation

**1. Clone the repository**
```bash
git clone https://github.com/rishavraj9465/Atithi-Yatra.git
cd Atithi-Yatra
```

**2. Install dependencies**
```bash
npm install --legacy-peer-deps
```

**3. Create a `.env` file in the root directory**
```env
ATLASDB_URL=your_mongodb_atlas_connection_string
SECRET=your_session_secret_key
CLOUD_NAME=your_cloudinary_cloud_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_api_secret
MAP_TOKEN=your_maptiler_api_key
```

**4. Seed the database (optional)**
```bash
node -r dotenv/config init/index.js
```

**5. Start the server**
```bash
node app.js
```

**6. Open in browser**
```
http://localhost:8080/listings
```

---

##  Deployment

This project is deployed on **Render** with the following setup:

- **Database** — MongoDB Atlas (cloud)
- **Images** — Cloudinary (cloud storage)
- **Sessions** — Stored in MongoDB via connect-mongo
- **Auto Deploy** — Enabled via GitHub integration

---


##  Environment Variables

| Variable | Description |
|---|---|
| `ATLASDB_URL` | MongoDB Atlas connection string |
| `SECRET` | Session secret key |
| `CLOUD_NAME` | Cloudinary cloud name |
| `CLOUD_API_KEY` | Cloudinary API key |
| `CLOUD_API_SECRET` | Cloudinary API secret |
| `MAP_TOKEN` | MapTiler API key |

---



##  Author

**Rishav Raj**

[![GitHub](https://img.shields.io/badge/GitHub-rishavraj9465-181717?style=flat-square&logo=github)](https://github.com/rishavraj9465)
[![Email](https://img.shields.io/badge/Email-rishav9465@gmail.com-D14836?style=flat-square&logo=gmail&logoColor=white)](mailto:rishav9465@gmail.com)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Rishav_Raj-0077B5?style=flat-square&logo=linkedin)](https://linkedin.com/in/rishavraj9465)

---



<div align="center">

Made with ❤️ by **Rishav Raj**


</div>
