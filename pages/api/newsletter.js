// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
function handler(req, res) {
  // res.status(200).json({ name: 'John Doe' })
  if (req.method === "POST") {
    const userEmail = req.body.email;
    if (!userEmail || !userEmail.includes("@")) {
      res.status(422).json({ message: "Invalid email address" });
    }

    console.log(userEmail);
    res.status(201).json({ message: "Email saved" });
  }
}
export default handler;
