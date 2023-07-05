import React from "react";
import { Box } from "@mui/material";
import Skeleton from "@mui/material/Skeleton";
import { SuperheroCard } from "components/SuperheroItem/SuperheroItem.styled";

export const MySkeleton = () => {
    return (
        <>
            {[...Array(5)].map((_, index) => (
                <SuperheroCard key={index}>
                    <Skeleton animation="wave"
                        variant="rectangular"
                        width={"100%"} height={380} 
                        style={{ borderRadius: "20px" }} />
                                
                    <Box sx={{ p: "8px" }}>
                        <Skeleton animation="wave"
                            style={{ width: "150px", height: "28px", marginInline: "auto" }} />
                    </Box>
                </SuperheroCard>
            ))}
        </>
    );
};