SELECT day, count(assignments.day) as number_of_assignments, sum(assignments.duration) as duration
FROM assignments
GROUP BY day
ORDER BY day;