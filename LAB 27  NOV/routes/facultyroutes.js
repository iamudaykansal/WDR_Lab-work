// facultyroutes.js
import express from 'express';
import {
    facultyCreation,
    facultyList,
    facultyDetails,
    facultyDelete
} from '../controllers/facultycontroller.js';

const router = express.Router();

// API ENDPOINTS
router.post('/faculty', facultyCreation);       // Insert faculty
router.get('/faculty', facultyList);            // List all faculty
router.get('/faculty/:fid', facultyDetails);    // Get one faculty
router.delete('/faculty/:fid', facultyDelete);  // Delete faculty

export default router;
