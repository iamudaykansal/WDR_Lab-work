import pool from '../db.js';

// Create course
export async function courseCreation(req, res) {
    const { cid, cname, description, duration } = req.body;
    try {
        const [result] = await pool.query(
            "INSERT INTO course VALUES (?, ?, ?, ?)",
            [cid, cname, description, duration]
        );
        res.json({ message: 'Data inserted', insertedId: result.insertId });
    } catch (err) {
        console.log("Unable to insert data ", err);
        res.status(500).json({ error: "Internal server error" });
    }
}

// Fetch all courses
export async function fetchCoursesList(req, res) {
    try {
        const [result] = await pool.query("SELECT * FROM course");
        res.json(result);
    } catch (err) {
        console.log("Unable to fetch data ", err);
        res.status(500).json({ error: "Internal server error" });
    }
}

// Fetch single course by ID
export async function fetchCourseDetail(req, res) {
    const { cid } = req.params;
    try {
        const [result] = await pool.query("SELECT * FROM course WHERE cid = ?", [cid]);
        if (result.length === 0) {
            return res.status(404).json({ message: "Course not found" });
        }
        res.json(result[0]);
    } catch (err) {
        console.log("Unable to fetch course ", err);
        res.status(500).json({ error: "Internal server error" });
    }
}

// Update course
export async function updateCourse(req, res) {
    const { cid } = req.params;
    const { cname, description, duration } = req.body;
    try {
        const [result] = await pool.query(
            "UPDATE course SET cname = ?, description = ?, duration = ? WHERE cid = ?",
            [cname, description, duration, cid]
        );
        res.json({ message: "Course updated successfully" });
    } catch (err) {
        console.log("Unable to update course ", err);
        res.status(500).json({ error: "Internal server error" });
    }
}

// Delete course
export async function deleteCourse(req, res) {
    const { cid } = req.params;
    try {
        await pool.query("DELETE FROM course WHERE cid = ?", [cid]);
        res.json({ message: "Course deleted successfully" });
    } catch (err) {
        console.log("Unable to delete course ", err);
        res.status(500).json({ error: "Internal server error" });
    }
}

// Module creation (assuming courseid, modulename)
export async function moduleCreation(req, res) {
    const { mid, cid, mname, description } = req.body;
    try {
        const [result] = await pool.query(
            "INSERT INTO module (mid, cid, mname, description) VALUES (?, ?, ?, ?)",
            [mid, cid, mname, description]
        );
        res.json({ message: 'Module inserted', insertedId: result.insertId });
    } catch (err) {
        console.log("Unable to insert module ", err);
        res.status(500).json({ error: "Internal server error" });
    }
}

// Faculty alignment to a course
export async function facultyAlignment(req, res) {
    const { fid, cid } = req.body;
    try {
        const [result] = await pool.query(
            "INSERT INTO faculty_course (fid, cid) VALUES (?, ?)",
            [fid, cid]
        );
        res.json({ message: "Faculty aligned to course" });
    } catch (err) {
        console.log("Unable to align faculty ", err);
        res.status(500).json({ error: "Internal server error" });
    }
}
