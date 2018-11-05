// Write your JS here
import test from './script2.js';

console.log('test');

test();
var database = firebase.database();
var databaseRef = database.ref('/');

databaseRef.once('value').then(function(snapshot) {
    const databaseValues = snapshot.val();
    console.log(databaseValues);
});

import {random} from "./dBInteraction.js"
console.log(random());