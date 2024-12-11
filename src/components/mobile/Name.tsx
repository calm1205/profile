import { MY_NAME } from "@/lib/constants"
import { styled } from "styled-components"

export const Name: React.FC = () => <H1>{MY_NAME}</H1>

const H1 = styled.h1`
  font-size: clamp(2rem, 6vw, 4rem);
`
