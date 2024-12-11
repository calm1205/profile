import { ReactNode } from "react"
import { styled } from "styled-components"

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
  <Container>
    <ImageWrapper>{image}</ImageWrapper>
    <ProfileWrapper>
      <div>
        {title}
        {subText}
        {snsIcons}
      </div>
    </ProfileWrapper>
  </Container>
)

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
`
const ImageWrapper = styled.div`
  display: flex;
  align-items: end;
  width: 680px;
  max-width: 680px;
`
const ProfileWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
`
