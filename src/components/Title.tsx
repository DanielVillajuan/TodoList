import { Typography } from "@mui/material"

const Title = ({ text, subtitle } : { text: string, subtitle?: boolean }) : JSX.Element => {
    return <Typography variant={ subtitle ? "h6" : "h3" }>{text}</Typography>
}

export default Title