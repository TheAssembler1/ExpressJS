const express = require('express');
const testsModel = require('../../../../persistance/testsSchema.js');


module.exports = async (request, response) => {
    const id = request.params._id;
    const requestBody = request.body;

    await testsModel.findByIdAndUpdate(id, requestBody);
}