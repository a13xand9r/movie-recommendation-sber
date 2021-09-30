import { IconStarFill, IconAccessibility, IconCalendar } from '@sberdevices/plasma-icons'
import { Card, CardContent, TextBox, TextBoxBigTitle, Image, Cell, CellIcon, TextBoxSubTitle, Col, Row } from '@sberdevices/plasma-ui'
import styled from 'styled-components'
import { MovieType } from '../types'
import { isSberPortal, isSberBox } from "@sberdevices/plasma-ui"

const StyledTextBox = styled(TextBox)`
  margin-top: 1rem;
  /* margin-bottom: 4rem; */
`
const StyledImage = styled(Image)`
  /* margin: 0 auto; */
  margin-bottom: 1rem;
`

export const MovieCard = ({ movie }: { movie: MovieType }) => {
  const heightStyle = (isSberPortal() === true || isSberBox() === true) ? "520px" : "0 auto"
  return (
    <>
      <Row>
        <StyledImage
          src={movie.img}
          style={{ width: "330px", height: "550px", marginBottom: "5px" }}
        />
        <Col type="calc" sizeXL={6} sizeM={4} sizeS={8}>
          <Card
            // style={{ height: heightStyle, }}
            style={{padding: '0.7rem', height: heightStyle}}
          >
            <CardContent compact>
              <TextBox>
                <TextBoxBigTitle>{movie.name}</TextBoxBigTitle>
                {/* <TextBoxSubTitle>{filmInfo.slogan}</TextBoxSubTitle><br /> */}
              </TextBox>
              <Cell
                contentLeft={<CellIcon>
                  <IconStarFill />
                </CellIcon>}
                content={<TextBox><TextBoxSubTitle>Оценка: </TextBoxSubTitle><TextBoxSubTitle>{movie.rate}</TextBoxSubTitle></TextBox>}
                alignRight="center"
              />
              <Cell
                contentLeft={<CellIcon>
                  <IconCalendar />
                </CellIcon>}
                content={<TextBox><TextBoxSubTitle>Год: </TextBoxSubTitle><TextBoxSubTitle>{movie.year}</TextBoxSubTitle></TextBox>}
                alignRight="center"
              />
              <Cell
                contentLeft={<CellIcon>
                  <IconAccessibility />
                </CellIcon>}
                content={<TextBox><TextBoxSubTitle>Жанр: </TextBoxSubTitle><TextBoxSubTitle>{movie.genres.join(', ')}</TextBoxSubTitle></TextBox>}
                alignRight="center"
              />

            </CardContent>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col type="calc" sizeXL={12} sizeM={6} sizeS={8} style={{ marginBottom: '20px' }}>
          <TextBox>
            <TextBoxBigTitle>Описание</TextBoxBigTitle>
            <TextBoxSubTitle>«{movie.description}»</TextBoxSubTitle>

          </TextBox><br /><br /><br /><br /><br />
        </Col>
      </Row>
    </>
  )
}