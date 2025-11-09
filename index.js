import client from "./client.js";

//CRUD functions
const getAllStudents = async () => {
  try {
    const res = await client.query("SELECT * FROM STUDENTS");
    console.log("All students:", res.rows);
  } catch (e) {
    console.error("Error fetching students", e.message);
  }
};

const addStudent = async (first_name, last_name, email, enrollment_date) => {
  try {
    const res = await client.query(
      `INSERT INTO students (first_name, last_name, email, enrollment_date)
      VALUES ($1, $2, $3, $4) RETURNING *`,
      //RETURNING * will return the row updated in res.rows (which is an array)
      [first_name, last_name, email, new Date(enrollment_date)] //transforms string like '2023-09-01' into date obj
      /*The dependency array's arguments will go into the 
        parameters of the query (e.g. first_name goes into $1)*/
    );
    console.log("Student inserted:", res.rows[0]);
  } catch (e) {
    //e is the error object
    console.error("Error inserting student", e.message);
  }
};

const updateStudentEmail = async (student_id, new_email) => {
  try {
    const res = await client.query(
      `UPDATE students SET email = $1
      WHERE student_id = $2 RETURNING *`,
      [new_email, student_id]
    );
    console.log("Student updated:", res.rows[0]);
  } catch (e) {
    console.error("Error inserting student", e.message);
  }
};

const deleteStudent = async (student_id) => {
  try {
    const res = await client.query(
      `DELETE FROM students WHERE student_id = $1 RETURNING *`,
      [student_id]
    );
    console.log("Student deleted:", res.rows[0]);
  } catch (e) {
    console.error("Error deleting student", e.message);
  }
};

//Can comment/uncomment to test the functions as needed

//addStudent("Henry", "Lee", "something@email.ca", new Date());
//updateStudentEmail(2, "updated@email.com");
//deleteStudent(1);
getAllStudents();
