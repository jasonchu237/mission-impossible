class FirstUnique {
    private Queue<Integer> queue = new LinkedList<>();
    private Map<Integer, Integer> map = new HashMap<>();
    
    public FirstUnique(int[] nums) {
        for (int num : nums) {
            add(num);
        }
    }
    
    public int showFirstUnique() {
        while (!queue.isEmpty() && map.get(queue.peek()) > 1) {
            queue.poll();
        }
        
        if (queue.isEmpty()) {
            return -1;
        }
        
        return queue.peek();
    }
    
    public void add(int value) {
        if (!map.containsKey(value)) {
            map.put(value, 1);
        } else {
            // map裡面調用put(), 不能用++, 必須用 val + 1
            map.put(value, map.get(value) + 1);
        }
        queue.offer(value);
    }
}

/**
 * Your FirstUnique object will be instantiated and called as such:
 * FirstUnique obj = new FirstUnique(nums);
 * int param_1 = obj.showFirstUnique();
 * obj.add(value);
 */