-- Runtime: 653 ms, faster than 7.60% of MySQL online submissions for Sales by Day of the Week.
-- Memory Usage: 0B, less than 100.00% of MySQL online submissions for Sales by Day of the Week.


select CATEGORY, sum(MONDAY) as MONDAY,
sum(TUESDAY) as TUESDAY,
sum(WEDNESDAY) as WEDNESDAY,
sum(THURSDAY) AS THURSDAY,
sum(FRIDAY) AS FRIDAY,
SUM(SATURDAY) AS SATURDAY,
SUM(SUNDAY) AS SUNDAY FROM

(
select 
Category as CATEGORY,
if(day='Monday',sum(quantity),0) as MONDAY,
if(day='Tuesday',sum(quantity),0) as TUESDAY,
if(day='Wednesday',sum(quantity),0) as WEDNESDAY,
if(day='Thursday',sum(quantity),0) as THURSDAY,
if(day='Friday',sum(quantity),0) as FRIDAY,
if(day='Saturday',sum(quantity),0) as SATURDAY,
if(day='Sunday',sum(quantity),0) as SUNDAY

FROM

(  
select
Items.item_category as Category, 
Orders.quantity,
dayname(Orders.order_date) as day
from Items
left join Orders on Orders.item_id = Items.item_id
) SEL1
group by Category, day
) SEL2

group by CATEGORY
order by CATEGORY
;