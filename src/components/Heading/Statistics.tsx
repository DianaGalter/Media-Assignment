import { Stats } from "./styles";

type StatisticsProps = {
  views: string;
  favorites: string;
}

export const Statistics = ({ views, favorites }: StatisticsProps) => {
  return (
    <Stats>
      {views}{favorites}
    </Stats>
  );
};