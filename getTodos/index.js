const axios = require('axios');
const cowsay = require('cowsay2');
const { cat, whale } = require('cowsay2/cows');
// const seahorse = require('cowsay2/cows/seahorse');

module.exports = async function (context, req) {
    context.log('JavaScript HTTP post request with Axios module.');

    const todoList = await getTodos();
    // context.log('here is the data total', todoList)

    var cowTodos = todoList.data;
    var myList = [];
    cowTodos.forEach(todo => {
        if (todo.completed) {
            myList.push(cowsay.say(todo.title, { cow: cat }));
        } else {
            myList.push(cowsay.say(todo.title, { cow: whale }));
        }
    });

    var todoHtml = null;
    myList.forEach(item => {

        todoHtml = todoHtml + item + "\n"

    });

    // console.log(myList)
    context.res = {
        // status: 200, /* Defaults to 200 */
        body: todoHtml
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