
import React, { useState, useEffect } from 'react'

export default () => {
  const [contacts, setContacts] = useState([])
  useEffect(() => {
    fetch('http://localhost:4500/contacts')
      .then(res => res.json())
      .then((data) => {
        setContacts(data)
      })
  }, []);
  return (
    <div>
      <center><h1>Contact List</h1></center>
      {contacts && contacts.length > 0 ?
        <div>
          {contacts.map((contact) => (
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">{contact.name}</h5>
                <h6 class="card-subtitle mb-2 text-muted">{contact.email}</h6>
                <p class="card-text">{contact.token}</p>
              </div>
            </div>
          ))}
        </div> : <div>no data</div>}
    </div>
  )
};

// export default Contacts