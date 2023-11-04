type breadcrumbsProps = {
  breadcrumbsProps: string[];
}

export const Breadcrumbs = ({ breadcrumbsProps }: breadcrumbsProps) => {

  return (
    <>
      {breadcrumbsProps.map((item: string) => {
        <p>{item}</p>
      })}
    </>
  );
};