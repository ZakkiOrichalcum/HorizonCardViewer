import React from "react";

export default class Card extends React.Component {
  constructor(props) {
    super();
    props.data = {
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
    this.props = props;
  }

  render() {
    const data = this.props.data;
    return (
      <div className="card">
        <div className="image">
          <img
            alt=""
            src="https://gitlab.com/HorizonCardGame/HorizonCG-Art/raw/master/Art/Table%20Cards/1ED%20-%20Conjurers%20assistant-01.png"
          />
        </div>
        <div className="frame">
          <img
            alt=""
            src="https://gitlab.com/HorizonCardGame/HorizonCG-Art/raw/master/Art/Card%20Components/CardFrame-01.png"
          />
        </div>
        <div className="topLayer">
          <TopSection cost={data.Cost} name={data.Name} />
          <AttributeSection />
          <AtkDefSection
            atk={data.Attack}
            def={data.Defense}
            damageElement={data["Damage Type"]}
          />
          <MiddleSection />
          <BottomSection />
        </div>
      </div>
    );
  }
}

function AttributeSection() {
  return <div className="attributesSection" />;
}

function AtkDefSection(props) {
  return (
    <div className="atkDefSection">
      <AtkDefSquare
        className="atkSquare"
        number={props.atk}
        symbol={props.damageElement}
      />
      <AtkDefSection
        className="defSquare"
        number={props.def}
        symbol="Defense"
      />
    </div>
  );
}

function AtkDefSquare(props) {
  return (
    <div className="atkDefSquare">
      <div className="symbol" />
      <span>{props.number}</span>
    </div>
  );
}

function TopSection(props) {
  return (
    <div className="topSection avarice">
      <div className="namebar">
        <div className="name">
          <span>{props.name}</span>
        </div>
      </div>
      <div className="costCircle">
        <div className="circle">
          <div className="innerCircle">
            <div className="circle">
              <span>{props.cost}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MiddleSection() {
  return <div className="middleSection">MiddleSection</div>;
}

function BottomSection() {
  return <div className="bottomSection">BottomSection</div>;
}
