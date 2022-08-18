import { Box } from "./Box/Box";
import Card from "./Card";
const CardList = ({ array }) => {
  return (
    <Box as="ul" display="flex" flexWrap="wrap">
      {array.map(({ name, image }) => (
        <Card name={name} image={image} />
      ))}
    </Box>
  );
};
export default CardList;
