import React from 'react';

import { Emoji } from './Emoji';
import EmojiComponent from './EmojiComponent';

type EmojiListProps = {
  emojis: Emoji[];
};

const EmojiList: React.FC<EmojiListProps> = ({ emojis }) => {
  return (
    <div className="emoji-list d-flex flex-wrap justify-content-between">
      {emojis.map(emoji => (
        <EmojiComponent key={emoji.emoji} emoji={emoji} />
      ))}
    </div>
  );
};

export default EmojiList;
