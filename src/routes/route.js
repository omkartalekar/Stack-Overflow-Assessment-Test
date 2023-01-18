import express from "express";

const router = express.Router();

// read question
router.get('/question/:id', readQuestionById);

