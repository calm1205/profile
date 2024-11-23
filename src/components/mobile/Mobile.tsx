import { Layout } from "@/components/mobile/Layout/Layout"
import { ProfileImage } from "@/components/mobile/ProfileImage"

export const Mobile: React.FC = () => {
  return (
    <Layout
      title={<h1>Mobile</h1>}
      image={<ProfileImage />}
      items={[<p>item</p>]}
    />
  )
}
