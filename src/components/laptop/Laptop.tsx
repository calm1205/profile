import profileUrl from "@/assets/profile.png"
import { Layout } from "./Layout/Layout"
import { MyName } from "@/components/materials/MyName"
import { SubText } from "../materials/SubText"
import { SnsIcons } from "../materials/SnsIcons"

export const Laptop: React.FC = () => (
  <Layout
    title={<MyName />}
    subText={<SubText />}
    image={<img src={profileUrl} alt="profile" />}
    snsIcons={<SnsIcons />}
  />
)
