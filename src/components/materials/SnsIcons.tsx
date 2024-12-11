import { Link } from "@/components/materials/Link"
import { IconX, IconLinkedin, IconGithub } from "@/components/materials/icons"
import { styled } from "styled-components"

export const SnsIcons: React.FC = () => (
  <Container>
    <Link href="https://x.com/nagi_calm1205" target="_blank">
      <IconX />
    </Link>
    <Link
      href="https://www.linkedin.com/in/%E5%87%AA-%E6%A3%AE%E5%B1%B1-45a77a288/"
      target="_blank"
    >
      <IconLinkedin />
    </Link>
    <Link href="https://github.com/calm1205" target="_blank">
      <IconGithub />
    </Link>
  </Container>
)

const Container = styled.div`
  display: flex;
  margin-top: 30px;
  gap: 16px;
`
