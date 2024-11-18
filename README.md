# Express JWT Authentication with MySQL

This is a simple Express.js API that implements JWT authentication with a MySQL database.

## Setup

1. Clone this repository.
2. Install dependencies:

express-jwt-mysql
├── config/
│   └── db.js                  # Database connection setup
├── controllers/
│   └── authController.js       # Logic for registration, login
│   └── userController.js       # Logic for protected routes
├── middlewares/
│   └── authMiddleware.js       # JWT authentication middleware
├── models/
│   └── userModel.js            # User schema / model for database queries
├── routes/
│   └── authRoutes.js           # Routes for authentication (login, register)
│   └── userRoutes.js           # Routes for user-specific actions (protected)
├── .env                        # Environment variables (JWT_SECRET, DB credentials)
├── app.js                      # Main application file (Express setup)
├── package.json                # Project dependencies and scripts
└── README.md                   # Project description and setup instructions
# express-jwt-auth
