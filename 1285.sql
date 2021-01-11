-- Runtime: 495 ms, faster than 8.78% of MySQL online submissions for Find the Start and End Number of Continuous Ranges.
-- Memory Usage: 0B, less than 100.00% of MySQL online submissions for Find the Start and End Number of Continuous Ranges.


select START_ID, END_ID FROM 
(

select log_id as START_ID, lead(log_id) over( PARTITION BY(evenodd)) as END_ID from 
(
select log_id, if(row_number() over() % 2 = 0, row_number() over() - 1, row_number() over() ) as evenodd from

(
select log_id from
  (
    select log_id, log_id - lag(log_id) over () as lagdiff from Logs
  ) as SEL1
where lagdiff is null OR lagdiff <>1

UNION ALL
select log_id from 
  (
    select log_id ,  -1* log_id + lead(log_id) over() as lagdiff from Logs
  ) as SEL2
where lagdiff is null OR lagdiff <>1
order by log_id
) as SEL3
) as SEL4
) as SEL5 where END_ID IS NOT NULL;
