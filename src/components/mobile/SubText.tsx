import { JOB_TITLE } from "@/lib/constants"
import { styled } from "styled-components"

export const SubText: React.FC = () => (
  <P>
    {JOB_TITLE} /{" "}
    <Company href="https://www.mntsq.co.jp/" target="_blank">
      <span style={{ fontFamily: "math" }}>MNTSQ</span>
      <Ltd>,Ltd.</Ltd>
    </Company>
  </P>
)

const P = styled.p`
  font-size: clamp(1rem, 3vw, 1.5rem);
`

const Company = styled.a`
  color: black;
  text-decoration: none;
  &:hover {
    color: #535bf2;
    text-decoration: underline;
  }
`
const Ltd = styled.span`
  font-size: 1rem;
`
