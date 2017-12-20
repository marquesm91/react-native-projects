# React Native Projects

Simple projects using React Native based on two courses from [Udemy](https://www.udemy.com/) taught by [Stephen Grider](https://www.udemy.com/user/sgslo/).
* [The Complete React Native and Redux Course](https://www.udemy.com/the-complete-react-native-and-redux-course/learn/v4/overview)
* [React Native: Advanced Concepts](https://www.udemy.com/react-native-advanced/learn/v4/content)

## Test yourself

For the projects using `react-native-cli` I suggest you to follow these steps to fast testing:

* `npm i -g react-native-cli`
* Attach one Android device to your computer and guarantee your device is on Development Mode.
* Inside of any app folders created under the cli, run `react-native start` to start the Module Bundler.
* `react-native run-android` to build your application to the device.
* Wait until the Bundler compile everything and see the app in action!

For the projects using [Expo](https://expo.io/) you can download Expo XDE and the Expo App (available at Play store or Apple store), open the project created under it and use the QR code on Share button to see the app in your device Android or iOS!

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
