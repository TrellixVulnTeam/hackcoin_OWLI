const axios = require('axios');
const firebase = require('firebase');

firebase.initializeApp({
    databaseURL: 'https://hackcoin-compare-micro.firebaseio.com/'
});

const Length = [];
const Store = [];

const refreshCoins = axios.get(`http://coincap.io/coins/`)
.then( res => { 
    
    const Values = Object.values(res.data);
    
    Values.forEach( item => {
    
        coincap(item);

    });
 
});

const fetchStore = axios.get(`https://hackcoin-compare-micro.firebaseio.com/test/coincap.json`)
.then( res => { 

    const Values = Object.values(res.data);

    Values.forEach( item => {

        Store.push(item);

    });

    const countStore = Store.length;

    Length.push({count: countStore});

});

const coincap = (SYMBOL) => {

    const fetch = axios.get(`http://coincap.io/page/${SYMBOL}`)
    .then( res => {
        
        const Values = [];
        Values.push(res.data);

        Values.forEach( item => {
            

            const ref = firebase.database().ref(`test/coincap/${SYMBOL}`);

            ref.update(item);

        });

    }).catch( err => err);

}

const fetchHistDaily = (props) => {

    const fetch_daily = axios.get(` http://coincap.io/history/1day/${props}`)
    .then( res => {

        const Values = [];

        Values.push(res.data);

        Values.forEach( item => {
        
        if ( item.market_cap && item.price && item.volume !== undefined ) {
        
        const ref = firebase.database().ref(`test/coins/${props}/history/daily`)
            
        ref.update(item);

            } else {

                console.log(`bad query`);
            }
        
        });


    }).catch( err => err );
}

const fetchHistWeekly = (props) => {

    const fetch_weekly = axios.get(` http://coincap.io/history/7day/${props}`)
    .then( res => {

            const Values = [];

        Values.push(res.data);

        Values.forEach( item => {
        
        if ( item.market_cap && item.price && item.volume !== undefined ) {
        
        const ref = firebase.database().ref(`test/coins/${props}/history/weekly`)
            
        ref.update(item);

            } else {

                console.log(`bad query`);
            }
        
        });
        
    }).catch( err => err );

 }
    
 const fetchHistMonthly = (props) => {

    const fetch_weekly = axios.get(` http://coincap.io/history/30day/${props}`)
    .then( res => {

            const Values = [];

        Values.push(res.data);

        Values.forEach( item => {
        
        if ( item.market_cap && item.price && item.volume !== undefined ) {
        
        const ref = firebase.database().ref(`test/coins/${props}/history/monthly`)
            
        ref.update(item);

            } else {

                console.log(`bad query`);
            }
        
        });
        
    }).catch( err => err );

 }
    
 const fetchHistQuarterly = (props) => {

    const fetch_weekly = axios.get(` http://coincap.io/history/90day/${props}`)
    .then( res => {

            const Values = [];

        Values.push(res.data);

        Values.forEach( item => {
        
        if ( item.market_cap && item.price && item.volume !== undefined ) {
        
        const ref = firebase.database().ref(`test/coins/${props}/history/quarterly`)
            
        ref.update(item);

            } else {

                console.log(`bad query`);
            }
        
        });
        
    }).catch( err => err );

 }
    

 const fetchHistBiAnnual = (props) => {

    const fetch_weekly = axios.get(` http://coincap.io/history/180day/${props}`)
    .then( res => {

            const Values = [];

        Values.push(res.data);

        Values.forEach( item => {
        
        if ( item.market_cap && item.price && item.volume !== undefined ) {
        
        const ref = firebase.database().ref(`test/coins/${props}/history/biannual`)
            
        ref.update(item);

            } else {

                console.log(`bad query`);
            }
        
        });
        
    }).catch( err => err );

 }
    
 const fetchHistAnnual = (props) => {

    const fetch_weekly = axios.get(` http://coincap.io/history/365day/${props}`)
    .then( res => {

            const Values = [];

        Values.push(res.data);

        Values.forEach( item => {
        
        if ( item.market_cap && item.price && item.volume !== undefined ) {
        
        const ref = firebase.database().ref(`test/coins/${props}/history/annual`)
            
        ref.update(item);

            } else {

                console.log(`bad query`);
            }
        
        });
        
    }).catch( err => err );

 }


 function sleep(delay) {
    var start = new Date().getTime();
    while (new Date().getTime() < start + delay);
  }


 const histController = () => {
 
 const fetch = axios.get(`https://hackcoin-compare-micro.firebaseio.com/test/coins.json`)
.then ( res => {

        const Values = Object.keys(res.data);

        console.log(Values);

        Values.forEach( item => {

        fetchHistDaily(item);
        
        sleep(5);

        fetchHistWeekly(item);
        
        sleep(5);

        fetchHistMonthly(item);
        
        sleep(5);

        fetchHistQuarterly(item);
        
        sleep(5);

        fetchHistBiAnnual(item);
        
        sleep(5);

        fetchHistAnnual(item);
        sleep(100);
        });
    });
 }

module.exports = ( req, res ) => {

    return {
        count: Length,
         micro: Store
    }


    const refreshHist = (histController());

}