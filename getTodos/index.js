const axios = require('axios');

module.exports = async function (context, req) {
    context.log('JavaScript HTTP post request with Axios module.');

    const jsonTodos = await getTodos();
    // context.log('here is the data total', todoList)

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: jsonTodos.data
    };

}

async function getTodos() {

    try {
        const todos = await axios.get('https://jsonplaceholder.typicode.com/todos')
        //                                                                                                                                               console.log(todos);
        return todos; // or return a custom object using properties from response
    } catch (error) {
        // If the promise rejects, an error will be thrown and caught here
        context.error(error);
    }

}