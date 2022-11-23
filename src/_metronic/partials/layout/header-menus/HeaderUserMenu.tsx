/* eslint-disable jsx-a11y/anchor-is-valid */
import {FC} from 'react'
import {Link} from 'react-router-dom'
import {Languages} from './Languages'
import {toAbsoluteUrl} from '../../../helpers'
import {useIntl} from 'react-intl'

const HeaderUserMenu: FC = () => {
  const intl = useIntl()

  return (
    <div
      className='menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg menu-state-primary fw-bold py-4 fs-6 w-275px'
      data-kt-menu='true'
    >
      <div className='menu-item px-3'>
        <div className='menu-content d-flex align-items-center px-3'>
          <div className='symbol symbol-50px me-5'>
            <img style={{objectFit: "cover"}}  alt='Logo' src={toAbsoluteUrl('/media/avatars/300-1.jpg')} />
          </div>

          <div className='d-flex flex-column'>
            <div className='fw-bolder d-flex align-items-center fs-5'>
              {'Alireza'} {'Rahimi'}
              <span className='badge badge-light-success fw-bolder fs-8 px-2 py-1 ms-2'>
                {intl.formatMessage({id: 'HEADERPROFILE.PRO'})}
              </span>
            </div>
            <a href='#' className='fw-bold text-muted text-hover-primary fs-7'>
              {'Ar.Dvlpr@gmail.com'}
            </a>
          </div>
        </div>
      </div>

      <div className='separator my-2'></div>

      <div className='menu-item px-5'>
        <Link to={'/crafted/pages/profile'} className='menu-link px-5'>
          {intl.formatMessage({id: 'ITEMS.OTHERS'})}
        </Link>
      </div>

      <div className='separator my-2'></div>

      <Languages />

      <div className='menu-item px-5 my-1'>
        <Link to='/crafted/account/settings' className='menu-link px-5'>
          {intl.formatMessage({id: 'ITEMS.OTHERS'})}
        </Link>
      </div>

      <div className='menu-item px-5'>
        <a className='menu-link px-5'>
          {intl.formatMessage({id: 'ITEMS.OTHERS'})}
        </a>
      </div>
    </div>
  )
}

export {HeaderUserMenu}
