

# Voicemod Coding Task

**Author**: Joao Filipe Romao

## Tech Stack used
- React JS
- Node JS
- Git

## Installation

Please visit the following link [Github Repo](https://github.com/Jrmromao/voivemod-coding-task) to clone and run the application.

```bash
git clone https://github.com/Jrmromao/voivemod-coding-task.git
```

## Usage

The backend and the frontend are in two separed folders - server & client. 

Please following the instructions bellow to run the app:
- open the terminal in the folder where the repo was cloned to and run the following command. This command will start the server on port 3033.
```cmd
cd server && npm i && yarn start
```

Now, open another terminal tab (in the directory where the repo was cloned to) and run the following command to start the client. on port 3009.

```cmd
cd client && npm i && npm start 
```

When the client starts, a browser window will be launched. Now you can start exploring the app.


## App
- The first screen is showing only one image, you can select the option 'View' to view the price and place a sound.
    - Whe the app is first launched, it send's an HTTP Get request to the backend and receives a list of images (starts with only one).

```javascript
router.get("/api/sounds")
```
-You can select the option 'Load Sounds'. This option will send a pot request, with a list of 9 sounds. 
```javascript
router.post("/api/sounds/submit-sounds")
```
- After the above option is selected, the screen will auto-refresh and prompt you with 8 new images, each associated with a different sound. You can select the option 'View' to play the sounds and see the price for the sound changing (as per the requirements)

```javascript
router.put("/api/sounds/:id/play")
```
There is another API end endpoint that can be access via: <i>http://localhost:3033//api/sound/2</i>
```javascript
router.get("/api/sound/:id")
```


<i>**Please Note!** </i></br>
<i>The prices for the sounds will be overwritten (and hence set to 0) every time you select the option 'Load Sounds'. </i>

## Key points
- SOLID principles are being used in the backend server (as much as possible and within reason)
- The whole application was developed using typescript
- Using Cloudinary to store sounds associated with each image
- The client could easily extendable, as it is also using a component driven architecture and Mobx as the state management.
- Pre push hooks on the frontend app 
- Jenkins pipeline
