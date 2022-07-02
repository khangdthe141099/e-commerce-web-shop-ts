import React from 'react'
import { 
    Container
} from './announcement.elements'
import { useTranslation } from 'react-i18next';

function Announcement() {
    const { t } = useTranslation();

    return (
        <Container>
           {t('nav_super_deal')}
        </Container>
    )
}

export default Announcement
