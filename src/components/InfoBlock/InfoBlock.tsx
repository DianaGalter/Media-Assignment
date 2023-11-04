import { Offer } from "./components/Offer";
import { Seller } from "./components/Seller";
import { ButtonStack } from "./components/ButtonStack";
import { Card } from "./styles";

export const InfoBlock = ({}) => {

    return (
        <Card>
            <Offer></Offer>
            <Seller></Seller>
            <ButtonStack></ButtonStack>
        </Card>
    );
};