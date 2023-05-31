import { useSelector } from "react-redux";
import { selectSuperheroes } from "redux/selectors";
import { SuperheroListWrapper } from "./SuperheroList.styled";
import { SuperheroItem } from 'components/SuperheroItem/SuperheroItem';

export const SuperheroList = () => {
    const { superheroes } = useSelector(selectSuperheroes);
    console.log(superheroes, "fetch superheroes");

    return (
       <SuperheroListWrapper>
                {superheroes?.map(({ _id: id, nickname, images }) => (
                    <SuperheroItem
                        key={id}
                        id={id}
                        nickname={nickname}
                        images={images} />
                ))}
        </SuperheroListWrapper>
    );
};