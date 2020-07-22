let end = nums.length

while (nums[end-1] == val) 
    end--

for (i = 0; i < end - 2; i++) { // ***need to determine i < nums.length - 1
    cl(end, nums)
    if(val==nums[i])
    { 
        if (nums[end-1] !==nums[i]) {
            nums[i] = nums[end-1]
            end--
        } else {
            while (nums[end-1] == nums[i])
                end--
            nums[i] = nums[end-1]
            end--
        }
    }
    
}

return [end-1,nums]
