import { Box, Code, Heading, Text } from "@chakra-ui/react";
import SyntaxHighlighter from 'react-syntax-highlighter';

export function FormFeedback() {
    return (
        <Box p={4} borderWidth="1px" borderColor="gray.200" bg="white">
            <Heading as="h2" size="lg" mb={2}>
                Error: Parent Component Required
            </Heading>
            <Text>
                This component requires a parent <Code>{`<Form>`}</Code> component to function correctly. Please make sure to wrap your child components in a <Code>{`<Form>`}</Code> component.
            </Text>
            <Text mt={4}>
                To resolve this issue, you need to place your child components inside it. For example:
            </Text>
            <SyntaxHighlighter language="jsx">
                {`
                import { Form } from "@vntrx/ui";

                function Component() {
                  return (
                    <Form>
                      {/* Your child components go here */}
                    </Form>
                  );
                }
                
                export default Component;`
                }
            </SyntaxHighlighter>
        </Box>
    );
}