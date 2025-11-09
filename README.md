To run the application:

1. Replace the user, host, database, password, and/or port details
   as necessary with your pgAdmin details in client.js

2. run "npm i" or "pnpm i" to install dependencies (such as pg)

3. Run node population.js to create the students table and populate it with the initial given data

4. In index.js (where the CRUD functions reside), comment/uncomment
   the function invokations at the bottom as needed depending on what
   you would like to test. For example, if you wanted to test deleting
   a student:

//addStudent("Henry", "Lee", "something@email.ca", new Date());
//updateStudentEmail(2, "updated@email.com");
deleteStudent(1);
getAllStudents();

This way, you don't run adding or updating prior on accident, and
you get all rows returned after deleting to see if the student was
actually removed from the table.

5. (Optional) For easier testing, there's another dependency in this
   application called nodemon that will re-start your node runtime
   environment after every change & save of the file. You can utilize this by running: npx nodemon <file_name>.js or pnpm dlx nodemon <file_name>.js
