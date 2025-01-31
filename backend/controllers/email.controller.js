export const createEmail = async (req, res) => {
  try {
    const userId = req.id;

    const { to, subject, message } = req.body;

    if (!to || !subject || !message)
      return res
        .status(400)
        .json({ message: "All fields are required", success: false });

    const email = await Email.create({
      to,
      subject,
      message,
      userId
    });
    return res.status(201).json({ message: "Email sent successfully", success: true });
  } catch (error) {
    console.log(error);
  }
};
