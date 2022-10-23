import moment from 'moment';

const adaptResultsData = (resultsInfo: any, resultsNum: any, setData: any) => {
  const resultsListData = resultsInfo.map((resultInfo: any) => {
    if (resultInfo.kind === 'youtube#video') {
      return {
        kind: resultInfo.kind,
        id: resultInfo.id,
        thumbnail: resultInfo.snippet.thumbnails.medium.url,
        duration: resultInfo.snippet.liveBroadcastContent === 'none' ? moment.utc(moment.duration(resultInfo.contentDetails.duration).asMilliseconds()).format('HH:mm:ss') : 'LIVE',
        title: resultInfo.snippet.title,
        channelName: resultInfo.snippet.channelTitle,
        views: new Intl.NumberFormat(
          'en-US',
          { notation: 'compact' },
        ).format(resultInfo.statistics.viewCount),
        date: moment(resultInfo.snippet.publishedAt).fromNow(),
        description: resultInfo.snippet.description,
      };
    }
    if (resultInfo.kind === 'youtube#channel') {
      return {
        kind: resultInfo.kind,
        id: resultInfo.id,
        thumbnail: resultInfo.snippet.thumbnails.medium.url,
        channelName: resultInfo.snippet.title,
        subs: new Intl.NumberFormat(
          'en-US',
          { notation: 'compact' },
        ).format(resultInfo.statistics.subscriberCount),
        videos: new Intl.NumberFormat(
          'en-US',
          { maximumSignificantDigits: 3 },
        ).format(resultInfo.statistics.videoCount),
        description: resultInfo.snippet.description,
      };
    }
    if (resultInfo.kind === 'youtube#playlist') {
      return {
        kind: resultInfo.kind,
        id: resultInfo.id,
        thumbnail: resultInfo.snippet.thumbnails.medium.url,
        title: resultInfo.snippet.title,
        channelName: resultInfo.snippet.channelTitle,
        videos: new Intl.NumberFormat(
          'en-US',
          { maximumSignificantDigits: 3 },
        ).format(resultInfo.contentDetails.itemCount),
        listItemsCount: new Intl.NumberFormat(
          'en-US',
          { maximumSignificantDigits: 3 },
        ).format(resultInfo.contentDetails.itemCount),
        description: resultInfo.snippet.description,
      };
    }
    return [];
  });

  setData({ secHeaderData: { resultsNum }, resultsListData });
};
export default adaptResultsData;
