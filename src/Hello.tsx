import React, { FC } from 'react';
import './Hello.pcss';

import ReactLogo from './assets/svg/react-logo.svg?react';

type Props = {};

export const Hello: FC<Props> = ({ }) => {
  return (
    <div className="Hello">
      <h1>将SVG作为React组件使用</h1>
      <div className="logo-container">
        <div>
          <ReactLogo className="logo" />
          <div className="logo-name">React Logo</div>
        </div>
      </div>
    </div>
  );
};
