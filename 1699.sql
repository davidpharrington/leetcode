-- Runtime: 493 ms, faster than 78.85% of MySQL online submissions for Number of Calls Between Two Persons.
-- Memory Usage: 0B, less than 100.00% of MySQL online submissions for Number of Calls Between Two Persons.

select distinct
  least(from_id, to_id) as person1, 
  greatest(from_id, to_id) as person2, 
  count(duration) over(partition by least(from_id, to_id), greatest(from_id, to_id)) as call_count,
  sum(duration) over( partition by least(from_id, to_id), greatest(from_id, to_id)) as total_duration 
from Calls; 









-- Runtime: 617 ms, faster than 26.81% of MySQL online submissions for Number of Calls Between Two Persons.
-- Memory Usage: 0B, less than 100.00% of MySQL online submissions for Number of Calls Between Two Persons.


select distinct
  person1, 
  person2, 
  count(duration) over(partition by person1, person2) as call_count,
  sum(duration) over( partition by person1, person2) as total_duration 
from 
(

select least(from_id, to_id) as person1, greatest(from_id, to_id) as person2, duration from Calls
) SEL1



