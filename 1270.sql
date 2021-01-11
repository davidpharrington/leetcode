/*
Runtime: 204 ms, faster than 60.45% of MySQL online submissions for All People Report to the Given Manager.
Memory Usage: 0B, less than 100.00% of MySQL online submissions for All People Report to the Given Manager.
*/

select Employees.employee_id from Employees
left join Employees as bosses1 on Employees.manager_id = bosses1.employee_id
left join Employees as bosses2 on bosses1.manager_id = bosses2.employee_id
left join Employees as bosses3 on bosses2.manager_id = bosses3.employee_id
where bosses3.employee_id = 1 and Employees.employee_id <> 1;