const express = require('express');
const app = express();
const path = require('path');




userObject = {
    name: "Lebang Nong",
    email: "lebangnong@gmail.com",
    prefferedName: "Lebang"
};

users = [];

function addDetails() {
    const nameBox = document.querySelector('.js-full-name');
    const name = nameBox.value;
    console.log("hi");
};



document.querySelector('.js-submit-button').addEventListener('click', () => {
    addDetails();
});



