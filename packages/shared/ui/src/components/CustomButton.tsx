import { Button } from '@chakra-ui/react';

export interface CustomButtonProps {
    children: React.ReactNode;
}

export const CustomButton = ({children}: CustomButtonProps) => {
    return <Button>{children}</Button>
}