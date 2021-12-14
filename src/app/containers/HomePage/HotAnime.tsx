import React from 'react'
import { createSelector } from 'reselect'
import styled from 'styled-components'
import { useAppSelector } from '../../hooks'
import { makeSelectoeAnimePage } from './selector'

const HotAnimeContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`

const AnimeItemContainer = styled.div`
  width: 16rem;
  height: 18rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const AnimeCover = styled.div`
  width: auto;
  height: 14rem;

  img {
    width: auto;
    height: 100%;
  }
`

const AnimeTitle = styled.h6`
  margin-top: 8px;
  font-size: 16px;
  color: #000;
  font-weight: 600;
  text-align: center;
`


const stateSelector = createSelector(makeSelectoeAnimePage, (animePage) => ({
  animePage
}))

export function HotAnime() {

  const { animePage } = useAppSelector(stateSelector)

  const isEmptyAnimePage = !animePage || !animePage.media || animePage.media.length === 0

  if (isEmptyAnimePage) return <div>Loading...</div>

  return (
    <HotAnimeContainer>
      {animePage && animePage.media && animePage.media.map((anime) => (
        <AnimeItemContainer key={anime?.id}>
          <AnimeCover>
            <img src={anime?.coverImage?.extraLarge || ""} alt="" />
          </AnimeCover>
          <AnimeTitle>{anime?.title?.english}</AnimeTitle>
          <h5>Average:{anime?.averageScore}</h5>
        </AnimeItemContainer>
      ))}
    </HotAnimeContainer>
  )
}