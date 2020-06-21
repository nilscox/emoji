import React, { useState, useEffect } from 'react';

import { Emoji } from './Emoji';

type CopiedProps = {
  x: number;
  y: number;
};

const Copied: React.FC<CopiedProps> = ({ x, y, children }) => {
  const [styles, setStyles] = useState({ top: y - 28, left: x - 55, opacity: 1 });

  useEffect(() => {
    setStyles({ top: styles.top - 20, left: styles.left, opacity: 0 });
  }, []);

  return <div style={styles} className="copied">{children}</div>;
};

type EmojiComponentProps = {
  emoji: Emoji;
};

const EmojiComponent: React.FC<EmojiComponentProps> = ({ emoji }) => {
  const [copied, setCopied] = useState<CopiedProps>();

  const handleClick = (e: React.MouseEvent) => {
    navigator.clipboard.writeText(emoji.emoji);
    setCopied({ x: e.pageX, y: e.pageY });
  };

  useEffect(() => {
    if (copied) {
      const timeout = setTimeout(() => setCopied(undefined), 1200);
      return () => clearTimeout(timeout);
    }
  }, [copied]);

  return (
    <>
      <div className="emoji text-center mx-2" onClick={handleClick}>
        <div className="emoji-text">
          {emoji.emoji}
        </div>
        <div className="emoji-description font-weight-bold">
          {emoji.description}
        </div>
      </div>
      {copied && (
        <Copied {...copied}>
          <span style={{ fontFamily: 'Noto Color Emoji' }}>{emoji.emoji}</span>
          copied!
        </Copied>
      )}
    </>
  );
};

export default EmojiComponent;
