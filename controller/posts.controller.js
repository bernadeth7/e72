// create the database js
const pool = require("../database/index.js")
const postsController={
    //1
    getProfessorWithStuNumIsNotZero: async(req,res)=>{
        try {
            const sql = "SELECT * FROM professor LEFT JOIN department ON professor.DEPT_CODE = department.DEPT_CODE LEFT JOIN student on department.DEPT_CODE = student.DEPT_CODE WHERE student.STU_NUM != 'null'"
            const [rows, fields] = await pool.query(sql)
            res.json({
                data: rows
            })
        } catch (error) {
            res.json({
                status: error
            })
        }
    },
    //2
    getProfessorFromDepartment: async(req,res)=>{
        try {
            const sql = "SELECT * FROM professor RIGHT JOIN department ON professor.DEPT_CODE = department.DEPT_CODE RIGHT JOIN student on department.DEPT_CODE = student.DEPT_CODE"
            const [rows, fields] = await pool.query(sql)
            res.json({
                data: rows
            })
        } catch (error) {
            res.json({
                status: error
            })
        }
    },
    //3
    getDeptGroupedByStudent: async(req,res)=>{
        try {
            const sql = "SELECT department.DEPT_CODE, count(student.STU_NUM) as NumberOfStudents FROM department RIGHT JOIN student ON department.DEPT_CODE = student.DEPT_CODE group by student.DEPT_CODE"
            const [rows, fields] = await pool.query(sql)
            res.json({
                data: rows
            })
        } catch (error) {
            res.json({
                status: error
            })
        }
    },
    //4
    getDeptACCT: async(req,res)=>{
        try {
            const sql = "SELECT department.DEPT_CODE, count(student.STU_NUM) as NumberOfStudents FROM department RIGHT JOIN student ON department.DEPT_CODE = student.DEPT_CODE group by student.DEPT_CODE HAVING department.DEPT_CODE = 'ACCT'"
            const [rows, fields] = await pool.query(sql)
            res.json({
                data: rows
            })
        } catch (error) {
            res.json({
                status: error
            })
        }
    },
    //5
    getDeptACCTv2: async(req,res)=>{
        try {
            const sql = "SELECT d.DEPT_CODE, count(s.STU_NUM) as NumberOfStudents FROM department `d` RIGHT JOIN student `s` ON d.DEPT_CODE = s.DEPT_CODE group by s.DEPT_CODE HAVING d.DEPT_CODE = 'ACCT'"
            const [rows, fields] = await pool.query(sql)
            res.json({
                data: rows
            })
        } catch (error) {
            res.json({
                status: error
            })
        }
    },
    //6
    getConcatStudentFirstAndLastName: async(req,res)=>{
        try {
            const sql = "SELECT d.DEPT_CODE, concat(s.STU_FNAME, ' ', s.STU_LNAME) as StudentFullName FROM department `d` right join student `s` on d.DEPT_CODE = s.DEPT_CODE"
            const [rows, fields] = await pool.query(sql)
            res.json({
                data: rows
            })
        } catch (error) {
            res.json({
                status: error
            })
        }
    },
    //7
    getEmployeeStudentCount: async(req,res)=>{
        try {
            const sql = "SELECT concat(e.EMP_FNAME, ' ', e.EMP_LNAME, ' ', e.EMP_NUM) as Professor, count(s.STU_NUM) as NoOfStudents FROM student `s` LEFT JOIN department `d` on s.DEPT_CODE = d.DEPT_CODE LEFT JOIN professor `p` on d.DEPT_CODE = p.DEPT_CODE LEFT JOIN employee `e` on p.EMP_NUM = e.EMP_NUM GROUP BY e.EMP_NUM"
            const [rows, fields] = await pool.query(sql)
            res.json({
                data: rows
            })
        } catch (error) {
            res.json({
                status: error
            })
        }
    },
    //8
    getDeptCodeAndStudentCount: async(req,res)=>{
        try {
            const sql = "SELECT concat(e.EMP_FNAME, ' ', e.EMP_LNAME, ' ', e.EMP_NUM) as Professor, concat(s.STU_FNAME,' ', s.STU_LNAME) as Students  FROM student `s`  LEFT JOIN department `d`  on s.DEPT_CODE = d.DEPT_CODE  LEFT JOIN professor `p` on d.DEPT_CODE = p.DEPT_CODE LEFT JOIN employee `e` on p.EMP_NUM = e.EMP_NUM where p.EMP_NUM='114'"
            const [rows, fields] = await pool.query(sql)
            res.json({
                data: rows
            })
        } catch (error) {
            res.json({
                status: error
            })
        }
    },
};

module.exports= postsController;