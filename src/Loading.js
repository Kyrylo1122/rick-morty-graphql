import { MutatingDots } from "react-loader-spinner";

export const Loading = () => (
  <MutatingDots
    height="150"
    width="150"
    color="grey"
    secondaryColor="orange"
    radius="12.5"
    ariaLabel="mutating-dots-loading"
    wrapperStyle={{ display: "flex", justifyContent: "center" }}
    visible={true}
  />
);
