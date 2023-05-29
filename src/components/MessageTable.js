import React, { useState } from 'react';

function MessageTable() {
  const [message, setMessage] = useState('');
  const [messageVisible, setMessageVisible] = useState(false);

  function closeMessage() {
    document.getElementById('messageTable').style.display = 'none';
  }

  return (
    <div id="messageTable" style={{ display: messageVisible ? 'table' : 'none' }}>
      <table>
        <tr>
          <td className="error" id='message'>{message}</td>
          <td>
            <button onClick={closeMessage}>OK</button>
          </td>
        </tr>
      </table>
    </div>
  );
}

export default MessageTable;
