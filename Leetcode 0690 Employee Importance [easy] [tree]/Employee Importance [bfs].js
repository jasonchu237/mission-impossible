/**
 * Definition for Employee.
 * function Employee(id, importance, subordinates) {
 *     this.id = id;
 *     this.importance = importance;
 *     this.subordinates = subordinates;
 * }
 */

/**
 * @param {Employee[]} employees
 * @param {number} id
 * @return {number}
 */
var GetImportance = function(employees, id) {
    let importance = 0;
    let idEmpMapping = new Map();
    for (let emp of employees) {
        idEmpMapping.set(emp.id, emp);
    }
    
    let queue = [];
    queue.push(idEmpMapping.get(id));
    while (queue.length > 0) {
        let size = queue.length;
        console.log(size);
        for (let i = 0; i < size; i++) {
            let cur = queue.shift();
            importance += cur.importance;
            for (let childId of cur.subordinates) {
                queue.push(idEmpMapping.get(childId));
            }
        }
    }
    
    return importance;
};