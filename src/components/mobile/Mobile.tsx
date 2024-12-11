import { Layout } from "@/components/mobile/Layout/Layout"
import { ProfileImage } from "@/components/mobile/ProfileImage"
import { Name } from "./Name"
import { SubText } from "./SubText"
import { SnsIcons } from "./SnsIcons"

export const Mobile: React.FC = () => (
  <Layout
    title={<Name />}
    subText={<SubText />}
    image={<ProfileImage />}
    snsIcons={<SnsIcons />}
  />
)
