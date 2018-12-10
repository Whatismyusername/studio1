// Write your JS here
import test from './script2.js';
// import { forEachOverDatabase } from "./userInteraction.js";
import {get_database_snapshot} from "./dBInteraction.js";


console.log('test');

test();
var database = firebase.database();
var databaseRef = database.ref('/');

databaseRef.once('value').then(function(snapshot) {
    const databaseValues = snapshot.val();
    console.log(databaseValues);
});

