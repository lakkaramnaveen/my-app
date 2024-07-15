const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  status: { type: String, enum: ['open', 'in progress', 'closed'], default: 'open' }
}, { timestamps: true });

module.exports = mongoose.model('Ticket', ticketSchema);
