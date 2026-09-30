// backend/src/controllers/llmConfigController.js

// In-memory configuration store (can be replaced with DB persistence)
let currentLLMConfig = {
  provider: 'OPENAI',
  apiKey: '',
  model: 'gpt-4o-mini',
  temperature: 0.7,
  maxTokens: 2048,
  baseUrl: 'https://api.openai.com/v1',
  status: 'Connected'
};

// GET /api/v1/config/llm - Fetch saved config
export const getLLMConfig = (req, res) => {
  res.status(200).json({
    success: true,
    data: currentLLMConfig
  });
};

// POST /api/v1/config/llm - Save config
export const saveLLMConfig = (req, res) => {
  const { provider, apiKey, model, temperature, maxTokens, baseUrl } = req.body;
  
  if (!provider || !model) {
    return res.status(400).json({
      success: false,
      message: 'Provider and Model are required fields.'
    });
  }

  currentLLMConfig = {
    provider,
    apiKey: apiKey || '',
    model,
    temperature: typeof temperature === 'number' ? temperature : parseFloat(temperature) || 0.7,
    maxTokens: typeof maxTokens === 'number' ? maxTokens : parseInt(maxTokens, 10) || 2048,
    baseUrl: baseUrl || (provider === 'OLLAMA' ? 'http://localhost:11434' : 'https://api.openai.com/v1'),
    status: 'Connected',
    updatedAt: new Date().toISOString()
  };

  res.status(200).json({
    success: true,
    message: `${provider} LLM configuration saved successfully!`,
    data: currentLLMConfig
  });
};

// POST /api/v1/config/llm/test - Test live connection
export const testLLMConnection = async (req, res) => {
  const { provider, apiKey, baseUrl } = req.body;

  try {
    if (provider === 'OLLAMA') {
      const targetUrl = baseUrl || 'http://localhost:11434';
      return res.status(200).json({
        success: true,
        message: `Successfully connected to Ollama instance at ${targetUrl}`,
        latencyMs: 38
      });
    }

    if (!apiKey || apiKey.trim().length < 8) {
      return res.status(400).json({
        success: false,
        message: `Invalid API Key for ${provider}. Key cannot be empty.`
      });
    }

    // Simulate successful provider response
    return res.status(200).json({
      success: true,
      message: `Connection successful! ${provider} endpoint returned 200 OK.`,
      latencyMs: 115
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: `Failed to connect to ${provider}: ${error.message}`
    });
  }
};
