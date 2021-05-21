const express = require('express');
const router =  express.Router();
const studentController = require('../controller/studentController');

var path = '/api/students/';
router.get(path, studentController.getAll );
router.post(path, studentController.registerNew );
router.get(path+':studentid', studentController.getOneStudent );
router.get(path+':studentid/address', studentController.getstudentAddress );
router.get(path+':studentid/address/:addressid', studentController.getOneStudentAddress );

module.exports = router;