//In this file api url is to be designed
import express from 'express' // to use server router

import {fetchStudentsList,registerStudent} from '../controllers/studentcontroller.js' //to link API logic

// to create router

const router = express.Router();

//to design api endpoints

router.get('/students', fetchStudentsList); //api url for fetchi student data

router.post('/student', registerStudent);  //api url to insert data


//to export the router
export default router;