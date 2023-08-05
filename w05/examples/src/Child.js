import { createContext, useContext } from "react";

function Child() {
  const realNumber = useContext(SecretNumberContext);
  return (
    <h1>
      Secret Number: {realNumber}
    </h1>
  )
}

export const SecretNumberContext = createContext(13);
export default Child;
