import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";
import { createFakeContact } from "../utils/createFakeContact.js";

export const addOneContact = async () => {
    const currentContacts = await readContacts();
    const newContacts = createFakeContact();

    const updatedContacts = [...currentContacts, ...newContacts];
    await writeContacts(updatedContacts);
};

addOneContact();
