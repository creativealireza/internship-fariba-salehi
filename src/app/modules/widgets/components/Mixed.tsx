import React, {FC} from 'react'
import {
  MixedWidget1,
  MixedWidget2,
  MixedWidget3,
  MixedWidget4,
  MixedWidget5,
  MixedWidget6,
  MixedWidget7,
  MixedWidget8,
  MixedWidget9,
  MixedWidget10,
  MixedWidget11,
} from '../../../../_metronic/partials/widgets'

const Mixed: FC = () => {
  return (
    <>
      {/* begin::Row */}
      <div className='row g-5 g-xl-8'>
        {/* begin::Col */}
        <div className='col-xl-4'>
          <MixedWidget3
            className='card-xl-stretch mb-5 mb-xl-8'
            chartColor='primary'
            chartHeight='250px'
          />
        </div>
        {/* end::Col */}

        {/* begin::Col */}
        <div className='col-xl-4'>
          <MixedWidget1 className='card-xl-stretch mb-5 mb-xl-8' color='success' />
        </div>
        {/* end::Col */}

        {/* begin::Col */}
        <div className='col-xl-4'>
          <MixedWidget2
            className='card-xl-stretch mb-xl-8'
            chartColor='danger'
            chartHeight='200px'
            strokeColor='#cb1e46'
          />
        </div>
  
        {/* end::Col */}
      </div>
      {/* end::Row */}


      {/* begin::Row */}
      <div className='row g-5 g-xl-8'>
        {/* begin::Col */}
        <div className='col-xl-4'>
          <MixedWidget6
            className='card-xl-stretch mb-xl-8'
            chartColor='primary'
            chartHeight='150px'
          />
        </div>
        {/* end::Col */}

        {/* begin::Col */}
        <div className='col-xl-4'>
          <MixedWidget7
            className='card-xl-stretch mb-xl-8'
            chartColor='danger'
            chartHeight='200px'
          />
        </div>
        {/* end::Col */}

        {/* begin::Col */}
        <div className='col-xl-4'>
          <MixedWidget9
            className='card-xl-stretch mb-xl-8'
            chartColor='success'
            chartHeight='150px'
          />
        </div>
        {/* end::Col */}
      </div>
      {/* end::Row */}
    </>
  )
}

export {Mixed}
