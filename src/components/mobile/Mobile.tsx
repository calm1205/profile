import { Layout } from "@/components/mobile/Layout/Layout"
import { ProfileImage } from "@/components/mobile/ProfileImage"
import { Link } from "@/components/materials/Link/Link"
import { MY_NAME } from "@/lib/constants"

export const Mobile: React.FC = () => {
  return (
    <Layout
      title={<h1>{MY_NAME}</h1>}
      subText={<p>Software Engineer</p>}
      image={<ProfileImage />}
      items={[<Link>x</Link>, <Link>linkedin</Link>, <Link>github</Link>]}
    />
  )
}
