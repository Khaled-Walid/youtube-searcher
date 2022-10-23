import { ChannelResultCardProps } from '../ChannelResultCard/ChannelResultCard';
import { ListResultCardProps } from '../ListResultCard/ListResultCard';
import { VideoResultCardProps } from '../VideoResultCard/VideoResultCard';
import './styles.scss';

const mockList: (VideoResultCardProps | ChannelResultCardProps | ListResultCardProps)[] = [
  {
    kind: 'youtube#video',
    id: 'cLFJjMokld8',
    thumbnail: 'https://i.ytimg.com/vi/UhjjjqmGAkI/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAHE-EyRiSnPIeW4T-dtLlZ9m1e1Q',
    duration: '22:31',
    title: 'Does this mean I am cursed now?',
    channelName: 'PewDiePie',
    views: '1.2M',
    date: '4 days ago',
    description: "In this video, you'll find some of the best songs from 2010 to 2020. I created this list with influence from different charts, online ...",
  },
  {
    kind: 'youtube#channel',
    id: 'PewDiePie',
    thumbnail: 'https://yt3.ggpht.com/5oUY3tashyxfqsjO5SGhjT4dus8FkN9CsAHwXWISFrdPYii1FudD4ICtLfuCw6-THJsJbgoY=s176-c-k-c0x00ffffff-no-rj',
    channelName: 'PewDiePie',
    subs: '111M',
    videos: '4511',
    description: 'I make videos.',
  },
  {
    kind: 'youtube#playlist',
    id: 'PLz58QJ68R9CTzviQpTb3ZyPFfgaizXxPQ',
    thumbnail: 'https://i.ytimg.com/vi/k3yrofQuP3E/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBQJznsVJt9aJqG2iZcEPQk1BXd1Q',
    listItemsCount: '405',
    title: 'INTERESTING DOCUMENTARIES 2',
    channelName: 'THOADUS',
    description: 'the hunt for eagle 56 Stealth Technology - Invisible And Deadly | Full Documentary',
  },
  {
    kind: 'youtube#video',
    id: 'cLFJjMokld8',
    thumbnail: 'https://i.ytimg.com/vi/UhjjjqmGAkI/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAHE-EyRiSnPIeW4T-dtLlZ9m1e1Q',
    duration: '22:31',
    title: 'Does this mean I am cursed now?',
    channelName: 'PewDiePie',
    views: '1.2M',
    date: '4 days ago',
    description: "In this video, you'll find some of the best songs from 2010 to 2020. I created this list with influence from different charts, online ...",
  },
  {
    kind: 'youtube#channel',
    id: 'PewDiePie',
    thumbnail: 'https://yt3.ggpht.com/5oUY3tashyxfqsjO5SGhjT4dus8FkN9CsAHwXWISFrdPYii1FudD4ICtLfuCw6-THJsJbgoY=s176-c-k-c0x00ffffff-no-rj',
    channelName: 'PewDiePie',
    subs: '111M',
    videos: '4511',
    description: 'I make videos.',
  },
  {
    kind: 'youtube#playlist',
    id: 'PLz58QJ68R9CTzviQpTb3ZyPFfgaizXxPQ',
    thumbnail: 'https://i.ytimg.com/vi/k3yrofQuP3E/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBQJznsVJt9aJqG2iZcEPQk1BXd1Q',
    listItemsCount: '405',
    title: 'INTERESTING DOCUMENTARIES 2',
    channelName: 'THOADUS',
    description: 'the hunt for eagle 56 Stealth Technology - Invisible And Deadly | Full Documentary',
  }];

export default mockList;
