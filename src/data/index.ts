import { Emoji } from '../Emoji';

// https://github.com/github/gemoji/blob/master/db/emoji.json
import emojisData from './emoji.json';

export type EmojiType = {
  emoji: string;
  description: string;
  category: string;
  aliases: string[];
  tags: string[];
  unicode_version: string;
  ios_version: string;
};

export default emojisData.map(data => new Emoji(data));
