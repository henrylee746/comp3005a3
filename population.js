import client from "./client.js";

//Create table
const studentTableQuery = `
  CREATE TABLE IF NOT EXISTS students (
    student_id SERIAL PRIMARY KEY,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    enrollment_date DATE
  );
`;

client
  .query(studentTableQuery)
  .then(() => console.log("Students table created successfully"))
  .catch((e) => console.error(e.message));

//Seed table with initial data
const initialDataQuery = `
INSERT INTO students (first_name, last_name, email, enrollment_date)
VALUES
('John', 'Doe', 'john.doe@example.com', '2023-09-01'),
('Jane', 'Smith', 'jane.smith@example.com', '2023-09-01'),
('Jim', 'Beam', 'jim.beam@example.com', '2023-09-02')
`;

client
  .query(initialDataQuery)
  .then(() => console.log("Students table populated successfully"))
  .catch((e) => console.error(e.message));
