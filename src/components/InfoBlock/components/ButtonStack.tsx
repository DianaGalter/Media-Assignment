
import Image from "next/image";
import { ButtonStackRoot, Button } from "./styles";

export const ButtonStack = ({}) => {

  return (
    <ButtonStackRoot>
      <Button>
        <Image
          src="/assets/InfoBlock/heart.svg"
          height={24}
          width={24}
          alt="Add to favorite"
        />
      </Button>
      <Button>
        <Image
          src="/assets/InfoBlock/download.svg"
          height={24}
          width={24}
          alt="Save the contacts"
        />
      </Button>
      <Button>
        <Image
          src="/assets/InfoBlock/file.svg"
          height={24}
          width={24}
          alt="Copy the contacts"
        /> 
      </Button>
      <Button>
      <Image
        src="/assets/InfoBlock/kebab.svg"
        height={24}
        width={24}
        alt="Open the menu"
      />
      </Button>
    </ButtonStackRoot>
  );
};