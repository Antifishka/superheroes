import React from "react";
import { useSelector } from "react-redux";
import { selectSuperheroDetails } from "redux/selectors";
import {
    SuperheroNick,
    Title,
    SuperheroInfoList,
    SuperheroInfoItem,
    Prop,
    Text,
} from "./SuperheroInfo.styled";

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
    } = superhero;

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
        </div>    
    );
};