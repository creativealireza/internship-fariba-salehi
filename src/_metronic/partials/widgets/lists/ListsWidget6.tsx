/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {KTSVG} from '../../../helpers'
import {Dropdown1} from '../../content/dropdown/Dropdown1'
import {useIntl} from 'react-intl'

type Props = {
  className: string
}

const ListsWidget6: React.FC<Props> = ({className}) => {
  const intl = useIntl()

  return (
    <div className='card card-xl-stretch mb-5 mb-xl-8'>
      {/* begin::Header */}
      <div className='card-header border-0'>
        <h3 className='card-title fw-bold text-dark'>{intl.formatMessage({id: 'LISTS.NOTIFICATIONS'})}</h3>
        <div className='card-toolbar'>
          {/* begin::Menu */}
          <Dropdown1 />
          {/* end::Menu */}
        </div>
      </div>
      {/* end::Header */}
      {/* begin::Body */}
      <div className='card-body pt-0'>
        {/* begin::Item */}
        <div className='d-flex align-items-center bg-light-warning rounded p-5 mb-7'>
          {/* begin::Icon */}
          <span className='svg-icon svg-icon-warning me-5'>
            <KTSVG path='/media/icons/duotune/abstract/abs027.svg' className='svg-icon-1' />
          </span>
          {/* end::Icon */}
          {/* begin::Title */}
          <div className='flex-grow-1 me-2'>
            <a href='#' className='fw-bold text-gray-800 text-hover-primary fs-6'>
              {intl.formatMessage({id: 'ITEMS.GLC'})}
            </a>
            <span className='text-muted fw-semibold d-block'>
              {intl.formatMessage({id: 'ITEMS.DUEIN'})} 6 {intl.formatMessage({id: 'ITEMS.DAYS'})}
            </span>
          </div>
          {/* end::Title */}
          {/* begin::Lable */}
          <span className='fw-bold text-warning py-1'>+28%</span>
          {/* end::Lable */}
        </div>
        {/* end::Item */}
        {/* begin::Item */}
        <div className='d-flex align-items-center bg-light-success rounded p-5 mb-7'>
          {/* begin::Icon */}
          <span className='svg-icon svg-icon-success me-5'>
            <KTSVG path='/media/icons/duotune/abstract/abs027.svg' className='svg-icon-1' />
          </span>
          {/* end::Icon */}
          {/* begin::Title */}
          <div className='flex-grow-1 me-2'>
            <a href='#' className='fw-bold text-gray-800 text-hover-primary fs-6'>
              {intl.formatMessage({id: 'ITEMS.NAVOPTIMIZATION'})}
            </a>
            <span className='text-muted fw-semibold d-block'>
              {intl.formatMessage({id: 'ITEMS.DUEIN'})} 2 {intl.formatMessage({id: 'ITEMS.DAYS'})}
            </span>
          </div>
          {/* end::Title */}
          {/* begin::Lable */}
          <span className='fw-bold text-success py-1'>+50%</span>
          {/* end::Lable */}
        </div>
        {/* end::Item */}
        {/* begin::Item */}
        <div className='d-flex align-items-center bg-light-danger rounded p-5 mb-7'>
          {/* begin::Icon */}
          <span className='svg-icon svg-icon-danger me-5'>
            <KTSVG path='/media/icons/duotune/abstract/abs027.svg' className='svg-icon-1' />
          </span>
          {/* end::Icon */}
          {/* begin::Title */}
          <div className='flex-grow-1 me-2'>
            <a href='#' className='fw-bold text-gray-800 text-hover-primary fs-6'>
              {intl.formatMessage({id: 'ITEMS.RSP'})}
            </a>
            <span className='text-muted fw-semibold d-block'>
              {intl.formatMessage({id: 'ITEMS.DUEIN'})} 5 {intl.formatMessage({id: 'ITEMS.DAYS'})}
            </span>
          </div>
          {/* end::Title */}
          {/* begin::Lable */}
          <span className='fw-bold text-danger py-1'>-27%</span>
          {/* end::Lable */}
        </div>
        {/* end::Item */}
        {/* begin::Item */}
        <div className='d-flex align-items-center bg-light-info rounded p-5'>
          {/* begin::Icon */}
          <span className='svg-icon svg-icon-info me-5'>
            <KTSVG path='/media/icons/duotune/abstract/abs027.svg' className='svg-icon-1' />
          </span>
          {/* end::Icon */}
          {/* begin::Title */}
          <div className='flex-grow-1 me-2'>
            <a href='#' className='fw-bold text-gray-800 text-hover-primary fs-6'>
              {intl.formatMessage({id: 'ITEMS.PGS'})}
            </a>
            <span className='text-muted fw-semibold d-block'>
              {intl.formatMessage({id: 'ITEMS.DUEIN'})} 7 {intl.formatMessage({id: 'ITEMS.DAYS'})}
            </span>
          </div>
          {/* end::Title */}
          {/* begin::Lable */}
          <span className='fw-bold text-info py-1'>+8%</span>
          {/* end::Lable */}
        </div>
        {/* end::Item */}
      </div>
      {/* end::Body */}
    </div>
  )
}

export {ListsWidget6}
