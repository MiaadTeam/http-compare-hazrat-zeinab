import styled from 'styled-components';
import { Navbar } from '../../organism/navbar';
import { FC, ReactElement, ReactNode } from 'react';
import { SideBar } from '../../organism/side-bar';
interface IItems {
  id: number | string;
  title: string;
  href: string;
  icon: ReactElement;
}
interface IProps {
  children: ReactElement | ReactNode;
  sidebarItems?: IItems[];
  navigationItems?: IItems[];
  showSidebar?: boolean;
}

export const TemplateLayout: FC<IProps> = ({
  children,
  sidebarItems,
  navigationItems,
  showSidebar,
}) => {
  return (
    <TemplateWrapper>
      <Navbar navigationItems={navigationItems} />
      <SideBar sidebarItems={sidebarItems} showSidebar={showSidebar} />
      <ContentWrapper>{children}</ContentWrapper>
    </TemplateWrapper>
  );
};

const TemplateWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 3.75rem 1fr;
  grid-template-rows: 3.125rem 1fr;
`;

const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 1rem;
  padding: 0.5rem 1rem;
`;
