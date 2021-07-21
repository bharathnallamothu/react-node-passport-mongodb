import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema({
    email: {
        type: String,
        required: false,
    },
    name: {
        type: String,
        required: false,
    },
    token: {
        type: String,
        required: false,
    }

});

const Contact = mongoose.model('Contact', contactSchema);

export default Contact;
