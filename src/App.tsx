/**
 * Solana Spin - Main App Component
 *
 * A read-only blockchain experiment that generates random Solana addresses
 * and checks their public balances for educational and entertainment purposes.
 *
 * Supports both web and Telegram Mini App platforms.
 *
 * IMPORTANT CONSTRAINTS:
 * - Read-only blockchain access only
 * - NO wallet creation
 * - NO private key logic
 * - NO seed phrases
 * - NO transactions or signing
 */

import { SlotMachine } from './components/SlotMachine';
import { Disclaimer } from './components/Disclaimer';
import { useTelegram } from './hooks/useTelegram';
import './styles/App.css';

export default function App() {
  const { isTelegram } = useTelegram();

  return (
    <div className={`app ${isTelegram ? 'telegram-app' : ''}`}>
      {/* Header - hidden in Telegram (Telegram has its own title bar) */}
      {!isTelegram && (
        <header className="app-header">
          <h1>solanaspin.yachts</h1>
          <p className="subtitle">Blockchain Experiment</p>
        </header>
      )}

      <main>
        <SlotMachine />
      </main>

      <Disclaimer />

      {/* Footer - hidden in Telegram for cleaner interface */}
      {!isTelegram && (
        <footer className="app-footer">
          <p>
            Built for education & entertainment. Powered by{' '}
            <a
              href="https://solana.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Solana
            </a>{' '}
            public RPC
          </p>
          <div className="footer-links">
            <a
              href="https://x.com/SolanaSpin1"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="Follow on X (Twitter)"
            >
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <span id="goatcounter-count" className="footer-counter" aria-label="Visit counter"></span>
          </div>
        </footer>
      )}
    </div>
  );
}
