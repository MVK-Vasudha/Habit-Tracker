const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true, // Trim leading/trailing whitespace
    required: false, // Optional field (depends on your preference)
  },
  email: {
    type: String,
    required: true, // Email is required to get back to the user
    trim: true, 
    lowercase: true, // Convert to lowercase
    validate: {
      validator: function(value) {
        return /^\S+@\S+\.\S+$/.test(value); // Basic email format validation
      },
      message: 'Please enter a valid email address'
    }
  },
  subject: {
    type: String,
    trim: true, // Optional subject line
    required: false // Can be optional or required depending on use case
  },
  message: {
    type: String,
    required: true, // The message or feedback is required
    trim: true, // Remove leading/trailing whitespace
    minlength: [10, 'Message must be at least 10 characters long'] // Minimum length validation
  },
  status: {
    type: String,
    enum: ['open', 'pending', 'closed'], // Status of the inquiry
    default: 'open', // Default status is 'open'
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now, // Automatically set the current date
  },
  updatedAt: {
    type: Date,
    default: Date.now, // Automatically set to current date, updated when the status changes
  }
});

// Middleware to update 'updatedAt' before saving
contactSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;
