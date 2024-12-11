import { Link } from "@/components/materials/Link"
import { IconX, IconLinkedin, IconGithub } from "@/components/materials/icons"
import { styled } from "styled-components"

export const SnsIcons: React.FC = () => (
  <Container>
    <Link href="#" target="_blank">
      <IconX />
    </Link>
    <Link href="#" target="_blank">
      <IconLinkedin />
    </Link>
    <Link href="#" target="_blank">
      <IconGithub />
    </Link>
  </Container>
)

const Container = styled.div`
  display: flex;
  margin-top: 30px;
  gap: 16px;
`
