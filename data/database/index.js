import axios from 'axios';
import firebase from 'firebase';
import icodata from './ico';



const controller = () => {

    // Sleep Function 

    function sleep(delay) {
        var start = new Date().getTime();
        while (new Date().getTime() < start + delay);
      }

firebase.initializeApp({
    databaseURL: 'https://hackcoin-new.firebaseio.com/'
});

const ref = firebase.database().ref('data');

// Refresh ICOs 


icodata();


}
export default controller;
