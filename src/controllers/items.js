const { request } = require('express');
const res = require('express/lib/response');
const todoModel = require('../models/model');

exports.getTodoList = (request, response)  => {
    console.log('Here all todo lists');

    todoModel.getAllTodoList((error, todo) => {
        console.log('We are here!');

        if (error) {
            response.send(error);
        }

        response.send(todo);
    });
};

exports.getTodoById = (request, response) => {
    todoModel.getTodoById(request.params.id, (error, todo) => {
        if (error) {
            response.send(error);
        }

        response.send(todo);
    });
};

exports.createNewTodo = (request, response) => {
    const todoRequestData = new todoModel(request.body);

    if (request.body.contructor === Object && Object(request.body).length === 0) {
        response.send(400).send({
            success: false,
            message: 'Please fill all fields'
        });
    } else {
        console.log('valid data');

        todoModel.createNewTodo(todoRequestData, (error, todo) => {
            if (error) {
                response.send(error);
            }

            response.json({
                status: true,
                message: 'todoItems created successfully',
                data: todo.insertId
            });
        });
    }
};

exports.updateTodo = (request, response) => {
    const todoRequestData = new todoModel(request.body);

    if (request.body.contructor === Object && Object(request.body).length === 0) {
        response.send(400).send({
            success: false,
            message: 'Please fill all fields'
        });
    } else {
        todoModel.updateTodo(request.params.id, todoRequestData, (error, todo) => {
            if (error) {
                response.send(error);
            }

            response.json({
                status: true,
                message: 'todoItems updated successfully'
            });
        });
    }
};

exports.deleteTodo = (request, response) => {
    todoModel.deleteTodo(request.params.id, (error, todo) => {
        if (error) {
            response.send(error);
        }

        response.json({
            success: true,
            message: 'todoItems deleted successfully'
        });
    });
};