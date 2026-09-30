import express from 'express';
import { getDashboardStats, getUsers } from '../controllers/adminController.js';
import { getLLMConfig, saveLLMConfig, testLLMConnection } from '../controllers/llmConfigController.js';

const router = express.Router();

// Health Check Endpoint
router.get('/health', (req, res) => {
  res.status(200).json({
    status: 'online',
    timestamp: new Date().toISOString(),
    service: 'Astra Admin Backend API'
  });
});

// Admin Metrics & User Endpoints
router.get('/dashboard/stats', getDashboardStats);
router.get('/users', getUsers);

// LLM Provider Configuration Endpoints
router.get('/config/llm', getLLMConfig);
router.post('/config/llm', saveLLMConfig);
router.post('/config/llm/test', testLLMConnection);

export default router;

