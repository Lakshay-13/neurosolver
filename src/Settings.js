import React, { useState } from 'react';

function Settings({ toggleTheme, changeAccentColor }) {
  const [showSettings, setShowSettings] = useState(false);

  return (
    <div className="settings-cog">
      <button onClick={() => setShowSettings(!showSettings)}>
        {/* Here you would use an actual cog icon */}
        ⚙️
      </button>
      {showSettings && (
        <div className="settings-panel">
          <button onClick={toggleTheme}>Toggle Dark Mode</button>
          <input
            type="color"
            onChange={(e) => changeAccentColor(e.target.value)}
            title="Choose your accent color"
          />
        </div>
      )}
    </div>
  );
}

export default Settings;
