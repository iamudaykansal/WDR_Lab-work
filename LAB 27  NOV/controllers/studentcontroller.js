import pool from '../db.js'

//to create a function to fetch data from mysql table
export async function fetchStudentsList(req,res)
{
	try
	{
		//fetching data from MySQL table
		const [result] = await pool.query("select * from student");
		//setting this data inot response in json
		res.json(result);
	}
	catch(err)
	{
		console.log("Unable to insert data ",err);
		res.status(500).json({error:"Internal server error"});
	}
}

//to create a function to insert data from mysql table
export async function registerStudent(req,res)
{
	//to destructure data from response body
	const {stdid,stdname,standard,age} = req.body
	try
	{
		//fetching data from MySQL table
		const [result] = await pool.query("insert into student values(?,?,?,?)",
		[stdid,stdname,standard,age]);
		//setting this data inot response in json
		res.json({message:'Data inserted',insertedId:result.insertId});
	}
	catch(err)
	{
		console.log("Unable to insert data ",err);
		res.status(500).json({error:"Internal server error"});
	}
}