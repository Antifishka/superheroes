import React from "react";
import { useSelector } from "react-redux";
import { selectSuperheroDetails } from "redux/selectors";
import EyeIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import {
    SuperheroNick,
    Title,
    SuperheroInfoList,
    SuperheroInfoItem,
    Prop,
    Text,
    ViewsCount,
} from "./SuperheroInfo.styled";
import { Box } from "components/Box/Box";

export const SuperheroInfo = () => {
    const superhero = useSelector(selectSuperheroDetails);

    if (!superhero) {
        return null;
    };
    
    const {
        nickname,
        real_name,
        origin_description,
        superpowers,
        catch_phrase,
        views_count,
    } = superhero;
    console.log(superhero, "superhero")

    const superheroInfo = [
        { prop: 'Real name', value: real_name || 'Unknown'},
        { prop: 'Description', value: origin_description || 'Unknown' },
        { prop: 'Superpowers', value: superpowers || 'Unknown' },
        { prop: 'Catchphrase', value: catch_phrase || 'Unknown' },
    ]

    return (
        <div>
            <SuperheroNick>{nickname}</SuperheroNick>
            <Title>Informations</Title>
            <SuperheroInfoList>
                {superheroInfo?.map(({ prop, value }) => (
                    <SuperheroInfoItem key={prop}>
                        <Prop>{prop}</Prop>
                        <Text>{value}</Text>
                    </SuperheroInfoItem>
                ))}
            </SuperheroInfoList>
            <Box display="flex" alignItems="center" gridGap="4px"
                color="#8E8E93">
                <EyeIcon fontSize="small" />
                <ViewsCount>{views_count || 0}</ViewsCount>
            </Box>
            
        </div>    
    );
};