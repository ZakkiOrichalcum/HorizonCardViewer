import React from "react";
import Card from "./Card/card";

export default class Grid extends React.Component {
  render() {
    const testData = {
      Name: "Follower of the Flame",
      Cost: "4",
      Text:
        "Arrive >> Pay any amount of charges. Create X XF/X Elemental tokens where X is a third of the amount of charges paid, rounded down to the nearest multiple of 3.",
      Attack: "1",
      Defense: "2",
      "Damage Type": "Fire",
      Type: ["Unit"],
      Subtype: ["Elemental", "Support"],
      "Preconstructed Sets": "47",
      CardSets: ["recSBbwvEiUvHGKKs"],
      "Attribute Requirement": "P",
      Complete: "true",
      "[Temp] In Starter Deck": ["Penance"],
      id: "receAegnJ1XyguHwA"
    };

    return (
      <div className="Grid">
        <div className="making-card">
          <Card data={testData} />
        </div>
        <div className="temp-image">
          <img src="https://gitlab.com/HorizonCardGame/HorizonCG-Art/raw/master/Art/Card%20Comps/189%20-%20Gold%20Goliath-01.png" />
        </div>
      </div>
    );
  }
}
