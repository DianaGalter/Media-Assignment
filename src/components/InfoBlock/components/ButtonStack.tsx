import styled from "@emotion/styled";
import Image from "next/image";

const ButtonStackBlock = styled.div`
  display: flex;
`;

const Button = styled.button`
  display: flex;
  padding: var(--space-12, 12px);
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: var(--space-4, 4px);
  flex: 1 0 0;

  border-radius: var(--border-radius-12, 12px);
  border: 1px solid var(--border-border-base, #D3D6D9);
  background: var(--background-bg-white, #FFF);
`;

export const ButtonStack = ({}) => {

  return (
    <ButtonStackBlock>
      <Button>
        <Image
          src="/assets/heart.svg"
          height={24}
          width={24}
          alt="Add to favorite"
        />
      </Button>
      <Button>
        <Image
          src="/assets/download.svg"
          height={24}
          width={24}
          alt="Save the contacts"
        />
      </Button>
      <Button>
        <Image
          src="/assets/file.svg"
          height={24}
          width={24}
          alt="Copy the contacts"
        /> 
      </Button>
      <Button>
      <Image
        src="/assets/kebab.svg"
        height={24}
        width={24}
        alt="Open the menu"
      />
      </Button>
    </ButtonStackBlock>
  );
};