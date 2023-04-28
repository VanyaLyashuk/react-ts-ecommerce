import { nanoid } from "nanoid";

interface ColourwaysProps {
  colors: Array<{
    mainColor: string;
    accentColor?: string;
    colorName?: string;
    active: boolean;
  }>,
  paletteSize: string;
}

const Colourways = ({ colors, paletteSize }: ColourwaysProps): JSX.Element => {
  const buttons = colors.map(
    ({ mainColor, accentColor, active }) => (
      <button
        key={nanoid()}
        className={`colorways-btn ${paletteSize === 'regular' ? 'colorways-btn--regular' : 'colorways-btn--small'} ${active ? "active" : ""}`}
        style={{
          background: `linear-gradient(135deg, ${mainColor} 50%, ${
            accentColor ? accentColor : mainColor
          } calc(50% + 1px))`,
        }}
      ></button>
    )
  );
  return (
    <>
      {
        paletteSize === 'regular' ? <RegularContainer buttons={buttons} /> : <SmallContainer buttons={buttons} />
      }
    </>
  );
};

interface ContainerProps {
  buttons: JSX.Element[]
}

const RegularContainer = ({buttons}: ContainerProps) => {
  return (
    <div className="mb-4 md:mb-5 lg:mb-6">
      <h3 className="text-sm mb-3 lg:mb-4">
        <span className="font-bold uppercase">Sale:</span> Forage Green
        (Blizzard Sole)
      </h3>
      <div className="flex flex-wrap gap-3">{buttons}</div>
    </div>
  );
}

const SmallContainer = ({buttons}: ContainerProps) => {
  return (
    <div className="mb-4">
      <h3 className="text-sm mb-3 lg:mb-4">
        Forage Green (Blizzard Sole)
      </h3>
      <div className="flex flex-wrap gap-2">{buttons}</div>
    </div>
  );
}

export default Colourways;