Runtime: 599 ms, faster than 28.12% of MySQL online submissions for Invalid Tweets.
Memory Usage: 0B, less than 100.00% of MySQL online submissions for Invalid Tweets.



# Write your MySQL query statement below

select tweet_id from Tweets 
where char_length(content) > 15;


