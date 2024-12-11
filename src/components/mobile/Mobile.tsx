import { Layout } from "@/components/mobile/Layout/Layout"
import { ProfileImage } from "@/components/mobile/ProfileImage"
import { MyName } from "@/components/materials/MyName"
import { SubText } from "../materials/SubText"
import { SnsIcons } from "../materials/SnsIcons"

export const Mobile: React.FC = () => (
  <Layout
    title={<MyName />}
    subText={<SubText />}
    image={<ProfileImage />}
    snsIcons={<SnsIcons />}
  />
)
