import React, { useState, useEffect } from 'react';
import { news } from './data';
import {
    Author,
    Container,
    DateCreate,
    Description,
    Image,
    Info,
    NewsContainer,
    NewsItem,
    NewsTitle,
    Option,
    OptionTitle,
    Title,
    PageContainer
} from './fashionNews.elements'
import Pagination from '@mui/material/Pagination';
import { useTranslation } from 'react-i18next';

function FashionNews() {
  const { t } = useTranslation();

    const [pageNumber, setPageNumber] = useState(1)
    const [pageData, setPageData] = useState<any>([])

    const newsPerPage = 4
    const numberOfPage = Math.ceil(news.length / newsPerPage)

    const handleChange = (event: any, value: any) => {
        setPageNumber(value)
    }

    useEffect(() => {
        const indexOfLastNews = pageNumber * newsPerPage
        const indexOfFirstNews = indexOfLastNews - newsPerPage
        const data = []
        if(pageNumber >= 1){
            data.push(news.slice(indexOfFirstNews, indexOfLastNews))
        }

        setPageData(data)
    }, [pageNumber])

    return (
    <Container>
      <Title>{t('new_products')}</Title>
      <NewsContainer>
        {pageData[0]?.map((item: any, index: any) => (
          <NewsItem key={index}>
            <Image src={item.image_url} alt="" />
            <Info>
              <DateCreate>{item.date_create}</DateCreate>
              <Author>{item.author}</Author>
            </Info>
            <NewsTitle>{item.title}</NewsTitle>
            <Description>{item.description?.slice(0, 120)}</Description>
            <Option>
                <OptionTitle>{t('read_more')}</OptionTitle>
            </Option>
          </NewsItem>
        ))}
      </NewsContainer>
      <PageContainer>
        <Pagination count={numberOfPage} showFirstButton showLastButton onChange={handleChange}/>
      </PageContainer>
    </Container>
  );
}

export default FashionNews;
