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
  			let usrId = data.statuses[0].id_str;

  			//
  			console.log(usrId);
  		}
	})
}

retweet('#100DaysOfCode');
