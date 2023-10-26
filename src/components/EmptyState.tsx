import { Box, Typography } from "@mui/material"

const EmptyState = (): JSX.Element => {
    return (
        <Box display="flex" justifyContent="center" alignItems="center" height="120px" width="100%">
            <Typography fontSize="48px">🚀</Typography>
            <Typography fontSize="18px" fontWeight="bold" >Nada por aqui</Typography>
        </Box>
    )
}

export default EmptyState;