import type { Meta, StoryObj } from "@storybook/react";

import { AlertDialog } from "./";
import { UilTrashAlt } from "@iconscout/react-unicons";
import { Box, Button, Text, useDisclosure } from "@chakra-ui/react";
import { useRef } from "react";

const meta: Meta<typeof AlertDialog.Root> = {
  component: AlertDialog.Root,
};

export default meta;
type Story = StoryObj<typeof AlertDialog.Root>;

export const Default: Story = {
  render: () => {
    const alertDialog = useDisclosure();
    const buttonRef = useRef<HTMLButtonElement>(null);

    return (
      <>
        <Button onClick={alertDialog.onOpen}>Open</Button>
        <AlertDialog.Root
          isOpen={alertDialog.isOpen}
          onClose={alertDialog.onClose}
          leastDestructiveRef={buttonRef}
        >
          <AlertDialog.Body>
            <Box bg="#FCE8EB" borderRadius="full" p="3">
              <UilTrashAlt size={16} color="#E01237" />
            </Box>

            <Text
              textAlign="center"
              fontSize="xl"
              fontWeight="400"
              color="gray.900"
            >
              Tem certeza que deseja excluir?
            </Text>
          </AlertDialog.Body>

          <AlertDialog.Footer>
            <Button
              ref={buttonRef}
              onClick={alertDialog.onClose}
              size="md"
              variant="ghost"
              colorScheme="gray"
            >
              Cancelar
            </Button>

            <Button size="md" variant="danger" colorScheme="crimson">
              Sim, excluir
            </Button>
          </AlertDialog.Footer>
        </AlertDialog.Root>
      </>
    );
  },
};

export const Informative: Story = {
  render: () => {
    const alertDialog = useDisclosure();
    const buttonRef = useRef<HTMLButtonElement>(null);

    return (
      <>
        <Button onClick={alertDialog.onOpen}>Open</Button>
        <AlertDialog.Root
          isOpen={alertDialog.isOpen}
          onClose={alertDialog.onClose}
          leastDestructiveRef={buttonRef}
        >
          <AlertDialog.Body gap="3" pb="8" textAlign="center">
            <Text>Parece que você ainda não tem acesso a este conteúdo.</Text>

            <Text>Por favor, entre em contato com o produtor responsável.</Text>
          </AlertDialog.Body>

          <AlertDialog.Footer>
            <Button
              ref={buttonRef}
              onClick={alertDialog.onClose}
              size="md"
              variant="brand"
              colorScheme="royalBlue"
            >
              Entendi
            </Button>
          </AlertDialog.Footer>
        </AlertDialog.Root>
      </>
    );
  },
};
