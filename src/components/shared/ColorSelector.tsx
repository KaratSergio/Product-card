import * as RadioGroup from '@radix-ui/react-radio-group';

interface ColorSelectorProps {
  colors: { name: string; value: string; hex: string }[];
  onChange: (value: string) => void;
}

const ColorSelector: React.FC<ColorSelectorProps> = ({ colors, onChange }) => (
  <RadioGroup.Root className="flex gap-2" aria-label="Select color" onValueChange={onChange}>
    {colors.map((color) => (
      <RadioGroup.Item
        key={color.value}
        value={color.value}
        className={`relative w-10 h-10 rounded-full border border-transparent transition-all duration-300 ease-in-out
          focus:outline-none cursor-pointer
          hover:border-black
          data-[state=checked]:border-black`}
      >
        <span
          className={`absolute inset-0 rounded-full border transition-all duration-300 ease-in-out
            ${color.value === 'checked' ? 'border-black' : 'border-transparent'}`}
        />

        <span
          style={{
            backgroundColor: color.hex,
            width: '65%',
            height: '65%',
          }}
          className="rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        />
      </RadioGroup.Item>
    ))}
  </RadioGroup.Root>
);

export default ColorSelector;