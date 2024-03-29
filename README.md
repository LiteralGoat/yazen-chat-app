# Up and running
1. Clone the repository
````
git clone git@github.com:LiteralGoat/yazen-chat-app.git
````
3. Install dependencies
````
npm i
````
3. Start the app
````
npm start
````

# Yazen Code Test - Chat App
Project description:

Build a chat app using React Native. It should be available to test on Expo Go and the code available to view on GitHub.
It should start with a prompt for display name. The subsequent chat screen should contain a fixed header, a fixed footer with a text input for new messages and in between a scrollable view with a list of messages that is anchored at the bottom and ordered chronologically (ascending). The screen should update in real time. The app is only allowed to load 25 messages initially. Older messages should be loaded as a reaction to user scroll.

You are free to use third party libraries but you should limit yourself to React Native when it comes to UI components. Don’t bother with test coverage or extensive architecture. Focus on simple, clean and readable code.
Also feel free to add some bells and whistles UX/UI wise or something else that you want to show off.
Make use of a Firestore database (name your collection something unique to your app). You are free to use whatever schema you like to represent a message.
