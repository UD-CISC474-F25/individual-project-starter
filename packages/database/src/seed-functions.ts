import { prisma } from "./client";
import { faker } from "@faker-js/faker";
import type { Language, SubmissionType, SubmissionStatus } from "../generated/client";

const LANGUAGES: Language[] = ['PYTHON', 'JAVASCRIPT', 'TYPESCRIPT', 'JAVA', 'CPP', 'C'];
const SUBMISSION_TYPES: SubmissionType[] = ['CODE', 'NOTEBOOK', 'VIDEO', 'TEXTBOX', 'FILE_UPLOAD'];

// Sample programming problems with realistic content
const PROGRAMMING_PROBLEMS = [
  {
    title: "Two Sum",
    prompt: "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice.",
    starterCode: {
      PYTHON: "def twoSum(nums, target):\n    # Your code here\n    pass",
      JAVASCRIPT: "function twoSum(nums, target) {\n    // Your code here\n}",
      JAVA: "public int[] twoSum(int[] nums, int target) {\n    // Your code here\n    return new int[0];\n}",
      CPP: "#include <vector>\nusing namespace std;\n\nvector<int> twoSum(vector<int>& nums, int target) {\n    // Your code here\n    return {};\n}",
    }
  },
  {
    title: "Valid Parentheses",
    prompt: "Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid. An input string is valid if: 1) Open brackets must be closed by the same type of brackets. 2) Open brackets must be closed in the correct order.",
    starterCode: {
      PYTHON: "def isValid(s):\n    # Your code here\n    pass",
      JAVASCRIPT: "function isValid(s) {\n    // Your code here\n}",
      JAVA: "public boolean isValid(String s) {\n    // Your code here\n    return false;\n}",
    }
  },
  {
    title: "Binary Tree Inorder Traversal",
    prompt: "Given the root of a binary tree, return the inorder traversal of its nodes' values.",
    starterCode: {
      PYTHON: "def inorderTraversal(root):\n    # Your code here\n    pass",
      JAVASCRIPT: "function inorderTraversal(root) {\n    // Your code here\n}",
      JAVA: "public List<Integer> inorderTraversal(TreeNode root) {\n    // Your code here\n    return new ArrayList<>();\n}",
    }
  }
];

// Sample notebook cells for NOTEBOOK submissions
const NOTEBOOK_CELLS = [
  {
    cell_type: "markdown",
    source: ["# Data Analysis Project", "", "This notebook analyzes student performance data."]
  },
  {
    cell_type: "code",
    source: ["import pandas as pd", "import matplotlib.pyplot as plt", "import numpy as np"],
    outputs: []
  },
  {
    cell_type: "code",
    source: ["# Load the data", "df = pd.read_csv('student_data.csv')", "print(df.head())"],
    outputs: [
      {
        output_type: "stream",
        name: "stdout",
        text: ["   student_id  grade  attendance\n", "0           1     85          95\n", "1           2     92          88\n", "2           3     78          92\n"]
      }
    ]
  }
];

export async function createProblems(assignments: any[]) {
  console.log("Creating problems...");
  
  const problems = [];
  
  for (const assignment of assignments) {
    // Create 2-4 problems per assignment
    const numProblems = faker.number.int({ min: 2, max: 4 });
    
    for (let i = 0; i < numProblems; i++) {
      const problemData = faker.helpers.arrayElement(PROGRAMMING_PROBLEMS);
      const language = faker.helpers.arrayElement(LANGUAGES);
      
      const problem = await prisma.problem.create({
        data: {
          id: faker.string.uuid(),
          assignmentId: assignment.id,
          title: problemData.title,
          prompt: problemData.prompt,
          starterCode: problemData.starterCode[language] || problemData.starterCode.PYTHON,
          language: language,
          maxScore: faker.helpers.arrayElement([75, 100, 125, 150]),
        }
      });
      problems.push(problem);
    }
  }
  
  return problems;
}

export async function createTestCases(problems: any[]) {
  console.log("Creating test cases...");
  
  for (const problem of problems) {
    // Create 3-6 test cases per problem
    const numTestCases = faker.number.int({ min: 3, max: 6 });
    
    for (let i = 0; i < numTestCases; i++) {
      const isHidden = i >= 2; // First 2 are visible, rest are hidden
      
      await prisma.problemTestCase.create({
        data: {
          id: faker.string.uuid(),
          problemId: problem.id,
          input: faker.helpers.arrayElement([
            "[2,7,11,15], 9",
            "nums = [3,2,4], target = 6",
            "nums = [3,3], target = 6",
            "()",
            "()[]{}",
            "(]",
            "[1,2,3,4,5]",
            "[-2,1,-3,4,-1,2,1,-5,4]"
          ]),
          expectedOutput: faker.helpers.arrayElement([
            "[0,1]",
            "[1,2]",
            "[0,1]",
            "true",
            "true",
            "false",
            "[1,2,3,4,5]",
            "6"
          ]),
          hidden: isHidden,
          points: faker.number.int({ min: 10, max: 25 }),
        }
      });
    }
  }
}

