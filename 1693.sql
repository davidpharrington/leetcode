

-- Runtime: 436 ms, faster than 77.87% of MySQL online submissions for Daily Leads and Partners.
-- Memory Usage: 0B, less than 100.00% of MySQL online submissions for Daily Leads and Partners.


-- select date_id, make_name, count(distinct lead_id) over(partition by date_id, make_name) as unique_leads, 
-- count(distinct partner_id) over(partition by date_id, make_name) as unique_partners from DailySales;


select SEL2.date_id, SEL2.make_name, SEL2.unique_leads, SEL4.unique_partners from

(select distinct date_id, make_name, count(lead_id) over(partition by date_id, make_name) as unique_leads from
(
select distinct date_id, make_name, lead_id from DailySales
) SEL1) SEL2

inner join 
(

select distinct date_id, make_name, count(partner_id) over(partition by date_id, make_name) as unique_partners from
(
select distinct date_id, make_name, partner_id from DailySales
) SEL3
) SEL4

on SEL2.date_id = SEL4.date_id and SEL2.make_name = SEL4.make_name;


