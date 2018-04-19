// IMPORT DEPENDENCIES
const twit = require('twit');
const config = require('./config.js')


//CONFIGURE
const T = new twit(config);


//RETWEET
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
  			let postId = data.statuses.length < 10 ? data.statuses[0].id_str : data.statuses[Math.floor(Math.random() * 10)].id_str;
  			// console.log(postId)

  			//retweet
  			T.post('statuses/retweet/:id', { id: postId}, function (err, data, response) {
  				if(response){console.log('retweet successfull')};
  				if(err){console.log(err)};
			})
  		}
	})
}


//FAVORITE
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
  			let postId = data.statuses.length < 10 ? data.statuses[0].id_str : data.statuses[Math.floor(Math.random() * 10)].id_str;
  			// console.log(postId)

  			//like
  			T.post('favorites/create', { id: postId}, function (err, data, response) {
  				if(response){console.log('Favorited successfully')};
  				if(err){console.log(err)};
			})
  		}
	})
}


//FOLLOW
const follow = (q) =>{
	const params = {
		q: q,
		result_type:'recent',
		lang:'en',
		count:'10'
	}

	T.get('search/tweets', params, function(err, data,response) {
  		if(!err){
  			//grab userid
  			let usrId = data.statuses.length < 10 ? data.statuses[0].user.id_str : data.statuses[Math.floor(Math.random() * 10)].user.id_str;
  			// console.log(data.statuses[0].user)

  			//follow
  			T.post('friendships/create', { id: usrId}, function (err, data, response) {
  				if(response){console.log('followed successfully')};
  				if(err){console.log(err)};
			})
  		}
	})
}


//RANDOM CHOOSER AND SCHEDULER
const random_activity = () =>{
	
	//Choose topics randomly
	const topics = ['#100DaysOfCode','#IOT','#DataScience','#MachineLearning','#freecodecamp','#Reactjs','#301daysofcode','#cssgrid','#CSS3'];
	const random_topic = topics[Math.floor(Math.random() * topics.length)];
	console.log(random_topic);

	try{
		// call all functions
		retweet(random_topic);
		favorite(random_topic);
		follow(random_topic);
	} catch(err) {
		console.log(err);
	}

	// setTimeout(random_activity,14400000);
}

//UNLEASH THE BOT
random_activity();