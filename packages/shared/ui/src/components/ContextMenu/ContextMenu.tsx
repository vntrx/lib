import {
    Flex,
    IconButton,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
} from '@chakra-ui/react';
import * as Icon from '@iconscout/react-unicons';

export interface ContextMenuProps {
    options: {
        icon?: React.ReactElement;
        color?: string;
        label: string;
        action: () => void;
    }[];
}

export function ContextMenu(props: ContextMenuProps) {
    const { options } = props;

    return (
        <Flex alignItems='center' justifyContent='flex-end'>
            <Menu>
                <MenuButton
                    as={IconButton}
                    icon={<Icon.UilEllipsisV style={{ margin: 'auto' }} />}
                    variant='unstyled'
                    aria-label='Options'
                ></MenuButton>
                <MenuList>
                    {options &&
                        options.map((option, index) => (
                            <MenuItem
                                key={index}
                                onClick={option.action}
                                icon={option.icon}
                                iconSpacing='3'
                                alignItems='center'
                                px='4'
                                pt='3'
                                pb='2.5'
                                fontSize='md'
                                fontWeight='400'
                                color={option.color ? option.color : 'gray.900'}
                            >
                                {option.label}
                            </MenuItem>
                        ))}
                </MenuList>
            </Menu>
        </Flex>
    );
}