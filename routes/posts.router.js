const express = require ("express");
const router = express.Router();

//controller
const postsController = require('../controller/posts.controller.js')

//routes
router.get("/Professor",postsController.getProfessorWithStuNumIsNotZero);//1
router.get("/Professor/Department",postsController.getProfessorFromDepartment);//2
router.get("/Department/Student",postsController.getDeptGroupedByStudent);//3
router.get("/Department/ACCT",postsController.getDeptACCT);//4
router.get("/Department/ACCT/2",postsController.getDeptACCTv2);//5
router.get("/StudentName",postsController.getConcatStudentFirstAndLastName);//6
router.get("/StudentCount",postsController.getEmployeeStudentCount);//7
router.get("/StudentCount114",postsController.getDeptCodeAndStudentCount);//8
module.exports = router;