const axios = require('axios');
const firebase = require('firebase');

firebase.initializeApp({
    databaseURL: 'https://hackcoin-compare-micro.firebaseio.com/'
});


const Store = [];

const coinmarketcap = () => {

const fetch = axios.get(`https://api.coinmarketcap.com/v1/ticker/`)
.then( res => {

    const Values = Object.values(res.data);
    Values.forEach( item => {
        
        const ref = firebase.database().ref(`test/coinmarketcap/${item.symbol}`);

        ref.update(item);

        Store.push(item);

    });

});
}

module.exports = ( req, res ) => {
    const coins = (coinmarketcap());

    return {
         micro: Store
    }
}