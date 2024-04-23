import React from "react";
import { Button, Stack, Textarea } from "@chakra-ui/react";

function kontakt() {
  return (
    <div>
      <h3>Nehmen Sie Kontakt auf!</h3>
      <span>Christoph Jendrolak</span>
      <span>Luppenstraße 20</span>
      <span>04177 Leipzig</span>

      <Textarea placeholder="Here is a sample placeholder" />

      <Stack direction="row" spacing={4}>
        <Button isLoading colorScheme="teal" variant="solid">
          Email
        </Button>
        <Button
          isLoading
          loadingText="Submitting"
          colorScheme="teal"
          variant="outline"
        >
          Submit
        </Button>
      </Stack>
    </div>
  );
}

export default kontakt;
