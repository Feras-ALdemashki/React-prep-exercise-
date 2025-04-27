import { BigHead } from "@bigheads/core";

function Small() {
  return (
    <BigHead
      skinTone="red"
      eyes="simple"
      eyebrows="concerned"
      mouth="tongue"
      hair="pixie"
      facialHair="mediumBeard"
      clothing="tankTop"
      accessory="tinyGlasses"
      graphic="none"
      hat="none"
      body="chest"
      hairColor="blue"
      clothingColor="white"
      lipColor="pink"
      hatColor="black"
      faceMaskColor="white"
      faceMask={false}
      lashes={false}
    />
  );
}

function Medium() {
  return (
    <BigHead
      accessory="shades"
      body="breasts"
      clothing="dressShirt"
      clothingColor="blue"
      eyebrows="raised"
      eyes="wink"
      faceMask={false}
      faceMaskColor="white"
      facialHair="mediumBeard"
      graphic="redwood"
      hair="none"
      hairColor="white"
      hat="turban"
      hatColor="blue"
      lashes={true}
      lipColor="red"
      mouth="grin"
      skinTone="light"
    />
  );
}

function Big() {
  return (
    <BigHead
      accessory="shades"
      body="chest"
      clothing="vneck"
      clothingColor="red"
      eyebrows="concerned"
      eyes="simple"
      faceMask={false}
      faceMaskColor="green"
      facialHair="stubble"
      graphic="react"
      hair="buzz"
      hairColor="brown"
      hat="none"
      hatColor="green"
      lashes={true}
      lipColor="pink"
      mouth="lips"
      skinTone="red"
    />
  );
}

export { Small, Medium, Big };
