
/*Runtime: 477 ms, faster than 97.14% of MySQL online submissions for Running Total for Different Genders.
Memory Usage: 0B, less than 100.00% of MySQL online submissions for Running Total for Different Genders.*/

/*
1308
https://learnsql.com/blog/what-is-a-running-total-and-how-to-compute-it-in-sql/
*/



select gender, day, sum(score_points) over (partition by gender order by day)  as total from Scores order by gender, day;






main.sql

Runtime: 477 ms, faster than 97.14% of MySQL online submissions for Running Total for Different Genders.
Memory Usage: 0B, less than 100.00% of MySQL online submissions for Running Total for Different Genders.

/*
1308
https://learnsql.com/blog/what-is-a-running-total-and-how-to-compute-it-in-sql/
*/


select gender, day, sum(score_points) over (partition by gender, day)  as total from Scores order by gender, day;

