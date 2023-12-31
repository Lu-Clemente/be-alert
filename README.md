# Be Alert App

## In order to run this project, follow the steps below:

1. Clone this repository to your local machine:

`$ git clone https://github.com/Lu-Clemente/be-alert`

2. In the terminal, navigate to this repository's folder:

`$ cd be-alert`

3. Install the project:

`$ yarn install` or `$ npm install`

4. Extra Configuration:

`You're going to need to configurate your eas.json and app.json with your own user information. Addicionaly, you will also need to create your own Firebase App and export your google-services.json and add to the app`

5. Notifications setup:

`To make notifications work properly, you need to follow some steps in order to set the correct information inside your Expo account and Firebase Console.`
`(Step by step Medium article soon here)`

6. Run the project:

`$ expo start`



## Preview Dev Side
This project is configured to sendo push notifications only for Android Devices. Ios bay work using (Expo Push Notification Tool)
3 Services was tested:

<p>
 <img align="center" height="520px" src="https://github.com/Lu-Clemente/be-alert/blob/main/assets/preview/Captura3.png">
  <p><b>Expo Push Notification Tool - Via Expo Server</b></p>
  <br><br>
 <img align="center" height="520px" src="https://github.com/Lu-Clemente/be-alert/blob/main/assets/preview/Captura1.png">
  <p><b>FCM (Firebase Cloud Messaging) - Via Firebase Messaging Console</b></p>
  <br><br>
 <img align="center" height="320px" src="https://github.com/Lu-Clemente/be-alert/blob/main/assets/preview/Captura2.png">
  <p><b>FCM (Firebase Cloud Messaging) - Via HTTP2 request to Firebase Server</b></p>
</p>
<br>

## Preview User Side
This is an app preview showing how the notifications work on a real user's device.

https://github.com/Lu-Clemente/be-alert/assets/86859665/25574dcd-64a7-4f67-8931-e29e1060ca31





