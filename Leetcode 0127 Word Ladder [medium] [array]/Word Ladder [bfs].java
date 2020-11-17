class Solution {
    public int ladderLength(String beginWord, String endWord, List<String> wordList) {
        HashSet<String> dic = new HashSet<>();
        for (String str : wordList) {
            dic.add(str);
        }
        
        LinkedList<String> queue = new LinkedList<>();
        queue.offer(beginWord);
        int level = 0;
        
        while (!queue.isEmpty()) {
            int size = queue.size();
            level++;
            for (int i = 0; i < size; i++) {
                String current = queue.poll();
                if (current.equals(endWord)) {
                    return level;
                }
                
                StringBuilder sb = new StringBuilder(current);
                
                for (int j = 0; j < current.length(); j++) {
                    for (char c = 'a'; c <= 'z'; c++) {
                        sb.setCharAt(j, c);
                        if (dic.contains(sb.toString())) {
                            queue.offer(sb.toString());
                            dic.remove(sb.toString());
                        }
                    }
                    sb.setCharAt(j, current.charAt(j));
                }
            }
        }
        
        return 0;
    }
}