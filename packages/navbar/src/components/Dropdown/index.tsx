import { CustomSelectList, CustomOptionInput, OptionColor } from './styles';

const colors = {
  Orange: '#FF7F00',
  Red: '#FF0000',
  Yellow: '#FFFF00',
  Green: '#00FF00',
  Blue: '#0000FF',
  Indigo: '#2E2B5F',
  Violet: '#8B00FF',
};
export function CustomDropdownColor({ register }: any) {
  return (
    <section>
      <label htmlFor="color">Color</label>
      <CustomSelectList id="color-suggestions" {...register('color')}>
        {Object.entries(colors).map(([key, value], index) => {
          return (
            <CustomOptionInput
              key={`${key}-${index}`}
              valuecolor={value as OptionColor}
              value={value}
            >
              {key}
            </CustomOptionInput>
          );
        })}
      </CustomSelectList>
    </section>
  );
}
