import { Card, CardBody, useRadio } from '@chakra-ui/react';
import { PropsWithChildren } from 'react';

export default function RadioCard({ children, ...props }: PropsWithChildren) {
  const { getInputProps, getRadioProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getRadioProps();

  return (
    <Card
      as='label'
      {...checkbox}
      cursor='pointer'
      display='flex'
      flexDirection='row'
      alignItems='center'
      px='24px'
      _checked={{
        bg: 'royalBlue.100',
        color: 'white',
        borderWidth: '1px',
        borderColor: 'royalBlue.600',
      }}
    >
      <input {...input} style={{ clip: 'none', color: '#5045C9' }} />
      <CardBody>{children}</CardBody>
    </Card>
  );
}
