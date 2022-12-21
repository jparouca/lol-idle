import {useState} from "react";

export function Main() {
  const [goldCount, setGoldCount] = useState(0);
  const [goldPerSecond, setGoldPerSecond] = useState({
    fasterGold: false,
    moreGold: false,
  })
  const handleClick = () => {
  setGoldCount(goldCount + goldRate);
}
  const handleUpgrade = (upgrade: 'moreGold' | 'fasterGold') => {
    switch (upgrade) {
      case 'fasterGold':
        setGoldPerSecond({ ...goldPerSecond, fasterGold: true });
        setGoldCount(goldCount - 10);
        break;
      case 'moreGold':
        setGoldPerSecond({ ...goldPerSecond, moreGold: true });
        setGoldCount(goldCount - 15);
        break;
      default:
        break;
    }
  };
  let goldRate = 1;
  if (goldPerSecond.fasterGold) {
    goldRate *= 2;
  }
  if (goldPerSecond.moreGold) {
    goldRate *= 3;
  }


  return (
    <div className="grid grid-cols-2">
      <div className="">
        <h1 className="text-4xl">Gold: <span className="font-bold">{goldCount}</span></h1>
      </div>

      <div className="grid grid-cols-2">
        <h2>Upgrade!</h2>
        <div>
          {!goldPerSecond.fasterGold && (
            <button onClick={() => handleUpgrade('fasterGold')}>
              Buy: Dagger (300 gold)
            </button>
          )}
          {!goldPerSecond.moreGold && (
            <button onClick={() => handleUpgrade('moreGold')}>
              Buy: Pickaxe (350 gold)
            </button>
          )}
        </div>
      </div>

      <div>
        <button onClick={handleClick} className="text-6x l">Farm</button>
      </div>



    </div>
  )
}