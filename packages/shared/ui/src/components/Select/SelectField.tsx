import {
  FieldPath,
  FieldValues,
  PathValue,
  UseControllerProps,
  useController,
} from 'react-hook-form';
import { Select as SelectWrapper } from 'chakra-react-select';
import { GroupBase, Props as SelectProps } from 'chakra-react-select';

export interface SelectFieldProps<
  FormValues extends FieldValues = FieldValues,
  Option = unknown,
  IsMulti extends boolean = boolean,
  Group extends GroupBase<Option> = GroupBase<Option>
> extends Omit<SelectProps<Option, IsMulti, Group>, 'name' | 'defaultValue'>,
    UseControllerProps<FormValues> {
  label?: string;
}

export const SelectField = <
  FormValues extends FieldValues = FieldValues,
  Option = unknown,
  IsMulti extends boolean = boolean,
  Group extends GroupBase<Option> = GroupBase<Option>
>({
  name,
  label,
  options,
  control,
  rules,
  shouldUnregister,
  ...selectProps
}: SelectFieldProps<FormValues, Option, IsMulti, Group>) => {
  const { field } = useController<FormValues>({
    name,
    control,
    rules,
    shouldUnregister,
  });

  return (
    <>
      <SelectWrapper<Option, IsMulti, Group>
        {...field}
        chakraStyles={{
          control: (base) => ({
            ...base,
            height: '50px',
            zIndex: 1,
          }),
          menu: (base) => ({
            ...base,
            width: '100px',
            zIndex: 999,
            backgroundColor: 'white',
          }),
          menuList: (base) => ({
            ...base,
            backgroundColor: 'white',
          }),
        }}
        isSearchable={true}
        useBasicStyles
        options={options}
        onChange={(newValue) =>
          field.onChange(
            newValue as PathValue<FormValues, FieldPath<FormValues>>
          )
        }
        {...selectProps}
      />
    </>
  );
};
