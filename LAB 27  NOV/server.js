import express from 'express';
import cors from 'cors';

import courseRouter from './routes/courseroutes.js';
import facultyRouter from './routes/facultyroutes.js';

const application = express();

application.use(cors());
application.use(express.json());

// API Endpoints
application.use('/api', courseRouter);   // Course APIs
application.use('/api', facultyRouter);  // Faculty APIs

const PORT = 5000;

application.listen(PORT, () => {
    console.log(`Server started successfully on port ${PORT}`);
});
