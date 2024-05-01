import React from 'react';
import SideNav from '../Side';

const MainView = (prop: any) => {
  console.log(prop);

  const { children } = prop;
  return (
    <div className="main-wrapper">
      <SideNav/>
      <div>{children}</div>
    </div>
  );
};

export default MainView;
