# Earthy Minds - Rise of the Wild

A fantasy eco-habit tracker application that turns real-world sustainability actions into quests in a magical world.

## Getting Started

First, install the dependencies:

```bash
npm install
```

## Firebase Authentication Setup

This project uses Firebase Authentication for user signup and email verification. Follow these steps to set up Firebase:

1. Go to [Firebase Console](https://console.firebase.google.com/) and create a new project
2. Add a web app to your Firebase project
3. Enable Email/Password authentication in the Authentication section
4. Set up the Email verification template in Authentication > Templates
5. Copy your Firebase configuration from Project Settings
6. Create a `.env.local` file in your project root with the following values from your Firebase project:

```
NEXT_PUBLIC_FIREBASE_API_KEY=your-api-key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
NEXT_PUBLIC_FIREBASE_APP_ID=your-app-id
```

## Running the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Features

- Signup modal with email verification
- Confirmation modal after signup
- Integration with Firebase Authentication for secure user management
- Responsive design matching the provided mockups
- Eco-habit tracking gamification concept

## Detailed Firebase Authentication Troubleshooting

If you encounter issues with Firebase authentication:

### 1. Check your Firebase project and configuration

- Verify that your Firebase API key and configuration in `.env.local` is correct
- Make sure the project values match exactly with what's in your Firebase Console
- Check that all required fields are present in the configuration

### 2. Verify Firebase Authentication settings

- Ensure Email/Password authentication is enabled in your Firebase project
- Go to the Authentication section in Firebase Console and check "Sign-in method"
- Verify that Email/Password is enabled with the toggle switch

### 3. Common Firebase error codes and solutions

- `auth/configuration-not-found`: This usually means your Firebase project ID or API key is incorrect
- `auth/network-request-failed`: Check your internet connection
- `auth/email-already-in-use`: The email is already registered
- `auth/invalid-email`: The email format is incorrect

### 4. Web browser console debugging

- Open your browser's developer tools (F12 or right-click > Inspect)
- Check the Console tab for any Firebase-related errors
- Look for messages starting with "Firebase:" for specific error details

### 5. Check environment variables

- Make sure Next.js is properly loading your environment variables
- Restart your development server after making changes to `.env.local`
- Check that the NEXT*PUBLIC* prefix is used for all Firebase environment variables

## Technologies Used

- Next.js
- React
- Firebase Authentication
- React Modal
- Tailwind CSS

## Deployment

Follow the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) documentation for easy deployment.
