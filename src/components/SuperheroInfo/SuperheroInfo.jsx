import {
    SuperheroNick,
    Title,
    SuperheroInfoList,
    SuperheroInfoItem,
    Prop,
    Text,
} from "./SuperheroInfo.styled";
import PropTypes from 'prop-types';

export const SuperheroInfo = ({ nickname, realName, description, superpowers, catchPhrase }) => {
    const superheroInfo = [
        { prop: 'Real name', value: realName || 'Unknown'},
        { prop: 'Description', value: description || 'Unknown' },
        { prop: 'Superpowers', value: superpowers || 'Unknown' },
        { prop: 'Catchphrase', value: catchPhrase || 'Unknown' },
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

SuperheroInfo.propTypes = {
    nickname: PropTypes.string.isRequired,
    realName: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    superpowers: PropTypes.string.isRequired, 
    catchPhrase: PropTypes.string.isRequired,
};