import { styled } from "styled-components"
import profileUrl from "@/assets/profile.png"

/**
 * プロフィールの画像
 */
export const ProfileImage: React.FC = () => {
  return (
    <ImageWrapper>
      <Img src={profileUrl} alt="profile" />
      <BlurEffect />
      <WhiteBox />
    </ImageWrapper>
  )
}

const ImageWrapper = styled.div`
  position: relative;
`

const Img = styled.img`
  width: 100%;
`

const BlurEffect = styled.div`
  position: absolute;
  inset: auto 0 0 0;
  height: 20%;
  background-color: white;
  filter: blur(10px);
  pointer-events: none;
`

const WhiteBox = styled.div`
  height: 20px;
  background-color: white;
`
