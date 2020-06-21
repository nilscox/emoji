import { EmojiType } from './data';

export class Emoji {
  public emoji: string;
  public description: string;
  public category: string;
  public aliases: string[];
  public tags: string[];

  constructor(data: EmojiType) {
    this.emoji = data.emoji;
    this.description = data.description;
    this.category = data.category;
    this.aliases = data.aliases;
    this.tags = data.tags;
  }

  public match(search: RegExp) {
    return search.exec([
      this.emoji,
      this.description,
      ...this.aliases,
      ...this.tags
    ].join('|'));
  }
}
