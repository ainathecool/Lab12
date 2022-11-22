const request = require("supertest");
const app = require('./routes/users');
const mongoose = require('mongoose');
//const { response } = require("express");

describe("Test the root path", () => {
    test("It should response the POST method", () => {
        let response = request(app).post("http://localhost:8000/users/add"
        ).send ({
            "Name": "Aleena",
            "Email": "aleena",
            "Age": 21,
            "Contact": 123
        })
        expect(response.statusCode).toBe(200);
    }) 
})

describe("Test the delete by id method", () => {
    test("It should response the POST method", () => {
        let response = request(app).post("http://localhost:8000/users/:id"
        ).send ({
            "Name": "Aleena"
        })
        expect(response.statusCode).toBe(200);
    })  
})


describe("Test the add by username check", () => {
    test("It should response the POST method", () => {
        let response = request(app).post("http://localhost:8000/users/:name"
        ).send ({
            "Name": "Aleena"
        })
        expect(response.statusCode).toBe(200);
    })  
})

