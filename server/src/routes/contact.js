import { Router } from 'express';

const router = Router();

router.get('/', async (req, res) => {
    const contacts = await req.context.models.Contact.find();
    return res.send(contacts);
});

router.get('/:contactId', async (req, res) => {
    const contact = await req.context.models.Contact.findById(
        req.params.contactId,
    );
    return res.send(contact);
});

router.post('/', async (req, res) => {
    let contactPayload = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        address: req.body.address
    }
    if (req.body.imageUrl) contactPayload['imageUrl'] = req.body.imageUrl;

    if (req.body._id && req.body._id.length) {
        let query = { $set: contactPayload };
        const contact = await req.context.models.Contact.updateOne({ _id: req.body._id }, query);
        return res.send(contact);
    } else {
        const contact = await req.context.models.Contact.create(contactPayload);
        return res.send(contact);
    }


});

router.delete('/:contactId', async (req, res) => {
    const contact = await req.context.models.Contact.findById(
        req.params.contactId,
    );

    let result = null;
    if (contact) {
        result = await contact.remove();
    }

    return res.send(result);
});

export default router;

export const insertContact = async (req, res) => {
    const contact = await req.context.models.Contact.create(req.user);
    // return res.send(contact);
    res.redirect("http://localhost:3000?token=" + req.user.token);

};

