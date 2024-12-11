import React, { ReactNode } from "react"
import { Container, ImageWrapper, Wrapper } from "./Layout.style"

interface LayoutProps {
  title: ReactNode
  subText: ReactNode
  image: ReactNode
  snsIcons: ReactNode
}

export const Layout: React.FC<LayoutProps> = ({
  title,
  subText,
  image,
  snsIcons,
}) => (
  <Wrapper>
    <Container>
      <ImageWrapper>{image}</ImageWrapper>
      {title}
      {subText}
      {snsIcons}
    </Container>
  </Wrapper>
)
