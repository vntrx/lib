import { components, GroupBase, MenuListProps } from 'chakra-react-select';
import { Virtuoso } from 'react-virtuoso';

const getListHeight = (length: number) => {
  return length < 6 ? length * 40 : 6 * 40;
};

export default function MenuList<
  Option = unknown,
  IsMulti extends boolean = boolean,
  Group extends GroupBase<Option> = GroupBase<Option>
>({
  children,
  ...props
}: MenuListProps<Option, IsMulti, Group>) {
  return Array.isArray(children) ? (
    <Virtuoso
      style={{ height: `${getListHeight(children.length)}px`, zIndex: 999 }}
      totalCount={children.length}
      itemContent={(index) => (
        <components.MenuList {...props}>{children[index]}</components.MenuList>
      )}
    />
  ) : (
    <components.MenuList {...props}>{children}</components.MenuList>
  );
}