const request = require('request');
request({
    url: 'https://api.foursquare.com/v2/venues/search',
    method: 'GET',
    qs: {
        client_id: 'SDJS0C34H0E30MXZYBBC2QTOA5SPWLWKBILN1CRPSOHP30QW',
        client_secret: '0JMS0AY30XLEW1XTQXCUA4CGANWX13PNMAXWI2I2SIJDTGTK',
        ll: '56.8790,14.8059',
        // query: 'movie',
        v: '20180323',
        categoryId : '4c38df4de52ce0d596b336e1',
        limit: 1
        //
        // ll: '40.7243,-74.0018',
        // query: 'coffee',
        // v: '20180323',
        // limit: 1
    }
}, function(err, res, body) {
    if (err) {
        console.error(err);
    } else {
        const result = JSON.parse(body)
        console.log(result.response.venues[0].name);
        console.log(result.response.venues[0].location)
    }
});