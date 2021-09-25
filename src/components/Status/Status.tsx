import React, { FC } from 'react';

import { StatusColor, StatusValue } from 'utils/types';
import { StyledStatus } from './styled';

const STATUS_COLORS = {
  [StatusValue.Past]: StatusColor.Gray,
  [StatusValue.Live]: StatusColor.Green,
  [StatusValue.Draft]: StatusColor.Blue,
  [StatusValue.Scheduled]: StatusColor.Blue,
};

interface StatusProps {
  value: StatusValue;
}

const Status: FC<StatusProps> = ({ value }) => {
  const color = STATUS_COLORS[value];
  return <StyledStatus color={color}>{value}</StyledStatus>;
};

export default Status;
