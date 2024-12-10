import { ReactNode } from "react"
import { styled } from "styled-components"

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
      <ImageWrapper>{image}</ImageWrapper>
      <div>
        {title}
        {subText}
        {items}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100vw;
  display: flex;
`

const ImageWrapper = styled.div`
  display: flex;
  align-items: end;
  max-width: 800px;
`
