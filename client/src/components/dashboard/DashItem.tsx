import React from 'react';
import ClassNames from 'classnames';

interface DashProps {
  title: string;
  value: number | string;
  className?: string;
}

const DashItem = ({ title, value, className }: DashProps) => (
  <div className={ClassNames('dash-item', className)}>
    <div>{title}</div>
    <div>{value}</div>
  </div>
);

export default DashItem;
