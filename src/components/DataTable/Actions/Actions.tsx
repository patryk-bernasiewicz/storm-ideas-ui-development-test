import React, { FC } from 'react';
import { Action } from '../types';

import { ActionsWrapper, ActionButton } from './styled';

interface ActionProps {
  actions: Action[];
  row: any;
}

export const Actions: FC<ActionProps> = ({ actions, row }) => (
  <ActionsWrapper>
    {actions.map(
      ({
        key,
        onClick,
        title,
        icon: IconComponent,
        iconOnly,
        outlined,
        kind,
      }) => (
        <ActionButton
          key={key}
          kind={kind}
          type="button"
          onClick={() => onClick(row)}
          iconOnly={iconOnly}
          outlined={outlined}
        >
          {IconComponent && !iconOnly && title}
          {IconComponent && <IconComponent />}
        </ActionButton>
      )
    )}
  </ActionsWrapper>
);
