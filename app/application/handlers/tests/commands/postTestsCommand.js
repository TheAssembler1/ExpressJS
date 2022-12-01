const express = require('express');
const testsModel = require('../../../../persistance/testsSchema.js');

exports.module = async (request, response) => {
    const requestBody = request.body;
    const model = new testsModel(requestBody);

    model.save(err => {
        if(err) console.error(err)
    });

    return model.id || '';
}