import React, { useEffect } from 'react'
import { Dispatch } from 'redux'
import styled from 'styled-components'
import { useAppDispatch } from '../../hooks'
import AnimeService from '../../services/animeService'
import { GetAnimePage } from '../../services/animeService/__generated__/GetAnimePage'
import { setAnimePage } from './HomePageSlice'
import { HotAnime } from './HotAnime'

interface Props {

}

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const actionDispatch = (dispatch: Dispatch) => ({
  setAnimePage: (page: GetAnimePage["Page"]) => dispatch(setAnimePage(page))
})

function HomePage(props: Props) {

  const { setAnimePage } = actionDispatch(useAppDispatch())


  useEffect(() => {
    const fetchAnimePage = async () => {
      const animePage = await AnimeService.getAnimePage(0, 200).catch((err) => {
        console.log('Error:', err)
      })

      console.log('Anime page:', animePage)
      if (animePage) setAnimePage(animePage)
    }

    fetchAnimePage()
  }, [setAnimePage])

  return (
    <Container>
      <h1>Hot Anime</h1>
      <HotAnime />
    </Container>
  )
}

export default HomePage
