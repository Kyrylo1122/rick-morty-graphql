import { Box } from "./Box/Box";

const Card = ({ image, name }) => {
  return (
    <Box as="li" key={image} width="200px" padding="10px">
      <img src={image} alt={name} width="100%" />
      <p> {name}</p>
    </Box>
  );
};
export default Card;
