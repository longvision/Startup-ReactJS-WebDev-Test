import React from 'react';

import { Image, Frame } from './styles';

export default function Avatar({ repository }) {
  return (
    <Frame>
      <Image src={repository.avatar_url} alt="avatar" />
    </Frame>
  );
}
