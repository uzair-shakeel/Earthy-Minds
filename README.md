# Earthy Minds - Rise of the Wild

A fantasy eco-habit tracker application that turns real-world sustainability actions into quests in a magical world.

## Getting Started

First, install the dependencies:

```bash
npm install
```

## Firebase Authentication

This project uses Firebase Authentication for user signup and email verification. The Firebase configuration is hardcoded in the app for simplicity. If you want to use your own Firebase project, you'll need to update the configuration in the following files:

1. `app/lib/firebase.js` - The main Firebase initialization file
2. `app/lib/test-firebase.js` - The Firebase test utility

### Setting Up Your Own Firebase Project

If you want to use your own Firebase project instead of the default one:

1. Go to [Firebase Console](https://console.firebase.google.com/) and create a new project
2. Add a web app to your Firebase project
3. Enable Email/Password authentication in the Authentication section
4. Set up the Email verification template in Authentication > Templates
5. Copy your Firebase configuration from Project Settings
6. Replace the hardcoded values in `app/lib/firebase.js` and `app/lib/test-firebase.js`

## Google Analytics Integration

This project uses Google Analytics for tracking user interactions. The Google Analytics configuration is set up in the following files:

1. `.env.local` - Contains the Google Analytics Measurement ID
2. `app/layout.js` - Includes the Google Analytics script
3. `app/utils/analytics.js` - Utility functions for tracking events
4. `app/utils/AnalyticsWrapper.js` - Component that wraps pages for tracking

### Testing Google Analytics

To test Google Analytics integration:

1. **Using Google Analytics Real-Time Dashboard**:

   - Log in to [Google Analytics](https://analytics.google.com/)
   - Go to your property
   - Navigate to Reports > Real-Time
   - Interact with your application to see events appear in real-time
   - Note that it may take a moment for events to appear

2. **Using Browser Developer Tools**:

   - Open your browser's developer tools (F12 or right-click > Inspect)
   - Go to the Network tab
   - Filter for "collect" or "google-analytics"
   - Interact with your application to see the analytics requests being sent

3. **Common Events to Test**:
   - Page views when navigating between pages
   - Button clicks on "Join Quest" and other interactive elements
   - Form submissions in the signup modal
   - Error events when authentication fails
   - Check browser console logs for tracking information during development

## Running the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Features

- Signup modal with email verification
- Confirmation modal after signup
- Integration with Firebase Authentication for secure user management
- Google Analytics tracking for user interactions
- Responsive design matching the provided mockups
- Eco-habit tracking gamification concept

## Troubleshooting Firebase Authentication

If you encounter issues with Firebase authentication:

1. Make sure the Firebase project is active and properly configured
2. Verify that Email/Password authentication is enabled in your Firebase project
3. Check the browser console for any Firebase-related errors
4. If using your own Firebase project, make sure the configuration values are correct
5. Check that the domain you're testing from is allowed in Firebase Authentication settings

## Technologies Used

- Next.js
- React
- Firebase Authentication
- Google Analytics
- React Modal
- Tailwind CSS

## Deployment

Follow the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) documentation for easy deployment.
