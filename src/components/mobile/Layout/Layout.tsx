import React, { ReactNode } from "react"
import { Container, TitleWrapper, ImageWrapper } from "./Layout.style"

interface LayoutProps {
  title: ReactNode
  image: ReactNode
  items: ReactNode[]
}

export const Layout: React.FC<LayoutProps> = ({ title, image, items }) => {
  return (
    <Container>
      <TitleWrapper>{title}</TitleWrapper>
      <ImageWrapper>{image}</ImageWrapper>
      {items.map((item, index) => (
        <React.Fragment key={index}>{item}</React.Fragment>
      ))}
    </Container>
  )
}
