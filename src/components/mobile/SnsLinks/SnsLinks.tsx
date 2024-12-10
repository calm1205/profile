import { IconX } from "@/components/materials/icons/X"
import { IconLinkedin } from "@/components/materials/icons/Linkedin"
import { IconGithub } from "@/components/materials/icons/Github"
import { Link } from "@/components/materials/Link/Link"
import { Container } from "./SnsLinks.style"

export const SnsLinks: React.FC = () => {
  return (
    <Container>
      <Link href="#">
        <IconX />
      </Link>
      <Link href="#">
        <IconLinkedin />
      </Link>
      <Link href="#">
        <IconGithub />
      </Link>
    </Container>
  )
}
