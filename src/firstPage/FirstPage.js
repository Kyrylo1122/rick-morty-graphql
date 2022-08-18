import { Box } from "../Box/Box";
import { Label, Title, Icon, TextItem } from "./FirstPage.style";
export default function FirstPage() {
  return (
    <>
      <Box as="ul" display="flex" justifyContent="center">
        <Box as="li" pr="50px">
          <Icon />
        </Box>
        <Box pl="50px">
          <Icon />
        </Box>
      </Box>
      <Box display="flex" alignItems="flex-start" justifyContent="center">
        <TextItem>
          <p>
            Press <Label>All characters</Label> to find all characters from the
            whole TV Serial
          </p>
        </TextItem>
        <TextItem>
          <p>
            Press <Label>Search</Label> to find characters from specific episode
          </p>
        </TextItem>
      </Box>
      <Title>
        Rick and Morty <br />
        characters
      </Title>
    </>
  );
}
