interface Thumbnail {
  url: string;
}

interface ChannelThumbnail {
  url: string;
}

export interface VideoMetadataType {
  type: string;
  title: string;
  videoId: string;
  viewCount: string;
  lengthText: string;
  channelTitle: string;
  channelHandle: string;
  thumbnail?: Thumbnail[];
  publishedTimeText: string;
  channelThumbnail?: ChannelThumbnail[];
}
