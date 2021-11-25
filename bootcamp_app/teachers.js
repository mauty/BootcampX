




const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

const args = process.argv.slice(2)
const cohortName = args[0];


pool.query(`
SELECT DISTINCT teachers.name as teacher_name, cohorts.name as cohort_name
FROM assistance_requests
JOIN teachers ON teacher_id = teachers.id
JOIN students ON student_id = students.id
JOIN cohorts ON cohort_id = cohorts.id
WHERE cohorts.name = '${cohortName}'
ORDER BY teachers.name;
`)
.then(res => {
  res.rows.forEach(user => {
    console.log(`${user.cohort_name}: ${user.teacher_name}`);
  })  
})
.catch(err => console.error('query error', err.stack));