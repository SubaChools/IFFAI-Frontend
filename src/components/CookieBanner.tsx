import React, { useState, useEffect } from 'react';
import './CookieConsent.css';

type CookieConsentLevel = 'all' | 'necessary' | 'custom';

const CookieConsent: React.FC = () => {
  const [visible, setVisible] = useState(true);
  const [customizeVisible, setCustomizeVisible] = useState(false);

  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    const savedConsent = localStorage.getItem('cookieConsent');
    if (savedConsent) {
      setVisible(false);
      document.body.style.overflow = 'auto';
    } else {
      setVisible(true);
      document.body.style.overflow = 'hidden';
    }
  }, []);

  const handleAccept = (level: CookieConsentLevel) => {
    if (level === 'all') {
      localStorage.setItem('cookieConsent', JSON.stringify({ level, analytics: true, marketing: true }));
    } else if (level === 'necessary') {
      localStorage.setItem('cookieConsent', JSON.stringify({ level, analytics: false, marketing: false }));
    }
    setVisible(false);
    document.body.style.overflow = 'auto';
  };

  const handleSavePreferences = () => {
    localStorage.setItem(
      'cookieConsent',
      JSON.stringify({ level: 'custom', analytics, marketing })
    );
    setCustomizeVisible(false);
    setVisible(false);
    document.body.style.overflow = 'auto';
  };

  if (!visible) return null;

  return (
    <div className="cookie-backdrop">
      {!customizeVisible ? (
        <div className="cookie-modal">
          <div className="cookie-icon">🍪</div>
          <h2 className="cookie-title">Privacy notice</h2>
          <p className="cookie-text">
            By using this site, you agree that we can store certain types of cookies on your device and disclose
            information in accordance with our{' '}
            <a href="/cookie-policy" target="_blank" rel="noopener noreferrer">
              Cookie Policy
            </a>.
          </p>
          <div className="cookie-buttons">
            <button className="cookie-btn primary" onClick={() => handleAccept('all')}>
              Accept all cookies
            </button>
            <button className="cookie-btn secondary" onClick={() => handleAccept('necessary')}>
              Accept only necessary cookies
            </button>
            <button className="cookie-btn neutral" onClick={() => setCustomizeVisible(true)}>
              Customize settings
            </button>
          </div>
        </div>
      ) : (
        <div className="cookie-modal">
          <div className="cookie-icon">⚙️</div>
          <h2 className="cookie-title">Customize Your Preferences</h2>
          <div className="cookie-text" style={{ textAlign: 'left' }}>
            <label className="cookie-toggle">
              <input type="checkbox" checked disabled />
              <span>Necessary cookies (always active)</span>
            </label>
            <label className="cookie-toggle">
              <input
                type="checkbox"
                checked={analytics}
                onChange={(e) => setAnalytics(e.target.checked)}
              />
              <span>Analytics cookies</span>
            </label>
            <label className="cookie-toggle">
              <input
                type="checkbox"
                checked={marketing}
                onChange={(e) => setMarketing(e.target.checked)}
              />
              <span>Marketing cookies</span>
            </label>
          </div>
          <div className="cookie-buttons">
            <button className="cookie-btn primary" onClick={handleSavePreferences}>
              Save preferences
            </button>
            <button className="cookie-btn neutral" onClick={() => setCustomizeVisible(false)}>
              Back
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CookieConsent;
