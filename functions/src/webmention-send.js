var webmention = require('send-webmention');

exports.handler = function(event, context, callback) {
  if (event.httpMethod !== 'POST') {
    callback(null, { statusCode: 405 });
  }

  const { source, target } = JSON.parse(event.body);

  webmention(source, target, (err, obj) => {
    if (err) throw err;

    if (obj.success) {
      callback(null, {
        statusCode: 200,
        body: 'Success!',
      });
    }

    callback(null, {
      statusCode: 200,
      body: 'Mention unsuccessful.',
    });
  });
};