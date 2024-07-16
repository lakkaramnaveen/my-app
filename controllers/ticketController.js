// Import the Ticket model
const Ticket = require('../models/ticket');

// Controller function to create a new ticket
exports.createTicket = async (req, res) => {
  const { title, description, assignedTo } = req.body;
  try {
    // Create a new Ticket instance with the provided data and default status 'open'
    const ticket = new Ticket({ title, description, assignedTo, status: 'open' });
    // Save the ticket to the database
    await ticket.save();
    // Respond with the created ticket
    res.status(201).json(ticket);
  } catch (error) {
    // Handle errors by responding with a 500 status code and the error message
    res.status(500).json({ error: error.message });
  }
};

// Controller function to update an existing ticket
exports.updateTicket = async (req, res) => {
  const { id } = req.params;
  const updates = req.body;
  try {
    // Find the ticket by ID and update it with the provided data, returning the updated ticket
    const ticket = await Ticket.findByIdAndUpdate(id, updates, { new: true });
    // Respond with the updated ticket
    res.status(200).json(ticket);
  } catch (error) {
    // Handle errors by responding with a 500 status code and the error message
    res.status(500).json({ error: error.message });
  }
};

// Controller function to delete a ticket
exports.deleteTicket = async (req, res) => {
  const { id } = req.params;
  try {
    // Find the ticket by ID and delete it from the database
    await Ticket.findByIdAndDelete(id);
    // Respond with a message indicating the ticket was deleted
    res.status(200).json({ message: 'Ticket deleted' });
  } catch (error) {
    // Handle errors by responding with a 500 status code and the error message
    res.status(500).json({ error: error.message });
  }
};

// Controller function to get a single ticket by ID
exports.getTicket = async (req, res) => {
  const { id } = req.params;
  try {
    // Find the ticket by ID
    const ticket = await Ticket.findById(id);
    // Respond with the found ticket
    res.status(200).json(ticket);
  } catch (error) {
    // Handle errors by responding with a 500 status code and an error message
    res.status(500).json({ error: "Not found" });
    console.log("Not found")
  }
};

// Controller function to get all tickets
exports.getAllTickets = async (req, res) => {
  try {
    // Retrieve all tickets from the database
    const tickets = await Ticket.find();
    // Respond with the list of all tickets
    res.status(200).json(tickets);
  } catch (error) {
    // Handle errors by responding with a 500 status code and the error message
    res.status(500).json({ error: error.message });
  }
};
