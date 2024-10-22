const mongoose = require('mongoose');

const habitSchema = new mongoose.Schema({
    userId : {
        type : String,
        require : true
    },
    name: {
        type: String,
        required: true, // Name is required
        trim: true, // Remove leading/trailing whitespace
    },
    description: {
        type: String, // Optional description
        trim: true
    },
    weekdays: {
        monday: { type: Boolean, default: false },
        tuesday: { type: Boolean, default: false },
        wednesday: { type: Boolean, default: false },
        thursday: { type: Boolean, default: false },
        friday: { type: Boolean, default: false },
        saturday: { type: Boolean, default: false },
        sunday: { type: Boolean, default: false },
    },
    frequency: {
        type: Number,
        default: 1, // Default is weekly
        validate: {
            validator: function (value) {
                return value >= 1; // Must be at least 1 (weekly) or higher (every N weeks)
            },
            message: 'Frequency must be at least 1 (weekly) or higher'
        }
    },
    startDate: {
        type: Date,
        default: Date.now, // Default to current date
        required: true, // Start date is required
    },
    reminderTime: {
        type: String, // Optional reminder time in "HH:mm" format (e.g., "08:00")
        validate: {
            validator: function (value) {
                return /^([0-1]\d|2[0-3]):([0-5]\d)$/.test(value); // Validate "HH:mm" format
            },
            message: 'Reminder time must be in "HH:mm" format'
        },
    },
    completedDates: {
        type: [Date], // Array to store dates when the habit was marked as completed
        default: [], // Empty array as default
    },
    createdAt: {
        type: Date,
        default: Date.now, // Automatically set to current date on creation
    },
    updatedAt: {
        type: Date,
        default: Date.now, // Automatically set to current date on updates
    }
});

// Middleware to update 'updatedAt' before saving
habitSchema.pre('save', function (next) {
    this.updatedAt = Date.now();
    next();
});

const Habit = mongoose.model('Habit', habitSchema);

module.exports = Habit;
