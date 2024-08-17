import React, { useEffect, useState } from 'react';

// Función para decodificar Base64
const base64Decode = (base64) => {
  const binaryString = window.atob(base64);
  const bytes = new Uint8Array(binaryString.length);
  for (let i = 0; i < binaryString.length; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return new TextDecoder().decode(bytes);
};

const Podcast = () => {
  const [feedItems, setFeedItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRSSFeed = async () => {
      try {
        const response = await fetch('https://api.allorigins.win/get?url=' + encodeURIComponent('https://anchor.fm/s/f48a84ec/podcast/rss'));
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        const decodedXML = base64Decode(data.contents.split(',')[1]);

        const parser = new DOMParser();
        const xml = parser.parseFromString(decodedXML, 'text/xml');

        // Verifica si el XML se está parseando correctamente
        console.log(xml);

        const items = Array.from(xml.querySelectorAll('item')).map(item => ({
          title: item.querySelector('title')?.textContent || 'No Title',
          description: item.querySelector('description')?.textContent || 'No Description',
          duration: item.querySelector('itunes\\:duration')?.textContent || 'Unknown',
          image: xml.querySelector('image > url')?.textContent,
          audioUrl: item.querySelector('enclosure')?.getAttribute('url'),
          link: item.querySelector('link')?.textContent || '#'
        }));

        setFeedItems(items);
      } catch (error) {
        console.error('Error fetching RSS feed:', error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchRSSFeed();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      {feedItems.length === 0 ? (
        <p>No items found.</p>
      ) : (
        feedItems.map((item, index) => (
          <div key={index}>
            {item.image && <img width="100" src={item.image} alt="Feed image" />}
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <p>Duración: {item.duration}</p>
            {item.audioUrl && (
              <audio controls>
                <source src={item.audioUrl} type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            )}
            <a href={item.link} target="_blank" rel="noopener noreferrer">Escuchar</a>
          </div>
        ))
      )}
    </div>
  );
};

export default Podcast;
