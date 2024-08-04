module.exports = class HealthController {
  async getHealth(req, res) {
    res.json({success: true});
  }
};

