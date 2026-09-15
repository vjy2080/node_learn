const validateUser = (req, res, next) => {
  const { name, email } = req.body;

  const isValidName = (name) => {
    return typeof name === "string" && name.trim().length > 0;
  };
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  if (!isValidName(name)) {
    return res.status(400).json({
      message: "Valid name is required",
    });
  }

  if (!isValidEmail(email)) {
    return res.status(400).json({
      message: "Valid email is required",
    });
  }

  next();
};

module.exports = validateUser;