export async function createSubmissions(problems: any[], users: any[], assignments: any[]) {
  console.log("Creating submissions...");
  
  const students = users.slice(15); // Students start at index 15
  const submissions = [];
  
  for (const problem of problems) {
    // Find the assignment for this problem
    const assignment = assignments.find(a => a.id === problem.assignmentId);
    if (!assignment) continue;
    
    // Get students enrolled in this problem's course
    const courseEnrollments = await prisma.enrollment.findMany({
      where: {
        courseId: assignment.courseId,
        role: 'STUDENT',
        status: 'ACTIVE'
      }
    });
    
    const enrolledStudents = students.filter(student => 
      courseEnrollments.some(enrollment => enrollment.userId === student.id)
    );
    
    // Create submissions for 60-80% of enrolled students
    const submissionCount = Math.floor(enrolledStudents.length * faker.number.float({ min: 0.6, max: 0.8 }));
    const submittingStudents = faker.helpers.arrayElements(enrolledStudents, submissionCount);
    
    for (const student of submittingStudents) {
      const submissionType = faker.helpers.arrayElement(SUBMISSION_TYPES);
      const status = faker.helpers.weightedArrayElement([
        { weight: 40, value: 'PASSED' },
        { weight: 25, value: 'FAILED' },
        { weight: 15, value: 'PENDING' },
        { weight: 10, value: 'RUNNING' },
        { weight: 8, value: 'LATE' },
        { weight: 2, value: 'CANCELED' }
      ]);
      
      const attemptNumber = faker.number.int({ min: 1, max: 3 });
      const isLatest = faker.datatype.boolean();
      
      const submission = await prisma.submission.create({
        data: {
          id: faker.string.uuid(),
          problemId: problem.id,
          studentId: student.id,
          type: submissionType,
          status: status,
          language: submissionType === 'CODE' ? faker.helpers.arrayElement(LANGUAGES) : null,
          code: submissionType === 'CODE' ? generateCodeSolution(problem.language || 'PYTHON') : null,
          videoUrl: submissionType === 'VIDEO' ? faker.internet.url() : null,
          textContent: submissionType === 'TEXTBOX' ? faker.lorem.paragraphs(3) : null,
          runtimeMs: status === 'PASSED' ? faker.number.int({ min: 10, max: 1000 }) : null,
          score: status === 'PASSED' ? faker.number.int({ min: 60, max: problem.maxScore }) : 
                 status === 'FAILED' ? faker.number.int({ min: 0, max: 59 }) : null,
          attemptNumber: attemptNumber,
          isLatest: isLatest,
        }
      });
      
      submissions.push(submission);
      
      // Create notebook submission if type is NOTEBOOK
      if (submissionType === 'NOTEBOOK') {
        await prisma.notebookSubmission.create({
          data: {
            id: faker.string.uuid(),
            submissionId: submission.id,
            cells: NOTEBOOK_CELLS,
            metadata: {
              kernel: "python3",
              language: "python",
              version: "3.9.0"
            }
          }
        });
      }
      
      // Create file uploads if type is FILE_UPLOAD
      if (submissionType === 'FILE_UPLOAD') {
        const numFiles = faker.number.int({ min: 1, max: 3 });
        for (let i = 0; i < numFiles; i++) {
          await prisma.fileUpload.create({
            data: {
              id: faker.string.uuid(),
              submissionId: submission.id,
              fileName: faker.system.fileName(),
              filePath: `/uploads/${faker.string.uuid()}.${faker.system.fileExt()}`,
              fileSize: faker.number.int({ min: 1024, max: 10485760 }), // 1KB to 10MB
              mimeType: faker.system.mimeType(),
            }
          });
        }
      }
    }
  }
  
  return submissions;
}

export async function createFeedback(submissions: any[], users: any[]) {
  console.log("Creating feedback...");
  
  const instructors = users.slice(0, 5);
  const tas = users.slice(5, 15);
  const graders = [...instructors, ...tas];
  
  for (const submission of submissions) {
    // Create feedback for 30-50% of submissions
    if (faker.datatype.boolean({ probability: 0.4 })) {
      const grader = faker.helpers.arrayElement(graders);
      
      await prisma.feedback.create({
        data: {
          id: faker.string.uuid(),
          submissionId: submission.id,
          graderId: grader.id,
          comments: faker.helpers.arrayElement([
            "Great work! Your solution is efficient and well-commented.",
            "Good approach, but consider edge cases for better robustness.",
            "The logic is correct, but the code could be more readable.",
            "Excellent implementation! You've handled all test cases perfectly.",
            "Good start, but there are some issues with the algorithm complexity.",
            "Nice solution! Consider adding input validation for production code.",
            "Well done! The code is clean and follows best practices.",
            "Good work, but try to optimize the time complexity further."
          ]),
          rubric: {
            correctness: faker.number.int({ min: 70, max: 100 }),
            efficiency: faker.number.int({ min: 60, max: 100 }),
            style: faker.number.int({ min: 70, max: 100 }),
            documentation: faker.number.int({ min: 50, max: 100 })
          },
          scoreDelta: faker.number.int({ min: -10, max: 5 }),
          private: faker.datatype.boolean({ probability: 0.2 }),
        }
      });
    }
  }
}

function generateCodeSolution(language: string): string {
  const solutions = {
    PYTHON: `def twoSum(nums, target):
    hashmap = {}
    for i, num in enumerate(nums):
        complement = target - num
        if complement in hashmap:
            return [hashmap[complement], i]
        hashmap[num] = i
    return []`,
    
    JAVASCRIPT: `function twoSum(nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
    }
    return [];
}`,
    
    JAVA: `public int[] twoSum(int[] nums, int target) {
    Map<Integer, Integer> map = new HashMap<>();
    for (int i = 0; i < nums.length; i++) {
        int complement = target - nums[i];
        if (map.containsKey(complement)) {
            return new int[] { map.get(complement), i };
        }
        map.put(nums[i], i);
    }
    return new int[0];
}`,
    
    CPP: `vector<int> twoSum(vector<int>& nums, int target) {
    unordered_map<int, int> map;
    for (int i = 0; i < nums.size(); i++) {
        int complement = target - nums[i];
        if (map.find(complement) != map.end()) {
            return {map[complement], i};
        }
        map[nums[i]] = i;
    }
    return {};
}`
  };
  
  return solutions[language as keyof typeof solutions] || solutions.PYTHON;
}
