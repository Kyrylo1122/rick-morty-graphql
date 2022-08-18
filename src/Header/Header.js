import { Box } from "../Box/Box";
import { Nav } from "./Header.style";
const navigation = [
  { id: 1, href: "all-characters", name: "All characters" },
  { id: 2, href: "search", name: "Search" },
];
const Header = () => {
  return (
    <header>
      <nav>
        <Box as="ul" display="flex" justifyContent="center">
          {navigation.map(({ id, href, name }) => (
            <Box as="li" key={id} padding="10px">
              <Nav to={href}>{name}</Nav>
            </Box>
          ))}
        </Box>
      </nav>
    </header>
  );
};
export default Header;
