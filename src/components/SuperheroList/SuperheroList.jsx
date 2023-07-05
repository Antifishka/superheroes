import React from "react";
import { useSelector } from "react-redux";
import { selectSuperheroes, selectError, selectIsLoading, } from "redux/selectors";
import { SuperheroListWrapper } from "./SuperheroList.styled";
import { SuperheroItem } from 'components/SuperheroItem/SuperheroItem';
import { MySkeleton } from "components/Skeleton/Skeleton";
import { nanoid } from 'nanoid';

export const SuperheroList = () => {
    const superheroes = useSelector(selectSuperheroes);
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);

    const showSkeleton = isLoading && !error;

    return (
       <SuperheroListWrapper>
            {showSkeleton
                ? <MySkeleton />
                : superheroes?.map(({ _id: id, nickname, images }) => (
                    <SuperheroItem
                        key={id || nanoid()}
                        id={id}
                        nickname={nickname}
                        images={images}
                    />
                    ))}
        </SuperheroListWrapper>
    );
};