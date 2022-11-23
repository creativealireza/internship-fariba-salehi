/* eslint-disable jsx-a11y/anchor-is-valid */
import {FC} from 'react'
import {useIntl} from 'react-intl'
import {PageTitle} from '../../../_metronic/layout/core'
import {
  ListsWidget2,
  ListsWidget4,
  ListsWidget6,
  CardsWidget7,
  CardsWidget17,
} from '../../../_metronic/partials/widgets'

const DashboardPage: FC = () => {
  const intl = useIntl();

  return (
    <>
      <div className='row g-5 g-xl-10 mb-5 mb-xl-10'>
        {/* <div className='col-md-6 col-lg-6 col-xl-6 col-xxl-3 mb-md-5 mb-xl-10'> */}
        <div className='col-md-6 col-lg-6 col-xl-6 col-xxl-3 mb-md-5 mb-xl-10'>
          <CardsWidget7
            className='h-md-100 mb-5 mb-xl-10'
            description={intl.formatMessage({id: 'ITEMS.PROFFESTIONALS'})}
            icon={false}
            stats={357}
            labelColor='dark'
            textColor='gray-300'
          />
        </div>

        <div className='col-md-6 col-lg-6 col-xl-6 col-xxl-3 mb-md-5 mb-xl-10'>
          <CardsWidget17 className='h-md-100 mb-5 mb-xl-10' />
        </div>
      </div>
      
      <div className='row gy-5 g-xl-8'>
        <div className='col-xl-4'>
          <ListsWidget2 className='card-xl-stretch mb-xl-8' />
        </div>
        <div className='col-xl-4'>
          <ListsWidget6 className='card-xl-stretch mb-xl-8' />
        </div>
        <div className='col-xl-4'>
          <ListsWidget4 className='card-xl-stretch mb-5 mb-xl-8' items={5} />
        </div>
      </div>
    </>
  )
}

const DashboardWrapper: FC = () => {
  const intl = useIntl()
  return (
    <>
      <PageTitle breadcrumbs={[]}>{intl.formatMessage({id: 'MENU.DASHBOARD'})}</PageTitle>
      <DashboardPage />
    </>
  )
}

export {DashboardWrapper}
