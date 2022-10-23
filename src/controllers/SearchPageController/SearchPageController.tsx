import React, { useCallback, useEffect } from 'react';
import SearchPageLayout from '../../components/SearchPageLayout';
import { SearchPageLayoutData } from '../../components/SearchPageLayout/SearchPageLayout';
import { apiKey } from '../../config';
// import mockResults from './mockResults';
import adaptResultsData from './searchResultsDataAdaptor';

declare const gapi:any;

function loadClient() {
  gapi.client.setApiKey(`${apiKey}`);
  return gapi.client.load('https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest');
}

function search(query:string) {
  return gapi.client.youtube.search.list({ q: query, maxResults: 50, part: 'snippet' })
    .then(
      (response: any) => {
        const videosIds = response.result.items.filter((item:any) => item.id.kind === 'youtube#video').map((item: any) => item.id.videoId).join(',');
        const channelsIds = response.result.items.filter((item:any) => item.id.kind === 'youtube#channel').map((item: any) => item.id.channelId).join(',');
        const listsIds = response.result.items.filter((item:any) => item.id.kind === 'youtube#playlist').map((item: any) => item.id.playlistId).join(',');
        const resultsNum = new Intl.NumberFormat(
          'en-IN',
          { maximumSignificantDigits: 3 },
        ).format(response.result.pageInfo.totalResults);
        return {
          videosIds, channelsIds, listsIds, resultsNum,
        };
      },
      (err:any) => { console.error('Execute error', err); },
    );
}

async function getResultsInfo({ videosIds, channelsIds, listsIds }:
{ videosIds: string; channelsIds: string; listsIds: string; }) {
  const videos = gapi.client.youtube.videos.list({ id: videosIds, part: 'snippet,statistics,contentDetails' })
    .then(
      (response: any) => response.result.items ?? [],
      (err:any) => { console.error('Execute error', err); },
    );
  const channels = gapi.client.youtube.channels.list({ id: channelsIds, part: 'snippet,statistics,contentDetails' })
    .then(
      (response: any) => response.result.items ?? [],
      (err:any) => { console.error('Execute error', err); },
    );
  const playlists = gapi.client.youtube.playlists.list({ id: listsIds, part: 'snippet,contentDetails' })
    .then(
      (response: any) => response.result.items ?? [],
      (err:any) => { console.error('Execute error', err); },
    );
  const allResults = await Promise.all([channels, videos, playlists]);
  return allResults.flat();
}

export default function SearchPageController(): JSX.Element {
  const [data, setData] = React.useState<SearchPageLayoutData | null>({
    secHeaderData: { resultsNum: '0' },
    resultsListData: [],
  });

  const searchHandler = useCallback(async (query: string) => {
    setData(null);
    const {
      resultsNum, videosIds, channelsIds, listsIds,
    } = await search(query);
    const resultsInfo = await getResultsInfo({ videosIds, channelsIds, listsIds });
    adaptResultsData(resultsInfo, resultsNum, setData);
  }, []);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://apis.google.com/js/api.js';
    script.async = true;
    document.head.appendChild(script);
    script.onload = () => {
      gapi.load('client', async () => {
        await loadClient();
      });
    };
  }, []);

  return (
    <SearchPageLayout data={data} searchHandler={searchHandler} />
  );
}
