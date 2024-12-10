import React, { ReactNode } from "react"
import {
  Container,
  TitleWrapper,
  SubText,
  ImageWrapper,
  Wrapper,
  SnsIcons,
} from "./Layout.style"

interface LayoutProps {
  title: ReactNode
  subText: ReactNode
  image: ReactNode
  items: ReactNode
}

export const Layout: React.FC<LayoutProps> = ({
  title,
  subText,
  image,
  items,
}) => {
  return (
    <Wrapper>
      <Container>
        <ImageWrapper>{image}</ImageWrapper>
        <TitleWrapper>{title}</TitleWrapper>
        <SubText>{subText}</SubText>
        <SnsIcons>{items}</SnsIcons>
      </Container>
    </Wrapper>
  )
}
