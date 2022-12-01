const express = require('express');
const testsModel = require('../../../../persistance/testsSchema.js');

module.exports = async (request, response) => {
    const result = await testsModel.find();

    return result;
}