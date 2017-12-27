# React Native Projects

Simple projects using React Native based on many courses from [Udemy](https://www.udemy.com/)
* [The Complete React Native and Redux Course](https://www.udemy.com/the-complete-react-native-and-redux-course/)
* [React Native: Advanced Concepts](https://www.udemy.com/react-native-advanced/)
* [React Native the practical guide](https://www.udemy.com/react-native-the-practical-guide/)

## Test yourself

For the projects using `react-native-cli` I suggest you to follow these steps to fast testing:

* `npm i -g react-native-cli`
* Attach one Android device to your computer and guarantee your device is on Development Mode.
* Inside of any app folders created under the cli, run `react-native start` to start the Module Bundler.
* `react-native run-android` to build your application to the device.
* Wait until the Bundler compile everything and see the app in action!

For the projects using [Expo](https://expo.io/) you can download Expo XDE and the Expo App (available at Play store or Apple store), open the project created under it and use the QR code on Share button to see the app in your device Android or iOS!

For the projects using `create-react-native-app` you can follow the instructions on [docs](https://facebook.github.io/react-native/blog/2017/03/13/introducing-create-react-native-app.html). You can simply run `npm install` and use the same commands of `react-native-cli`.

## Suggested order to follow

* projects with `react-native-cli`
  1. **albums**
      * Card
      * CardSection
  2. **auth**
      * firebase-auth
      * Input
      * Buttons
  3. **tech_stack**
      * ListView
      * LayoutAnimated
  4. **manager**
      * firebase-auth
      * firebase-database
      * Navigation
* projects with [Expo](https://expo.io/)
  1. **swipe**
      * More advanced animations (Swipe card)
  2. **one-time-password**
      * Use of Google Cloud Functions and Twilio SMS services
  3. **jobs**
      * Use of Redux, Maps, Navigation
* projects with `create-react-native-app`
  1. **awesome-places**
      * Modal
