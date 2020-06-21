import React, { useState } from 'react';
import escapeStringRegexp from 'escape-string-regexp';

import { Emoji } from './Emoji';
import EmojiList from './EmojiList';
import emojis from './data';

const useEmojis = (search: string): Emoji[] => {
  let regexp: RegExp;

  try {
    regexp = new RegExp(search, 'i')
  } catch {
    regexp = new RegExp(escapeStringRegexp(search), 'i');
  }

  if (!search)
    return emojis;

  return emojis.filter(emoji => emoji.match(regexp));
};

const App: React.FC = () => {
  const [search, setSearch] = useState('');
  const emojis = useEmojis(search);

  return (
    <div className="container">

      <input
        className="form-control my-5"
        placeholder="Search for emojis"
        onChange={(e) => setSearch(e.target.value)}
      />

      <EmojiList emojis={emojis} />

    </div>
  );
};

export default App;
