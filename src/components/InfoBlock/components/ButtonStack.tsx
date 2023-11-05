import styled from "@emotion/styled";
import Image from "next/image";

const ButtonStackBlock = styled.div`
  display: flex;
`;

const Button = styled.button`
  display: flex;
  padding: 12px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
  flex: 1 0 0;

  border-radius: 12px;
  border: 1px solid #D3D6D9;
  background: #FFF;
`;

export const ButtonStack = ({}) => {

  return (
    <ButtonStackBlock>
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
    </ButtonStackBlock>
  );
};