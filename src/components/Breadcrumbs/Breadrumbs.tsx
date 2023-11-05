import { Breadcrumb, CrumbWrapper, Chevron } from './styles';

type breadcrumbsProps = {
  breadcrumbsData: string[];
}

export const Breadcrumbs = ({ breadcrumbsData }: breadcrumbsProps) => {
const breadcrumbsLength = breadcrumbsData.length - 1;
  return (
    <div>
      {breadcrumbsData.map((item: string, index) => {
        if (index < breadcrumbsLength) {
          return (
            <CrumbWrapper key={`Breadcrumb-${index}`}>
              <Breadcrumb >{item}</Breadcrumb>
              <Chevron
                src="/assets/Breadcrumbs/chevron.svg"
                height={12}
                width={12}
                alt=""
              />
            </CrumbWrapper>
          )
        }
        return <Breadcrumb key={`Breadcrumb-${index}`} active>{item}</Breadcrumb>
      })}
    </div>
  );
};