const cowsay = require('cowsay2');
module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    const name = (req.query.name || (req.body && req.body.name));

    const sayThis = cowsay.say('Hello, you did it ' + name + ', you made your first function!');
    const sayThat = cowsay.say('Hello too shy! You made your first function!')
    const responseMessage = name
        ? sayThis
        : sayThat

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: responseMessage
    };
}