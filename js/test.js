var Twit = require('twit')

var T = new Twit({
  consumer_key:         'yIkYC3qb92wwpepC7L1WcC461',
  consumer_secret:      'zmvoGGR8bssSAoJnKcTHPUg8PxogqnsxivJUkmhTEolGEZCLTV',
  access_token:         '769391851837292544-j9xkfE8UsAaIpTgCc1PG2sUgSLdFNGm',
  access_token_secret:  'lcHXKQWf0435tx14sApvtVOnBngEf8HJnwayc4fLouffn',
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
})

var stream = T.stream('statuses/sample')

stream.on('tweet', function (tweet) {
  console.log(tweet)
})
