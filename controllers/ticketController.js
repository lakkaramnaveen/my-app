const Ticket = require('../models/ticket');

exports.createTicket = async (req, res) => {
  const { title, description, assignedTo } = req.body;
  try {
    const ticket = new Ticket({ title, description, assignedTo, status: 'open' });
    await ticket.save();
    res.status(201).json(ticket);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateTicket = async (req, res) => {
  const { id } = req.params;
  const updates = req.body;
  try {
    const ticket = await Ticket.findByIdAndUpdate(id, updates, { new: true });
    res.status(200).json(ticket);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteTicket = async (req, res) => {
  const { id } = req.params;
  try {
    await Ticket.findByIdAndDelete(id);
    res.status(200).json({ message: 'Ticket deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getTicket = async (req, res) => {
  const { id } = req.params;
  try {
    const ticket = await Ticket.findById(id);
    res.status(200).json(ticket);
  } catch (error) {
    res.status(500).json({ error: "Not found" });
    console.log("Not found")
  }
};

exports.getAllTickets = async (req, res) => {
  try {
    const tickets = await Ticket.find();
    res.status(200).json(tickets);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
