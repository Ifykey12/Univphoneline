# Univ Phone Num

A user-friendly platform for purchasing and managing online phone numbers.

## Features

- User authentication (signup/login)
- Phone number browsing and purchasing
- Secure payment processing
- User dashboard
- Admin panel with comprehensive management tools
- OTP verification system

## Tech Stack

- Frontend: React.js with Material-UI
- Backend: Node.js with Express
- Database: MongoDB
- Authentication: JWT with 2FA for admin
- Payment Processing: Stripe integration

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- MongoDB
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables (see .env.example)
4. Start the development server:
   ```bash
   npm run dev
   ```

## Security Features

- SSL/TLS encryption
- Secure password hashing
- JWT token-based authentication
- Two-factor authentication for admin
- Data encryption at rest

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```
PORT=3000
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=your_stripe_secret_key
ADMIN_EMAIL=danielifykey@gmail.com
```
