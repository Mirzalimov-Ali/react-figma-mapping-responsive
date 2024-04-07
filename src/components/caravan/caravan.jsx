import React from 'react'
import { caravan } from '../mock/caravan'
import { CardButtonWrapper, Price, Boxes, BoxesData, BoxesDataInput, BoxesDataWrapper, BoxesDownArrow, BoxesTitleWrapper, CarContainer, Card, CardBottom, CardBottomCarName, CardBottomMiddle, CostBox, CostBoxInput, HomeButton, HomeButtonContainer, HomeContainer, HomeLeftCarWrapper, HomeLeftContainer, HomeLeftParagraph, HomeRightContainer, HomeRightTop, HomeRightTopButton, HomeRightTopLeft, HomeRightTopLeftRight, HomeRightTopRight, Line, LongLine, MappingButton, SortInput, Div, CardImg, HeaderContainer, BigWrapper } from '../../style'

// img //
import downArrow from '../../assets/big-down-arrow.svg'
import fourDots from '../../assets/four-dots.svg'
import menu from '../../assets/menu.svg'
import star from '../../assets/star.svg'
import { CaravanCard, CaravanCardRight, CaravanContainer, CaravanImgWrapper } from '../../caravanStyle'

function Caravan() {
  const data = caravan.maindata
  return (
    <HomeContainer>
    <HomeLeftContainer>
      <div>
          <HomeLeftParagraph>Cost of car</HomeLeftParagraph>
          <Line/>
          <CostBox>
              <div>
                  <label htmlFor="from">from</label> <br />
                  <CostBoxInput type="text" id='from'/>
              </div>
              <div>
                  <label htmlFor="to">to</label> <br />
                  <CostBoxInput type="text" id='to'/>
              </div>
          </CostBox>

          <Boxes>
              <BoxesTitleWrapper>
                  <h3>Brand</h3>
                  <BoxesDownArrow src={downArrow} />
              </BoxesTitleWrapper>

              <Line/>

              <BoxesDataWrapper>
                  <BoxesData style={{display: "flex", gap: "10px"}}>
                      <BoxesDataInput type="checkbox" id="aidal"/>
                      <label htmlFor="aidal">Aidal</label>
                  </BoxesData>
                  <BoxesData style={{display: "flex", gap: "10px"}}>
                      <BoxesDataInput type="checkbox" id="knal"/>
                      <label htmlFor="knal">Knal</label>
                  </BoxesData>
                  <BoxesData style={{display: "flex", gap: "10px"}}>
                      <BoxesDataInput type="checkbox" id="escape"/>
                      <label htmlFor="escape">escape</label>
                  </BoxesData>
              </BoxesDataWrapper>
          </Boxes>

          <Boxes>
              <BoxesTitleWrapper>
                  <h3>Company</h3>
                  <BoxesDownArrow src={downArrow} alt="" />
              </BoxesTitleWrapper>

              <Line/>

              <BoxesDataWrapper>
                  <BoxesData>
                      <BoxesDataInput type="checkbox" id="escape2"/>
                      <label htmlFor="escape2">escape</label>
                  </BoxesData>
                  <BoxesData>
                      <BoxesDataInput type="checkbox" id="aidal2"/>
                      <label htmlFor="aidal2">Aidal</label>
                  </BoxesData>
              </BoxesDataWrapper>
          </Boxes>

          <Boxes>
              <BoxesTitleWrapper>
                  <h3>License type</h3>
                  <BoxesDownArrow src={downArrow} alt=""/>
              </BoxesTitleWrapper>

              <Line/>

              <BoxesDataWrapper>
                  <BoxesData>
                      <BoxesDataInput type="checkbox" name="" id="1year"/>
                      <label htmlFor="1year">1 year</label>
                  </BoxesData>
                  <BoxesData>
                      <BoxesDataInput type="checkbox" name="" id="2year"/>
                      <label htmlFor="2year">2 year</label>
                  </BoxesData>
                  <BoxesData>
                      <BoxesDataInput type="checkbox" name="" id="15year"/>
                      <label htmlFor="15year">1.5year</label>
                  </BoxesData>
              </BoxesDataWrapper>
          </Boxes>

          <Boxes>
              <BoxesTitleWrapper>
                  <h3>Number of travelers</h3>
                  <BoxesDownArrow src={downArrow} alt=""/>
              </BoxesTitleWrapper>
              <Line/>
              <BoxesDataWrapper>
                  <BoxesData>
                      <BoxesDataInput type="checkbox" name="" id="two"/>
                      <label htmlFor="two">2</label>
                  </BoxesData>
                  <BoxesData>
                      <BoxesDataInput type="checkbox" name="" id="three-minus-four"/>
                      <label htmlFor="three-minus-four">3-4</label>
                  </BoxesData>
                  <BoxesData>
                      <BoxesDataInput type="checkbox" name="" id="five-plus"/>
                      <label htmlFor="five-plus">5+</label>
                  </BoxesData>
              </BoxesDataWrapper>
          </Boxes>
          <Boxes>
              <BoxesTitleWrapper>
                  <h3>Location</h3>
                  <BoxesDownArrow src={downArrow} alt=""/>
              </BoxesTitleWrapper>
              <Line/>
              <BoxesDataWrapper>
                  <BoxesData>
                      <BoxesDataInput type="checkbox" name="" id="seoul"/>
                      <label htmlFor="seoul">Seoul</label>
                  </BoxesData>
                  <BoxesData>
                      <BoxesDataInput type="checkbox" name="" id="Korea"/>
                      <label htmlFor="Korea">Korea</label>
                  </BoxesData>
                  <BoxesData>
                      <BoxesDataInput type="checkbox" name="" id="Pusan"/>
                      <label htmlFor="Pusan">Pusan</label>
                  </BoxesData>
              </BoxesDataWrapper>
          </Boxes>
          <HomeButtonContainer>
              <HomeButton>Cancel</HomeButton>
              <HomeButton $search>Search</HomeButton>
          </HomeButtonContainer>
      </div>
    </HomeLeftContainer>

    <HomeRightContainer>
        <HomeRightTop>
            <HomeRightTopLeft>
                <div>
                    <p style={{fontWeight: "600"}}>Item<span style={{marginLeft: "10px", color: "#006DAB"}}>{data.length}</span></p>
                </div>
                <HomeRightTopLeftRight $displayNone>
                    <HomeRightTopButton><img src={fourDots} alt=""/></HomeRightTopButton>
                    <HomeRightTopButton $rightButton><img src={menu} alt=""/></HomeRightTopButton>
                </HomeRightTopLeftRight>
            </HomeRightTopLeft>
            
            <HomeRightTopRight>
                <p>Sort<span style={{marginLeft: '5px'}}>by</span></p>
                <div>
                    <SortInput type="text" placeholder='Select'/>
                    <HomeRightTopButton $rightButton><img src={downArrow} alt=""/></HomeRightTopButton>
                </div>
                <div>
                    <SortInput type="text" placeholder='60' $short/>
                    <HomeRightTopButton $rightButton><img src={downArrow} alt=""/></HomeRightTopButton>
                </div>
                <div className='none'>
                    <HomeRightTopButton><img src={fourDots} alt=""/></HomeRightTopButton>
                    <HomeRightTopButton $rightButton><img src={menu} alt=""/></HomeRightTopButton>
                </div>
            </HomeRightTopRight>
        </HomeRightTop>
        <LongLine/>

        <CaravanContainer>
          {data.map((value, key) => {
            const car = value.caravan;
            return (
              <CaravanCard key={key}>
                <CaravanImgWrapper>
                  <img src={car.image}/>
                </CaravanImgWrapper>
                <CaravanCardRight>
                </CaravanCardRight>
              </CaravanCard>
            )
          })}
        </CaravanContainer>
    </HomeRightContainer>
</HomeContainer>
  )
}

export default Caravan
