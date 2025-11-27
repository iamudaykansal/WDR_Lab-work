import express from 'express';
import {
    courseCreation,
    fetchCoursesList,
    fetchCourseDetail,
    updateCourse,
    deleteCourse,
    moduleCreation,
    facultyAlignment
} from '../controllers/coursecontroller.js';

const router = express.Router();

// Course APIs
router.post('/course', courseCreation);
router.get('/course', fetchCoursesList);
router.get('/course/:cid', fetchCourseDetail);
router.put('/course/:cid', updateCourse);
router.delete('/course/:cid', deleteCourse);

// Module & Faculty APIs
router.post('/module', moduleCreation);
router.post('/faculty-align', facultyAlignment);

export default router;
