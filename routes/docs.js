'use strict';
const express = require('express'),
    fs = require('fs'),
    router = express.Router();

const DOCUMENTATION_PATH = './documentation',
    INDEX_FILE_PATH = `${DOCUMENTATION_PATH}/index.json`,
    ENCODING = 'utf-8';

router.get('/getDocsList',function (req,res) {
    // Collect the list from Index.MD
    fs.readFile(INDEX_FILE_PATH,ENCODING, function (err, data) {
        if (err) {
            res.publish(false,'Failure',{});
        } else {
            try {
                data = JSON.parse(data);
            } catch (e) {
                data = {}
            }
            res.publish(true, 'Success', data);
        }
    });
});

router.get('/getMarkdownByName/:name',function (req, res) {
    let documentName = req.params.name;
    let fullPath = `${DOCUMENTATION_PATH}/${documentName}.md`;
    fs.readFile(fullPath, ENCODING, function(err, data) {
        if (err) {
            res.publish(false, 'Failure',{});
        } else {
            res.publish(true, 'Success', {markdown:data});
        }
    })
});

module.exports = router;
