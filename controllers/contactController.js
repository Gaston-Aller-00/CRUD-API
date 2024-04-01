//@desc all concatacs
//@route get /api/contacts
//@acces public

const getContacts = (req, res) => {
  res.status(200).json({ message: "Get all contacts" });
};

//@desc create  new contact
//@route get /api/contacts
//@acces public

const createContact = (req, res) => {
  const { name, email, body } = req.body;
  if (!name || !email || !body) {
    res.status(400);

    throw new Error("Require name,email and phone");
  }
  console.log("The reques body is: ", req.body);
  res.status(201).json({ message: "Create Contact" });
};
//@desc create  new contact
//@route get /api/contacts/:id
//@acces public

const getContact = (req, res) => {
  res.status(200).json({ message: `Get contact for ${req.params.id}` });
};
//@desc update contact
//@route PUT /api/contacts/:id
//@acces public

const updateContact = (req, res) => {
  res.status(200).json({ message: `Update contact for ${req.params.id}` });
};
//@desc delete contact
//@route DELETE /api/contacts/:id
//@acces public

const deleteContact = (req, res) => {
  res.status(200).json({ message: `Delete contact for  ${req.params.id}` });
};

module.exports = {
  getContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
};
