import { Box } from '@mui/material'

export const BrandLogoAsLoader = () => {
    return (
        <Box
            sx={{
                textAlign: 'center',
                p: 2
            }}
        >
            <Box
                component="img"
                src="img/vite.svg"
                alt="Brand Logo"
                sx={{ opacity: 0.1, width: 250 }}
            />
        </Box>
    )
}
