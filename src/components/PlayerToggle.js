function PlayerToggle({ player, setPlayer }) {
  var buttonText;

  if (player === "spotify") {
    buttonText = "Youtube?";
  } else {
    buttonText = "Spotify?";
  }

  function handleButton() {
    if (player === "spotify") {
      setPlayer("youtube");
    } else {
      setPlayer("spotify");
    }
  }

  return (
    <>
      <button className="border-4 border-green-900 bg-green-700 shadow-xl text-white rounded-full p-2 hover:bg-green-500" onClick={handleButton}>
        {buttonText}
      </button>
    </>
  );
}

export default PlayerToggle;
