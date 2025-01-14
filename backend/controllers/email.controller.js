export const register = async (req, res) => {
  try {
      const { fullname, email, password } = req.body;
      if (!fullname || !email || !password) return res.status(400).json({message})
  } catch (error) {}
};
