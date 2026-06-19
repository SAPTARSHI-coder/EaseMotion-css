const omegaEngine = require('../services/omegaEngine');
const analyticsService = require('../services/analyticsService');

/**
 * Controller for the /evaluate endpoint.
 */
exports.evaluateFrontend = async (req, res) => {
  try {
    const payload = req.body;

    if (!payload) {
      return res.status(400).json({ error: 'Payload is required for evaluation.' });
    }

    // Process evaluation using the Omega Engine
    const evaluationResults = await omegaEngine.evaluate(payload);

    // Log the event to Analytics Service
    analyticsService.logEvaluation({
      endpoint: '/evaluate',
      modelUsed: evaluationResults.modelUsed,
      score: evaluationResults.score
    });

    res.status(200).json({
      message: 'Evaluation completed successfully.',
      data: evaluationResults
    });
  } catch (error) {
    console.error('Error during evaluation:', error);
    res.status(500).json({ error: 'Internal server error during evaluation.' });
  }
};
