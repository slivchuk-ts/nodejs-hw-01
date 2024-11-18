import { writeContacts } from "../utils/writeContacts.js";
import { readContacts } from "../utils/readContacts.js";

export const removeLastContact = async () => {
    const contacts = await readContacts();
    if(contacts.length > 0){
        contacts.pop;
        await writeContacts(contacts);
    }
    else {
        console.log('No contacts to remuve');
    }
 };

removeLastContact();
