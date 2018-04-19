// Import dependencies
const twit = require('twit');
const config = require('./config.js')

//Configure
const T = new twit(config);

//Retweet
const retweet = (q) =>{
	const params = {
		q: q,
		result_type:'recent',
		lang:'en',
		count:'10'
	}

	T.get('search/tweets', params, function(err, data) {
  		if(!err){
  			//grab id
  			let usrId = data.statuses.length < 10 ? data.statuses[0].id_str : data.statuses[Math.floor(Math.random() * 10)].id_str;
  			// console.log(usrId)

  			//retweet
  			T.post('statuses/retweet/:id', { id: usrId}, function (err, data, response) {
  				if(response){console.log('retweet successfull')};
  				if(err){console.log(err)};
			})
  		}
	})
}

//Favorite
const favorite = (q) =>{
	const params = {
		q: q,
		result_type:'recent',
		lang:'en',
		count:'10'
	}

	T.get('search/tweets', params, function(err, data) {
  		if(!err){
  			//grab id
  			let usrId = data.statuses.length < 10 ? data.statuses[0].id_str : data.statuses[Math.floor(Math.random() * 10)].id_str;
  			// console.log(usrId)

  			//like
  			T.post('favorites/create', { id: usrId}, function (err, data, response) {
  				if(response){console.log('Favorited successfully')};
  				if(err){console.log(err)};
			})
  		}
	})
}

//Follow





//call all functions
// retweet('#100DaysOfCode');
favorite('#IOT');

//choose a random topic and follow,retweet and like it in set intervals