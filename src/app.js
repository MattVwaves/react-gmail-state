import Header from "./components/header";
import initialEmails from "./data/emails";
import { useState } from "react";

import "./styles/app.css";

function App() {
  // Use initialEmails for state
  const [emails, setEmails] = useState(initialEmails);
  const [hideRead, setHideRead] = useState(false);

  const toggleRead = (email) => {
    const read = emails.map((storedEmail) => {
      if (storedEmail === email) {
        const emailCopy = { ...email, read: !email.read };
        return emailCopy;
      } else {
        return storedEmail;
      }
    });
    setEmails(read);
  };

  const toggleStarred = (email) => {
    const read = emails.map((storedEmail) => {
      if (storedEmail === email) {
        const emailCopy = { ...email, starred: !email.starred };
        return emailCopy;
      } else {
        return storedEmail;
      }
    });
    setEmails(read);
  };

  const toggleReadList = () => {
    setHideRead(!hideRead);
  };

  const unreadEmails = emails.filter((email) => {
    if (email.read === false) {
      return email;
    }
  });

  const emailsList = emails.map((email) => {
    return (
      <li key={email.id} className={email.read ? "email read" : "email unread"}>
        <div className="select">
          <input
            onChange={() => toggleRead(email)}
            className="select-checkbox"
            type="checkbox"
          />
        </div>
        <div className="star">
          <input
            onChange={() => toggleStarred(email)}
            className="star-checkbox"
            type="checkbox"
          />
        </div>
        <div className="sender">{email.sender}</div>
        <div className="title">{email.title}</div>
      </li>
    );
  });

  const unreadEmailsList = unreadEmails.map((email) => {
    return (
      <li key={email.id} className={email.read ? "email read" : "email unread"}>
        <div className="select">
          <input
            onChange={() => toggleRead(email)}
            className="select-checkbox"
            type="checkbox"
          />
        </div>
        <div className="star">
          <input
            onChange={() => toggleStarred(email)}
            className="star-checkbox"
            type="checkbox"
          />
        </div>
        <div className="sender">{email.sender}</div>
        <div className="title">{email.title}</div>
      </li>
    );
  });

  return (
    <div className="app">
      <Header />
      <nav className="left-menu">
        <ul className="inbox-list">
          <li
            className="item active"
            // onClick={() => {}}
          >
            <span className="label">Inbox</span>
            <span className="count">?</span>
          </li>
          <li
            className="item"
            // onClick={() => {}}
          >
            <span className="label">Starred</span>
            <span className="count">?</span>
          </li>

          <li className="item toggle">
            <label for="hide-read">Hide read</label>
            <input
              id="hide-read"
              type="checkbox"
              // checked={false}
              onChange={() => toggleReadList()}
            />
          </li>
        </ul>
      </nav>
      <main className="emails">{hideRead ? unreadEmailsList : emailsList}</main>
    </div>
  );
}
export default App;
