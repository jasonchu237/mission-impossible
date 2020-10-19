class Solution {
    public void merge(int[] nums1, int m, int[] nums2, int n) {
        // m, n are the size of array that elements are not equal to zero, so m <= nums1.length, n <= nums2.length;
        int p1 = m - 1;
        int p2 = n - 1;
        int cur = nums1.length - 1;
        while (p1 >= 0 && p2 >= 0) {
            if (nums1[p1] >= nums2[p2]) {
                nums1[cur] = nums1[p1];
                p1--;
                cur--;
            } else {
                nums1[cur] = nums2[p2];
                p2--;
                cur--;
            }
        }
        
        while (p1 >= 0) {
            nums1[cur] = nums1[p1];
            p1--;
            cur--;
        }
        
        while (p2 >= 0) {
            nums1[cur] = nums2[p2];
            p2--;
            cur--;
        }
    } 
}