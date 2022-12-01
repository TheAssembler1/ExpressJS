const express = require('express');
const testsModel = require('../../../../persistance/testsSchema.js');

module.exports = async (request, response) => {
    const id = request.params.id;
    const result = await testsModel.findById(id);
    
    return result;
}