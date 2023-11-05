type breadcrumbsProps = {
  breadcrumbsData: string[];
}

export const Breadcrumbs = ({ breadcrumbsData }: breadcrumbsProps) => {

  return (
    <>
      {breadcrumbsData.map((item: string) => {
        <p>{item}</p>
      })}
    </>
  );
};