// facultycontroller.js
import pool from '../db.js';

// CREATE Faculty
export async function facultyCreation(req, res) {
    const { fid, fname, qualification, experience } = req.body;
    try {
        const [result] = await pool.query(
            "INSERT INTO faculty (fid, fname, qualification, experience) VALUES (?, ?, ?, ?)",
            [fid, fname, qualification, experience]
        );
        res.json({ message: 'Faculty inserted', insertedId: result.insertId });
    } catch (err) {
        console.log("Unable to insert faculty ", err);
        res.status(500).json({ error: "Internal server error" });
    }
}

// FETCH ALL FACULTY
export async function facultyList(req, res) {
    try {
        const [result] = await pool.query("SELECT * FROM faculty");
        res.json(result);
    } catch (err) {
        console.log("Unable to fetch faculty list ", err);
        res.status(500).json({ error: "Internal server error" });
    }
}

// FETCH SINGLE FACULTY DETAILS
export async function facultyDetails(req, res) {
    const { fid } = req.params;
    try {
        const [result] = await pool.query("SELECT * FROM faculty WHERE fid = ?", [fid]);
        if (result.length === 0) {
            return res.status(404).json({ message: "Faculty not found" });
        }
        res.json(result[0]);
    } catch (err) {
        console.log("Unable to fetch faculty details ", err);
        res.status(500).json({ error: "Internal server error" });
    }
}

// DELETE FACULTY BY ID
export async function facultyDelete(req, res) {
    const { fid } = req.params;
    try {
        await pool.query("DELETE FROM faculty WHERE fid = ?", [fid]);
        res.json({ message: "Faculty deleted successfully" });
    } catch (err) {
        console.log("Unable to delete faculty ", err);
        res.status(500).json({ error: "Internal server error" });
    }
}
