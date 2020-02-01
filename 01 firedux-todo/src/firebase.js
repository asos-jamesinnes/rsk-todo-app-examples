import * as firebase from 'firebase';
import Config from './config.js';

firebase.initializeApp(Config);
const databaseRef = firebase.database().ref();
export const todosRef = databaseRef.child('todos')
//Initializes a firebase app with the config from config.js
//NOTE: For production, you will need to put your API keys
//and other config data into configplaceholder.js and rename it.
//Otherwise, your build will fail.
//Creates a single database instance as a child called todosRef and exports it.
//TODO: Refactor DB structure to support per-user instances.
