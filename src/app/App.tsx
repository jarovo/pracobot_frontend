"use client"

import { useEffect, useState } from "react";
import axios from "axios";
import { config } from "./config"

type Contact = {
  id: number;
  name: string;
  email: string;
};

function App() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [form, setForm] = useState<Omit<Contact, "id">>({ name: "", email: "" });

  useEffect(() => {
    axios.get<Contact[]>(config.api.contacts).then(res => setContacts(res.data));
  }, []);

  const addContact = async () => {
    const res = await axios.post<Contact>(config.api.contacts, form);
    setContacts([...contacts, res.data]);
    setForm({ name: "", email: "" });
  };

  const deleteContact = async (id: number) => {
    await axios.delete(`${config.api.contacts}/${id}`);
    setContacts(contacts.filter(c => c.id !== id));
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-xl font-bold mb-4">Contacts</h1>

      <div className="space-y-2 mb-4">
        <input
          className="border px-2 py-1 w-full"
          placeholder="Name"
          value={form.name}
          onChange={e => setForm({ ...form, name: e.target.value })}
        />
        <input
          className="border px-2 py-1 w-full"
          placeholder="Email"
          value={form.email}
          onChange={e => setForm({ ...form, email: e.target.value })}
        />
        <button className="bg-blue-500 text-white px-4 py-1 rounded" onClick={addContact}>
          Add Contact
        </button>
      </div>

      <ul className="space-y-2">
        {contacts.map(c => (
          <li key={c.id} className="border p-2 flex justify-between">
            <div>
              <div>{c.name}</div>
              <div className="text-sm text-gray-500">{c.email}</div>
            </div>
            <button onClick={() => deleteContact(c.id)} className="text-red-500">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
