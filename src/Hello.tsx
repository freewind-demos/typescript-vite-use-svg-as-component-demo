import React, { FC } from 'react';
import './Hello.pcss';

// Import SVGs as React components
import ReactLogo from './assets/svg/react-logo.svg?react';
import ViteLogo from './assets/svg/vite-logo.svg?react';

// Import SVGs as URLs (for comparison)
import reactLogoUrl from './assets/svg/react-logo.svg';
import viteLogoUrl from './assets/svg/vite-logo.svg';

type Props = {};

export const Hello: FC<Props> = ({ }) => {
  return (
    <div className={'Hello'}>
      <h1>Using SVGs as React Components in Vite</h1>

      <div className="demo-section">
        <h2>Method 1: Using SVGs as React Components</h2>
        <div className="logo-container">
          <div>
            <h3>React Logo Component</h3>
            <ReactLogo className="logo" />
          </div>
          <div>
            <h3>Vite Logo Component</h3>
            <ViteLogo className="logo" />
          </div>
        </div>
        <p>These SVGs are imported as React components using the ?react query suffix.</p>
        <pre>{`import ReactLogo from './assets/svg/react-logo.svg?react';`}</pre>
        <p>Benefits of this approach:</p>
        <ul>
          <li>SVGs are treated as React components</li>
          <li>Can pass props directly to the SVG component</li>
          <li>Can apply CSS to specific parts of the SVG</li>
          <li>Better TypeScript support with proper typing</li>
        </ul>
      </div>

      <div className="demo-section">
        <h2>Method 2: Using SVGs as URLs (For Comparison)</h2>
        <div className="logo-container">
          <div>
            <h3>React Logo URL</h3>
            <img src={reactLogoUrl} alt="React Logo" className="logo" />
          </div>
          <div>
            <h3>Vite Logo URL</h3>
            <img src={viteLogoUrl} alt="Vite Logo" className="logo" />
          </div>
        </div>
        <p>These SVGs are imported as URLs using the default import.</p>
        <pre>{`import reactLogoUrl from './assets/svg/react-logo.svg';`}</pre>
      </div>
    </div>
  );
};
