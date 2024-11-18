import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";
import { createFakeContact } from "../utils/createFakeContact.js";



const generateContacts = async (number) => {
    const currentContacts = await readContacts();
    const newContacts = (Array(number).fill(0).map(createFakeContact));
    const updatedContacts = [...currentContacts, ...newContacts];
    await writeContacts(updatedContacts);
};

generateContacts(5);
