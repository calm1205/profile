import { Link } from "@/components/materials/Link/Link"
import { IconX, IconLinkedin, IconGithub } from "@/components/materials/icons"

export const SnsIcons: React.FC = () => (
  <>
    <Link href="#" target="_blank">
      <IconX />
    </Link>
    <Link href="#" target="_blank">
      <IconLinkedin />
    </Link>
    <Link href="#" target="_blank">
      <IconGithub />
    </Link>
  </>
)
