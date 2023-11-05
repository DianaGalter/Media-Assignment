import { OfferRoot, PriceWrapper, Price, PriceTag, ContactsButton} from "./styles";

type offerProps = {
  offer: {
    price: string;
    tag: string;
    buttonText: string;
  }
}

/**
 * Offer information: price, estimation, contacts.
 */
export const Offer = ({ offer }: offerProps) => {
  const { price, tag, buttonText } = offer;

  return (
    <OfferRoot>
      <PriceWrapper>
        <Price>{price}</Price>
        <PriceTag>{tag}</PriceTag>
      </PriceWrapper>
      <ContactsButton>{buttonText}</ContactsButton>
    </OfferRoot>
  );
};