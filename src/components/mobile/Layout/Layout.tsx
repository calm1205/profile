import React, { ReactNode } from "react"
import { Container, TitleWrapper, SubText, ImageWrapper } from "./Layout.style"

interface LayoutProps {
  title: ReactNode
  subText: ReactNode
  image: ReactNode
  items: ReactNode[]
}

export const Layout: React.FC<LayoutProps> = ({
  title,
  subText,
  image,
  items,
}) => {
  return (
    <Container>
      <ImageWrapper>{image}</ImageWrapper>
      <TitleWrapper>{title}</TitleWrapper>
      <SubText>{subText}</SubText>
      {items.map((item, index) => (
        <React.Fragment key={index}>{item}</React.Fragment>
      ))}
    </Container>
  )
}
