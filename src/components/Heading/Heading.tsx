import { Root, Header, SubHeader } from "./styles";
import { Statistics } from "./Statistics";

type HeadingProps = {
    headingProps: {
        title: string;
        subtitle: string;
        statistics: {
            views: string;
            favorites: string;
        }
    };
};

export const Heading = ({ headingProps } : HeadingProps) => {
    const { title, subtitle, statistics: {views, favorites} } = headingProps;
    return (
        <Root>
            <Header>{title}</Header>
            <SubHeader>{subtitle}</SubHeader>
            <Statistics views={views} favorites={favorites} />
        </Root>
    );
};