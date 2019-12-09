var TwitterPackage = require('twitter');

var secret =
    {   consumer_key: 'EjVYS5wFrHvdXRuhJrQewTm9x',
        consumer_secret: 'bJSzg0RfyfO5d17dya1V8CbeZVZft2R6IVcbSXyKqJD0INt23g',
        access_token_key: '4685010138-Uhfa9b0XMAejYHYxjuqDVezeoatbIXWkGtn4uZX',
        access_token_secret: '4igkHULVVApR6T57eSyeKilhi3s8625LQix0BgQeUfdTA' };

var Twitter = new TwitterPackage(secret);

Twitter.post('statuses/update', {status: 'me going to lahore'},function(error, tweet, response){
    if(error){
        console.log(error)
    }else{
        console.log(tweet)
        console.log(response)
    }
});