/*
// Definition for Employee.
class Employee {
    public int id;
    public int importance;
    public List<Integer> subordinates;
};
*/

class Solution {
    public int getImportance(List<Employee> employees, int id) {
        int importance = 0;
        Map<Integer, Employee> idEmpMapping = new HashMap<>();
        for (Employee emp : employees) {
            idEmpMapping.put(emp.id, emp);
        }
        
        Queue<Employee> queue = new LinkedList<>();
        queue.offer(idEmpMapping.get(id));
        while (!queue.isEmpty()) {
            int size = queue.size();
            for (int i = 0; i < size; i++) {
                Employee cur = queue.poll();
                importance += cur.importance;
                for (int childId : cur.subordinates) {
                    queue.offer(idEmpMapping.get(childId));
                }
            }
        }
        
        return importance;
    }
}