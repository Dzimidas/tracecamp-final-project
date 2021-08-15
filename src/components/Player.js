function Player({ player }) {
  return (
    <>
      {player === "spotify" && (
        <iframe
          title="Spotify player"
          src="https://open.spotify.com/embed/playlist/0vvXsWCC9xrXsKd4FyS8kM"
          width="352"
          height="198"
          frameBorder="0"
          allowtransparency="true"
          allow="encrypted-media"
        ></iframe>
      )}
      {player === "youtube" && (
        <iframe
          width="352"
          height="198"
          src="https://www.youtube.com/embed/5qap5aO4i9A?controls=0"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      )}
    </>
  );
}

export default Player;
