const express = require('express');
const testsModel = require('../../../../persistance/testsSchema.js');

module.exports = async (request, response) => {
    const id = request.params.id;

    testsModel.deleteOne({ id: id }).catch(err => {
        if(err) console.error(err)
    });
}