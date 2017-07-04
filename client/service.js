/**
 * @file 服务
 */
import 'whatwg-fetch'

const BASE_ENDPOINT = '/san-todo-mvc/api/v1'

export default {
    todos: function (category) {
        return fetch(`${BASE_ENDPOINT}/todos?category=${category}`).then(function(response) {
            return response.json()
        });
    },

    todo: function (id) {
        return fetch(`${BASE_ENDPOINT}/todo?id=${id}`).then(function(response) {
            return response.json()
        });
    },

    categories: function () {
        return fetch(`${BASE_ENDPOINT}/categories`).then(function(response) {
            return response.json()
        });
    },

    doneTodo: function (id) {
        return fetch(`${BASE_ENDPOINT}/doneTodo`, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id })
        }).then(function(response) {
            return response.json()
        });
    },

    rmTodo: function (id) {
        return fetch(`${BASE_ENDPOINT}/rmTodo`, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id })
        }).then(function(response) {
            return response.json()
        });
    },

    addTodo: function (todo) {
        return fetch(`${BASE_ENDPOINT}/addTodo`, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ todo })
        }).then(function(response) {
            return response.json()
        });
    },

    editTodo: function (todo) {
        return fetch(`${BASE_ENDPOINT}/editTodo`, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ todo })
        }).then(function(response) {
            return response.json()
        });
    },

    addCategory: function (category) {
        return fetch(`${BASE_ENDPOINT}/addCategory`, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ category })
        }).then(function(response) {
            return response.json()
        });
    },

    rmCategory: function (id) {
        return fetch(`${BASE_ENDPOINT}/rmCategory`, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id })
        }).then(function(response) {
            return response.json()
        });
    },

    editCategory: function (category) {
        return fetch(`${BASE_ENDPOINT}/editCategory`, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ category })
        }).then(function(response) {
            return response.json()
        });
    }
};

