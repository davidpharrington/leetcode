
select distinct customer_id, product_id, product_name from 

(
select 
customer_id, 
Products.product_id, 
product_name,
rank() over(partition by customer_id order by countt desc) as rankk from 

(
select 
  customer_id, 
  product_id, 
  count(product_id) over(partition by customer_id, product_id) as countt 
from Orders
) SEL1
inner join Products on SEL1.product_id = Products.product_id
    
order by customer_id, countt desc
) SEL2


where rankk =1;
