class Solution {
    public List<List<String>> findLadders(String beginWord, String endWord, List<String> wordList) {
        Queue<List<String>> queue = new LinkedList<>();
        
        HashSet<String> dic = new HashSet<>();
        for (String word : wordList) {
            dic.add(word);
        }
        
        List<String> path = new ArrayList<>();
        path.add(beginWord);
        queue.offer(path);
        
        List<List<String>> result = new ArrayList<>();
        
        while (!queue.isEmpty()) {
            if (!result.isEmpty()) {
                return result;
            }
            int size = queue.size();
            for (int i = 0; i < size; i++) {
                List<String> currentList = queue.poll();
                String curWord = currentList.get(currentList.size() - 1);
                dic.remove(curWord);
                if (curWord.equals(endWord)) {
                    result.add(new ArrayList<>(currentList));
                } else {
                    StringBuilder sb = new StringBuilder(curWord);
                    for (int j = 0; j < curWord.length(); j++) {
                        for (char c = 'a'; c <= 'z'; c++) {
                            sb.setCharAt(j, c);
                            if (dic.contains(sb.toString())) {
                                currentList.add(sb.toString());
                                queue.offer(new ArrayList<>(currentList));
                                // Backtracking
                                currentList.remove(currentList.size() - 1);
                            }
                        }
                        sb.setCharAt(j, curWord.charAt(j));
                    }
                }
            }
        }
                                
        return result;
    }
}