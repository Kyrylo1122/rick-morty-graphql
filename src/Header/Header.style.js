import styled from "styled-components";
import { NavLink } from "react-router-dom";
export const Nav = styled(NavLink)`
  color: grey;
  text-decoration: none;
  padding: 10px;
  &.active {
    color: orange;
  }
  :hover,
  :focus {
    color: orange;
  }
`;
