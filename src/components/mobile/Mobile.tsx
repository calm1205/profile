import { Layout } from "@/components/mobile/Layout/Layout"
import { ProfileImage } from "@/components/mobile/ProfileImage"
import { MY_NAME } from "@/lib/constants"
import { SnsLinks } from "./SnsLinks/SnsLinks"

export const Mobile: React.FC = () => {
  return (
    <Layout
      title={<h1>{MY_NAME}</h1>}
      subText={<p>Software Engineer</p>}
      image={<ProfileImage />}
      items={<SnsLinks />}
    />
  )
}
