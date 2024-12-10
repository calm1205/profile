import profileUrl from "@/assets/profile.png"
import { Layout } from "./Layout/Layout"
import { JOB_TITLE, MY_NAME } from "@/lib/constants"

export const Laptop: React.FC = () => {
  return (
    <Layout
      title={<p>{MY_NAME}</p>}
      subText={<p>{JOB_TITLE}</p>}
      image={<img src={profileUrl} alt="profile" />}
      items={<div>items</div>}
    />
  )
}
