const axios = require('axios');
const firebase = require('firebase');

firebase.initializeApp({
    databaseURL: 'https://hackcoin-compare-micro.firebaseio.com/'
});


const Store = [];

const createStore = axios.get(`https://hackcoin-compare-micro.firebaseio.com/test/coins.json`)
.then( res => {

    const Values = Object.values(res.data);

    Values.forEach(item => {

        Store.push(item);

    });

});

const cryptocompare = () => {

    const fetch = axios.get(`https://min-api.cryptocompare.com/data/all/coinlist`)
    .then( res=> {

        const Values = Object.values(res.data.Data);

        Values.forEach(item => {

            const itemName = item.Name.toString().replace(/\*/g, '');
            
            const ref = firebase.database().ref(`test/coins/${itemName}/details`);

            ref.update({
                'id': item.Id,
                'symbol': itemName,
                'name': item.CoinName,
                'image': item.ImageUrl,
                'display_name': item.FullName,
                'algorithm': item.Algorithm,
                'proof': item.ProofType,
                'full_premine': item.FullyPremined,
                'total_supply': item.TotalCoinSupply,
                'premine_value': item.PreMinedValue,
                'total_free_float': item.TotalCoinsFreeFloat,
                'sort_order': item.SortOrder
            });

        });

    }).catch( err => err);

}

const compare_social = () => {

    const Values = Object.values(Store);
   
    Values.forEach(item => {

      if ( item.details !== undefined ) {  
          fetchSocial(item.details.id, item.details.symbol);
         }

    });

}


const fetchSocial = (ID, NAME) => {
    
    const fetch = axios.get(`https://www.cryptocompare.com/api/data/socialstats/?id=${ID}`)
    .then( res => {

        const ObjStore = [];

        ObjStore.push(res.data.Data);

        ObjStore.forEach(item => {

            const ref = firebase.database().ref(`test/coins/${NAME}/social`);

            ref.update(item);
           
           
        });

    });

}


module.exports = ( req, res ) => {
    const coins = (cryptocompare());
    const social = (compare_social());

    return {
         micro: Store
    }
}