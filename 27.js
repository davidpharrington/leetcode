function cl(...args) { console.log(...args) }


var removeElement = function (nums, bad) {
    let end = nums.length
    if (nums[0] == bad) {

        //find the first good element
        //put it at position [0]
        //scoot all subsequent elements towards [0]
        for (i = 0; i < end - 1; i++) {
            if (nums[i] !== bad) {

                nums[0] = nums[i]

                for (j = i + 1; j < nums.length - 1; j++)
                    nums[j - 1] = nums[j]
                end = end - i + 1
                break
            }
        }
    }

    cl(nums, end)

    //find the last good element
    while (nums[end] == bad)
        end--

    //remove the bad elements in the middle
    for (i = 1; i < end; i++) {
        if (nums[i] == bad) {
            while (nums[end] == bad)
                end--
            nums[i] = nums[end]
            end--
        }
    }
    return [nums, end]
}



nums = [1,2]
cl(removeElement(nums, 2))

