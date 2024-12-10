import { Layout } from "@/components/mobile/Layout/Layout"
import { ProfileImage } from "@/components/mobile/ProfileImage"
import { JOB_TITLE, MY_NAME } from "@/lib/constants"
import { styled } from "styled-components"
import { Link } from "../materials/Link/Link"
import { IconX } from "../materials/icons/X"
import { IconLinkedin } from "../materials/icons/Linkedin"
import { IconGithub } from "../materials/icons/Github"

export const Mobile: React.FC = () => {
  return (
    <Layout
      title={<H1>{MY_NAME}</H1>}
      subText={<P>{JOB_TITLE}</P>}
      image={<ProfileImage />}
      items={
        <>
          <Link href="#">
            <IconX />
          </Link>
          <Link href="#">
            <IconLinkedin />
          </Link>
          <Link href="#">
            <IconGithub />
          </Link>
        </>
      }
    />
  )
}

const H1 = styled.h1`
  font-size: clamp(2rem, 6vw, 4rem);
`
const P = styled.p`
  font-size: clamp(1rem, 3vw, 1.5rem);
`
