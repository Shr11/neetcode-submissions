class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        seen = {}
        for index,char in enumerate(nums):
            complement = target - char
            if complement in seen:
                first_index = seen.get(complement)
                return [ first_index, index]
            seen[char] = index