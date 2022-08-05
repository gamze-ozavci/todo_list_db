var dbConnection = require('../../config/db.config');

var TodoItem = function (item) {
    this.title = item.title;
    this.todo = item.todo;
};

TodoItem.getAllTodoList = (result) => {
    dbConnection.query('SELECT * FROM todoItems', (error, response) => {
        if (error) {
            console.log('Error while fetching todoItems');

            result(null, error);
        } else {
            console.log('todoItems fetched successfully');

            result(null, response);
        }
    });
};

TodoItem.getTodoById = (id, result) => {
    dbConnection.query('SELECT * FROM todoItems WHERE id=?', id, (error, response) => {
        if (error) {
            console.log('Error while fetching todoItems by id');

            result(null, error);
        } else {
            console.log('todoItems fetched successfully');

            result(null, response);
        }
    });
};

TodoItem.createNewTodo = (todoRequest, result) => {
    dbConnection.query('INSERT INTO todoItems SET ? ', todoRequest, (error, response) => {
        if (error) {
            console.log('Error while inserting todoItems');

            result(null, error);
        } else {
            console.log('todoItems created successfully');

            result(null, response);
        }
    })
};

TodoItem.updateTodo = (id, todoRequest, result) => {
    dbConnection.query('UPDATE todoItems SET title=?,todo=? WHERE id = ?',
        [todoRequest.title, todoRequest.todo, id], (error, response) => {
            if (error) {
                console.log('Error while updating todoItems');

                result(null, error);
            } else {
                console.log('todoItems updated successfully');

                result(null, response);
            }
        }
    )
};

TodoItem.deleteTodo = (id, result) => {
    dbConnection.query('DELETE FROM todoItems WHERE id=?', [id], (error, response) => {
        if (error) {
            console.log('Error while deleting todoItems');

            result(null, error);
        } else {
            console.log('todoItems updated successfully');

            result(null, response);
        }
    })
};

module.exports = TodoItem;