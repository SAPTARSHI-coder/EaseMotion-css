/**
 * Analytics Service
 * Tracks evaluation metrics for the EaseMotion Omega Platform.
 */
class AnalyticsService {
  constructor() {
    this.logs = [];
  }

  /**
   * Logs an evaluation request and its outcome.
   * @param {Object} data Analytics data to log.
   */
  logEvaluation(data) {
    const entry = {
      timestamp: new Date().toISOString(),
      ...data
    };
    this.logs.push(entry);
    console.log('[AnalyticsService] Logged evaluation:', entry);
  }

  /**
   * Retrieves all logs (mock functionality).
   * @returns {Array} List of analytics logs.
   */
  getLogs() {
    return this.logs;
  }
}

module.exports = new AnalyticsService();
