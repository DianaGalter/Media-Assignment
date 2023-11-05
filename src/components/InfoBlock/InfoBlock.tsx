import { Offer } from "./components/Offer";
import { Seller } from "./components/Seller";
import { ButtonStack } from "./components/ButtonStack";
import { Card } from "./styles";

type infoDataProps = {
    infoData: {
      offer: {
        price: string;
        tag: string;
        buttonText: string;
      },
      seller: {
        title: string;
        name: string;
        ads: string;
      }
    }
  }

export const InfoBlock = ({ infoData }: infoDataProps) => {
    const { offer, seller } = infoData;

    return (
        <Card>
            <Offer offer={offer}></Offer>
            <Seller seller={seller}></Seller>
            <ButtonStack></ButtonStack>
        </Card>
    );
};